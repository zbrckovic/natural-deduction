import { bindTrackingTrait } from './bind-tracking-trait'

export const freeIndVarsSubstitutionVisitorTrait = {
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
    return forwardRef.createAtomicFormula(
      formula.predVar(),
      ...formula.terms().map(term => term.accept(this))
    )
  },
  visitTerm (term) {
    return forwardRef.createTerm(
      this._resolveSubstitute(term.termVar()),
      ...term.terms().map(term => term.accept(this))
    )
  },
  _resolveSubstitute (indVar) {
    if (this._isBound(indVar)) return indVar
    return this._substitutions[indVar.id()] ?? indVar
  }
}

export function createFreeIndVarsSubstitutionVisitor (substitutions) {
  const that = Object.create(freeIndVarsSubstitutionVisitorTrait)
  that._boundVars = {}
  that._substitutions = substitutions
  return that
}

// Avoiding circular imports
export const forwardRef = {
  createBinaryFormula: undefined,
  createUnaryFormula: undefined,
  createQuantifiedFormula: undefined,
  createAtomicFormula: undefined,
  createTerm: undefined
}
