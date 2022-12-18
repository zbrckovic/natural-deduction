import { forwardRef } from '../algorithms/free-ind-vars-substitution-visitor'
import { formulaTrait } from '../traits'

export function createQuantifiedFormula (quantifier, indVar, formula) {
  const that = Object.create(quantifiedFormulaTrait)
  Object.assign(that, {
    _quantifier: quantifier,
    _indVar: indVar,
    _formula: formula
  })

  return that
}

const quantifiedFormulaTrait = {
  ...formulaTrait,

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
  }
}

forwardRef.createQuantifiedFormula = createQuantifiedFormula
