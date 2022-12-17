import { formulaProto } from './common'

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
  },
  /**
   * Finds free individual variables and returns them as a map (variables by ids).
   * @param boundVars - The map of bound variables used in recursive calls.
   */
  findFreeIndVars (boundVars = {}) {
    return this.formula().findFreeIndVars(boundVars)
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

export const UnaryOperator = {
  NEGATION: 'NEGATION'
}
