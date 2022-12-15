import { formulaProto } from './formula-common'

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
   * Finds a subexpression by following the path.
   * @param path - The list of indices where each index represents the point of branching.
   */
  get (...path) {
    if (path.length === 0) return this
    const [i, ...rest] = path
    const formulas = [this.lFormula(), this.rFormula()]
    return formulas[i].get(...rest)
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
