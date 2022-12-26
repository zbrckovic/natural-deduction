import { expressionComparingVisitorTrait } from './expression-comparing-visitor-trait'
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

  /** Free individual variables which are equal in both expressions. */
  that._freeIndVarsEqualInBoth = {}

  /** Free individual variable in the reference expression which has been substituted. */
  that._refIndVar = undefined

  /** A substitute for `_refIndVar` in the visited expression. */
  that._visIndVar = undefined

  return that
}

const freeIndVarSubstitutionFinderVisitorTrait = {
  ...expressionComparingVisitorTrait,
  ...bindTrackingTrait,
  result () {
    if (this._refIndVar !== undefined) {
      return [this._refIndVar, this._visIndVar]
    } else {
      return undefined
    }
  },
  visitBinaryFormula (formula) {
    const refFormula = this.refExpression()

    // Confirm that expressions are comparable.
    if (refFormula.type() !== formula.type() || refFormula.operator() !== formula.operator()) {
      throw new FreeIndVarSubstitutionFinderVisitorError('formulas not comparable')
    }

    this.doWithRefExpression(refFormula.lFormula(), () => formula.lFormula().accept(this))
    this.doWithRefExpression(refFormula.rFormula(), () => formula.rFormula().accept(this))
  },
  visitUnaryFormula (formula) {
    const refFormula = this.refExpression()

    // Confirm that expressions are comparable.
    if (refFormula.type() !== formula.type() || refFormula.operator() !== formula.operator()) {
      throw FreeIndVarSubstitutionFinderVisitorError('formulas not comparable')
    }

    this.doWithRefExpression(refFormula.formula(), () => formula.formula().accept(this))
  },
  visitQuantifiedFormula (formula) {
    const refFormula = this.refExpression()

    // Confirm that expressions are comparable.
    if (refFormula.type() !== formula.type() || refFormula.quantifier() !== formula.quantifier()) {
      throw new FreeIndVarSubstitutionFinderVisitorError('formulas not comparable')
    }

    const refIndVar = refFormula.indVar()
    const visIndVar = formula.indVar()

    if (!equals(refIndVar, visIndVar)) {
      throw new FreeIndVarSubstitutionFinderVisitorError('binding variables not equal')
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
    if (refFormula.type() !== formula.type() || refFormula.arity() !== formula.arity()) {
      throw new FreeIndVarSubstitutionFinderVisitorError('formulas not comparable')
    }

    return refFormula.terms().forEach((refTerm, i) => {
      const visTerm = formula.terms()[i]
      this.doWithRefExpression(refTerm, () => visTerm.accept(this))
    })
  },
  visitTerm (term) {
    const refTerm = this.refExpression()

    // Confirm that expressions are comparable.
    if (refTerm.type() !== term.type() || refTerm.arity() !== term.arity()) {
      throw new FreeIndVarSubstitutionFinderVisitorError('formulas not comparable')
    }

    if (refTerm.isIndVar()) {
      const refIndVar = refTerm.termVar()
      const visIndVar = term.termVar()

      if (this.isBound(refIndVar)) {
        if (!equals(refIndVar, visIndVar)) {
          throw new FreeIndVarSubstitutionFinderVisitorError('bound variables not equal')
        }
      } else {
        this.registerFreeIndVars(refIndVar, visIndVar)
      }
    } else {
      if (!equals(refTerm.termVar(), term.termVar())) {
        throw new FreeIndVarSubstitutionFinderVisitorError('formulas not comparable')
      } else {
        refTerm.terms().forEach((refTerm, i) => {
          const visTerm = term.terms()[i]
          this.doWithRefExpression(refTerm, () => visTerm.accept(this))
        })
      }
    }
  },
  registerFreeIndVars (refIndVar, visIndVar) {
    if (this.isBound(visIndVar)) {
      throw new FreeIndVarSubstitutionFinderVisitorError('substitute becomes bound')
    }

    if (equals(refIndVar, visIndVar)) {
      // Variable is the same in both formulas ...

      if (equals(this._refIndVar, refIndVar)) {
        // ... but it has been registered as a difference.
        throw new FreeIndVarSubstitutionFinderVisitorError('substitution not total')
      } else {
        this._freeIndVarsEqualInBoth[refIndVar.id()] = refIndVar
      }
    } else {
      // Variables are different.

      if (this._freeIndVarsEqualInBoth[refIndVar.id()] !== undefined) {
        throw new FreeIndVarSubstitutionFinderVisitorError('substitution not total')
      } else if (this._refIndVar === undefined) {
        // This is the first pair of different variables so far.
        this._refIndVar = refIndVar
        this._visIndVar = visIndVar
      } else {
        // Some variable has already been registered.
        if (!equals(refIndVar, refIndVar)) {
          throw new FreeIndVarSubstitutionFinderVisitorError(
            'expressions differ in more than one variable'
          )
        } else if (!equals(this._visIndVar, visIndVar)) {
          throw new FreeIndVarSubstitutionFinderVisitorError('substitution not uniform')
        }
      }
    }
  }
}

export class FreeIndVarSubstitutionFinderVisitorError extends Error {
  constructor () {
    super('substitute becomes bound')
  }
}
