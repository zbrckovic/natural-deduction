const subformulaFinderTrait = {
  visitBinaryFormula (formula) {
    if (this._isRoot()) return formula
    const i = this._path.shift()
    const formulas = [formula.lFormula(), formula.rFormula()]
    const subformula = formulas[i]
    return subformula.accept(this)
  },
  visitUnaryFormula (formula) {
    if (this._isRoot()) return formula
    const i = this._path.shift()
    this._confirmIndexIsZero(i)
    return formula.formula().accept(this)
  },
  visitQuantifiedFormula (formula) {
    if (this._isRoot()) return formula
    const i = this._path.shift()
    this._confirmIndexIsZero(i)
    return formula.formula().accept(this)
  },
  visitAtomicFormula (formula) {
    if (this._isRoot()) return formula
    const i = this._path.shift()
    const term = formula.terms()[i]
    return term.accept(this)
  },
  visitTerm (term) {
    if (this._isRoot()) return term
    const i = this._path.shift()
    const subterm = term.terms()[i]
    return subterm.accept(this)
  },
  _isRoot () {
    return this._path.length === 0
  },
  _confirmIndexIsZero (i) {
    if (i !== 0) throw new Error(`Invalid index ${i}`)
  }
}

export function createSubformulaFinderVisitor (path) {
  const that = Object.create(subformulaFinderTrait)
  that._path = path
  return that
}
