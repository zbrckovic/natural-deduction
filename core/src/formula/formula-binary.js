import { formulaProto } from './common'

const binaryFormulaProto = {
  ...formulaProto,

  operator () {
    return this._operator
  },
  lFormula () {
    return this._lFormula
  },
  rFormula () {
    return this._rFormula
  },
  accept (visitor) {
    return visitor.visitBinaryFormula(this)
  },
  /**
   * Finds free individual variables and returns them as a map (variables by ids).
   * @param boundVars - The map of bound variables used in recursive calls.
   */
  findFreeIndVars (boundVars = {}) {
    return {
      ...this.lFormula().findFreeIndVars(boundVars),
      ...this.rFormula().findFreeIndVars(boundVars)
    }
  }
}

export function createBinaryFormula (operator, lFormula, rFormula) {
  const that = Object.create(binaryFormulaProto)
  Object.assign(that, {
    _operator: operator,
    _lFormula: lFormula,
    _rFormula: rFormula
  })

  return that
}

export const BinaryOperator = {
  CONJUNCTION: 'CONJUNCTION',
  DISJUNCTION: 'DISJUNCTION',
  CONDITIONAL: 'CONDITIONAL',
  BICONDITIONAL: 'BICONDITIONAL'
}
