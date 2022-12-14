import { formulaTrait } from './formula-common'

const unaryFormulaTrait = {
  ...formulaTrait,
  operator () {
    return this._operator
  },
  formula () {
    return this._formula
  },
  accept (visitor) {
    return visitor.visitUnaryFormula(this)
  },
  get (...path) {
    if (path.length === 0) return this
    const [i, ...rest] = path
    if (i !== 0) throw new Error(`Invalid index ${i}`)
    return this.formula().get(...rest)
  }
}

export function createUnaryFormula (operator, formula) {
  const that = Object.create(unaryFormulaTrait)
  Object.assign(that, {
    _operator: operator,
    _formula: formula
  })

  return that
}

export const UnaryOperator = {
  NEGATION: 'NEGATION'
}
