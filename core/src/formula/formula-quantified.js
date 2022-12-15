const quantifiedFormulaProto = {
  quantifier () {
    return this._quantifier
  },
  indVar () {
    return this._indVar
  },
  formula () {
    return this._formula
  },
  accept (visitor) {
    return visitor.visitQuantifiedFormula(this)
  },
  get (...path) {
    if (path.length === 0) return this
    const [i, ...rest] = path
    if (i !== 0) throw new Error(`Invalid index ${i}`)
    return this.formula().get(...rest)
  }
}

export function createQuantifiedFormula (quantifier, indVar, formula) {
  const that = Object.create(quantifiedFormulaProto)
  Object.assign(that, {
    _quantifier: quantifier,
    _indVar: indVar,
    _formula: formula
  })

  return that
}

export const Quantifier = {
  UNIVERSAL: 'UNIVERSAL',
  EXISTENTIAL: 'EXISTENTIAL'
}
