/** Creates an expression visitor which finds a subexpression at the specified path. */
export function createSubformulaFinderVisitor (path) {
  const that = Object.create(subformulaFinderTrait)
  that._path = path
  return that
}

const subformulaFinderTrait = {
  visitBinaryFormula (formula) {
    if (this.isRoot()) return formula
    const i = this._path.shift()
    const formulas = [formula.lFormula(), formula.rFormula()]
    const subformula = formulas[i]
    return subformula.accept(this)
  },
  visitUnaryFormula (formula) {
    if (this.isRoot()) return formula
    const i = this._path.shift()
    this.confirmIndexIsZero(i)
    return formula.formula().accept(this)
  },
  visitQuantifiedFormula (formula) {
    if (this.isRoot()) return formula
    const i = this._path.shift()
    this.confirmIndexIsZero(i)
    return formula.formula().accept(this)
  },
  visitAtomicFormula (formula) {
    if (this.isRoot()) return formula
    const i = this._path.shift()
    const term = formula.terms()[i]
    return term.accept(this)
  },
  visitTerm (term) {
    if (this.isRoot()) return term
    const i = this._path.shift()
    const subterm = term.terms()[i]
    return subterm.accept(this)
  },
  /** @private */
  isRoot () {
    return this._path.length === 0
  },
  /** @private */
  confirmIndexIsZero (i) {
    if (i !== 0) throw new Error(`invalid index ${i}`)
  }
}
