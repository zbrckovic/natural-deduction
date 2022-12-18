import { forwardRef } from '../algorithms/free-ind-vars-substitution-visitor'
import { formulaTrait } from '../traits'

export function createUnaryFormula (operator, formula) {
  const that = Object.create(unaryFormulaTrait)
  Object.assign(that, {
    _operator: operator,
    _formula: formula
  })

  return that
}

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
  }
}

forwardRef.createUnaryFormula = createUnaryFormula
