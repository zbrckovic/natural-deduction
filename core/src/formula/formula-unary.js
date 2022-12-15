import { formulaProto } from './formula-common'

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
   * Finds a subexpression by following the path.
   * @param path - The list of indices where each index represents the point of branching.
   */
  get (...path) {
    if (path.length === 0) return this
    const [i, ...rest] = path
    if (i !== 0) throw new Error(`Invalid index ${i}`)
    return this.formula().get(...rest)
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
