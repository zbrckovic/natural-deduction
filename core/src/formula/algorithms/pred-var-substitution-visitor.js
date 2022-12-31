import { areUnique } from '../../utilities'
import { bindTrackingTrait } from './bind-tracking-trait'
import { ErrorCode } from '../../errors'

/**
 * Substitutes occurrences or predicate variables.
 *
 * Finds all occurrences of predicate variable and substitutes them with a formula derived from the
 * template.
 */
export function createPredVarsSubstitutionVisitor (substitutions) {
  const that = Object.create(predVarsSubstitutionTrait)

  /**
   * All substitutions to be performed simultaneously.
   *
   * Key is a predicate variable, and value is the substitute template which will be used to
   * instantiate a formula for each occurrence of the predicate variable.
   */
  that._substitutions = substitutions
  that._boundVars = {}

  return that
}

const predVarsSubstitutionTrait = {
  ...bindTrackingTrait,

  visitBinaryFormula (formula) {
    return forwardRef.createBinaryFormula(
      formula.operator(),
      formula.lFormula().accept(this),
      formula.rFormula().accept(this)
    )
  },
  visitUnaryFormula (formula) {
    return forwardRef.createUnaryFormula(
      formula.operator(),
      formula.formula().accept(this)
    )
  },
  visitQuantifiedFormula (formula) {
    return this.doWithBoundIndVar(
      formula.indVar(),
      () => forwardRef.createQuantifiedFormula(
        formula.quantifier(),
        formula.indVar(),
        formula.formula().accept(this)
      )
    )
  },
  visitAtomicFormula (formula) {
    const template = this._substitutions[formula.predVar().id()]
    if (template === undefined) return formula
    this.confirmNotBound(template)
    return template.createSubstitute(...formula.terms().map(term => term.termVar()))
  },
  /**
   * Checks that free variables of the substitute would not get bound.
   * @private
   */
  confirmNotBound (template) {
    const templateFreeIndVarGetsBound = Object
      .values(template.freeIndVars())
      .some(indVar => this.isBound(indVar))

    if (templateFreeIndVarGetsBound) {
      throw new SubstituteBecomesBound()
    }
  }
}

export const createSubstituteTemplate = (() => {
  function create (formula, ...placeholders) {
    confirmPlaceholdersAreIndVars(placeholders)
    confirmPlaceholdersAreUnique(placeholders)

    const that = Object.create(trait)
    that._formula = formula
    that._placeholders = placeholders
    that._freeIndVars = extractFreeIndVars(formula, ...placeholders)
    return that
  }

  const trait = {
    /**
     * Substitutes all placeholders with specified individual variables.
     *
     * It instantiates the formula which can be used as a substitute for the predicate.
     * @param indVars - Individual variables to substitute for placeholders in the specified order
     * as they appear in an atomic formula being replaced.
     */
    createSubstitute (...indVars) {
      const substitutions = {}
      this._placeholders.forEach((placeholder, i) => {
        substitutions[placeholder.id()] = indVars[i]
      })
      try {
        return this._formula.substituteFreeIndVars(substitutions)
      } catch (error) {
        if (error.code === ErrorCode.VARIABLE_BECOMES_BOUND) {
          throw new SubstituteBindsExternalIndVarException()
        } else {
          throw error
        }
      }
    },
    freeIndVars () {
      return this._freeIndVars
    }
  }

  return create

  function confirmPlaceholdersAreIndVars (placeholders) {
    if (!placeholders.every(placeholder => placeholder.arity() === 0)) {
      throw new Error('placeholder not individual variable')
    }
  }

  function confirmPlaceholdersAreUnique (placeholders) {
    if (!areUnique(placeholders.map(placeholder => placeholder.id()))) {
      throw new Error('placeholders not unique')
    }
  }

  /** Extracts free individual variables in formula which are not among placeholders. */
  function extractFreeIndVars (formula, ...placeholders) {
    const freeIndVars = formula.findFreeIndVars()
    placeholders.forEach(placeholder => {
      delete freeIndVars[placeholder.id()]
    })
    return freeIndVars
  }
})()

/** When free variable of a substitute becomes bound. */
export class SubstituteBecomesBound extends Error {
  constructor () {
    super('substitute becomes bound')
  }
}

/** When substitute binds an external individual variable. */
export class SubstituteBindsExternalIndVarException extends Error {
  constructor () {
    super('substitute binds external individual variable')
  }
}

export const forwardRef = {
  createBinaryFormula: undefined,
  createUnaryFormula: undefined,
  createQuantifiedFormula: undefined
}
