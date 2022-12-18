import { formulaProto } from './formula'

const unaryFormulaProto = {
  ...formulaProto,

  operator () {
    return this._operator
  },
  formula () {
    return this._formula
  },
  accept (visitor) {
    return visitor.visitUnaryFormula(this)
  }
}

export function createUnaryFormula (operator, formula) {
  const that = Object.create(unaryFormulaProto)
  Object.assign(that, {
    _operator: operator,
    _formula: formula
  })

  return that
}
