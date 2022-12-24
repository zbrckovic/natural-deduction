import { bindTrackingTrait } from './bind-tracking-trait'

/** Creates an expression visitor which finds free individual variables. */
export function createFreeIndVarsFinderVisitor () {
  const that = Object.create(freeIndVarsFinderTrait)
  /**
   * Keeps track of how many times has each individual variable been specified as some ancestor's
   * bound variable.
   */
  that._boundVars = {}
  return that
}

const freeIndVarsFinderTrait = {
  ...bindTrackingTrait,

  visitBinaryFormula (formula) {
    return {
      ...formula.lFormula().accept(this),
      ...formula.rFormula().accept(this)
    }
  },
  visitUnaryFormula (formula) {
    return formula.formula().accept(this)
  },
  visitQuantifiedFormula (formula) {
    return this.doWithBoundIndVar(formula.indVar(), () => formula.formula().accept(this))
  },
  visitAtomicFormula (formula) {
    return formula.terms().reduce((acc, term) => ({ ...acc, ...term.accept(this) }), {})
  },
  visitTerm (term) {
    if (term.isIndVar()) {
      const indVar = term.termVar()
      const isFree = !this.isBound(indVar)
      return isFree ? { [indVar.id()]: indVar } : {}
    }
    return term.terms().reduce((acc, term) => ({ ...acc, ...term.accept(this) }), {})
  }
}
