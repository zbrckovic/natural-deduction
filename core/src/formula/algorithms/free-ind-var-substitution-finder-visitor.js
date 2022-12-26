import { formulaComparingVisitorTrait } from './formula-comparing-visitor-trait'
import { bindTrackingTrait } from './bind-tracking-trait'
import { equals } from '../../utilities'

/**
 * Creates a visitor which compares expressions which differ only in one free individual variable in
 * such a way that the visited expression can be obtained from the reference expression by
 * substituting one free individual variable. It returns a pair of individual variables.
 * @throws Throws an error if formulas differ in more than that.
 */
export function createFreeIndVarSubstitutionFinderVisitor (expression) {
  const that = Object.create(freeIndVarSubstitutionFinderVisitorTrait)

  /** A stack whose head is the reference expression against which visited one is compared. */
  that._refExpressionStack = [expression]

  /**
   * Keeps track of how many times has each individual variable been specified as some ancestor's
   * bound variable.
   */
  that._boundVars = {}

  /** Free individual variables which are equal in both formulas. */
  that._freeIndVars = {}

  /** Free individual variable in the reference formula which has been substituted. */
  that._refIndVar = undefined

  /** A substitute for `ref_ind_var` in the visited formula. */
  that._visIndVar = undefined

  return that
}

const freeIndVarSubstitutionFinderVisitorTrait = {
  ...formulaComparingVisitorTrait,
  ...bindTrackingTrait,
  visitBinaryFormula (formula) {
    const refFormula = this.refExpression()

    // Confirm that expressions are comparable.
    if (refFormula.type() !== formula.type()) throw new FormulasNotComparable()
    if (refFormula.operator() !== formula.operator()) throw new FormulasNotComparable()

    this.doWithRefExpression(refFormula.lFormula(), () => formula.lFormula().accept(this))
    this.doWithRefExpression(refFormula.rFormula(), () => formula.rFormula().accept(this))
  },
  visitUnaryFormula (formula) {
    const refFormula = this.refExpression()

    if (refFormula.type() !== formula.type()) throw new FormulasNotComparable()
    if (refFormula.operator() !== formula.operator()) throw new FormulasNotComparable()

    this.doWithRefExpression(refFormula.formula(), () => formula.formula().accept(this))
  },
  visitQuantifiedFormula (formula) {
    const refFormula = this.refExpression()

    // Confirm that expressions are comparable.
    if (refFormula.type() !== formula.type()) throw new FormulasNotComparable()
    if (refFormula.quantifier() !== formula.quantifier()) throw new FormulasNotComparable()

    const refIndVar = refFormula.indVar()
    const visIndVar = formula.indVar()

    if (!equals(refIndVar, visIndVar)) {
      throw new BindingVariablesNotEqual()
    }

    this.doWithBoundIndVar(refIndVar, () => {
      this.doWithRefExpression(refFormula.formula(), () => {
        formula.formula().accept(this)
      })
    })
  },
  visitAtomicFormula (formula) {
    const refFormula = this.refExpression()

    // Confirm that expressions are comparable.
    if (refFormula.type() !== formula.type()) throw new FormulasNotComparable()
    if (refFormula.arity() !== formula.arity()) throw new FormulasNotComparable()

    return refFormula.terms().forEach((refTerm, i) => {
      const visTerm = formula.terms()[i]
      this.doWithRefExpression(
        refTerm,
        () => visTerm.accept(this))
    })
  },
  visitTerm (term) {
    const refTerm = this.refExpression()

    // Confirm that expressions are comparable.
    if (refTerm.type() !== term.type()) throw new FormulasNotComparable()
    if (refTerm.arity() !== term.arity()) throw new FormulasNotComparable()

    if (refTerm.isIndVar()) {
      const refIndVar = refTerm.termVar()
      const visIndVar = term.termVar()

      if (this.isBound(refIndVar)) {
        if (!equals(refIndVar, visIndVar)) {
          throw new BoundVarsNotEqual()
        }
      } else {
        this.registerFreeIndVars(refIndVar, visIndVar)
      }
    }

    return refTerm.terms().forEach((refTerm, i) => {
      const visTerm = term.terms()[i]
      this.doWithRefExpression(refTerm, () => visTerm.accept(this))
    })
  },
  registerFreeIndVars (refIndVar, visIndVar) {
    if (this.isBound(visIndVar)) {
      throw new SubstituteBecomesBoundError()
    }

    if (equals(refIndVar, visIndVar)) {
      // Variable is the same in both formulas ...

      if (equals(this._refIndVar, refIndVar)) {
        // ... but it has been registered as a difference.
        throw new SubstitutionNotTotal('substitution not total')
      } else {
        this._freeIndVars[refIndVar.id()] = refIndVar
      }
    } else {
      // Variables are different.

      if (this._freeIndVars[refIndVar.id()] !== undefined) {
        throw new SubstitutionNotTotal('substitution not total')
      }

      if (this._refIndVar === undefined) {
        // This is the first pair of different variables so far.
        this.refIndVar = refIndVar
        this.visIndVar = visIndVar
      } else {
        // Some variable has already been registered.
        if (!equals(refIndVar, refIndVar)) {
          throw new ExpressionsDifferInMoreThanOneVariable()
        } else if (!equals(this.visIndVar, visIndVar)) {
          throw new SubstitutionNotUniform()
        }
      }
    }
  }
}

export class SubstituteBecomesBoundError extends Error {
  constructor () {
    super('substitute becomes bound')
  }
}

export class FormulasNotComparable extends Error {
  constructor () {
    super('formulas not comparable')
  }
}

export class BoundVarsNotEqual extends Error {
  constructor () {
    super('bound variables not equal')
  }
}

export class BindingVariablesNotEqual extends Error {
  constructor () {
    super('binding variables not equal')
  }
}

export class SubstitutionNotTotal extends Error {
  constructor () {
    super('substitution not total')
  }
}

export class ExpressionsDifferInMoreThanOneVariable extends Error {
  constructor () {
    super('formulas differ in more than one free individual variable')
  }
}

export class SubstitutionNotUniform extends Error {
  constructor () {
    super('substitution not uniform')
  }
}
