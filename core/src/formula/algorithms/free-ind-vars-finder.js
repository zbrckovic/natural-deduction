const freeIndVarsFinderProto = {
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
    this._registerBinding(formula.indVar())
    const result = formula.formula().accept(this)
    this._unregisterBinding(formula.indVar())
    return result
  },
  visitAtomicFormula (formula) {
    return formula.terms().reduce((acc, term) => ({ ...acc, ...term.accept(this) }), {})
  },
  visitTerm (term) {
    if (term.isIndVar()) {
      const indVar = term.termVar()
      const isFree = !this._isBound(indVar)
      return isFree ? { [indVar.id()]: indVar } : {}
    }
    return term.terms().reduce((acc, term) => ({ ...acc, ...term.accept(this) }), {})
  },
  _registerBinding (indVar) {
    this._boundVars[indVar.id()] = this._numberOfBinds(indVar) + 1
  },
  _unregisterBinding (indVar) {
    this._boundVars[indVar.id()] = this._numberOfBinds(indVar) - 1
  },
  _isBound (indVar) {
    return this._numberOfBinds(indVar) > 0
  },
  _numberOfBinds (indVar) {
    return this._boundVars[indVar.id()] ?? 0
  }
}

export function createFreeIndVarsFinder () {
  const that = Object.create(freeIndVarsFinderProto)
  that._boundVars = {}
  return that
}
