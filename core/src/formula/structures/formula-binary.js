import {
  forwardRef as freeIndVarsSubstitutionVisitorForwardRef
} from '../algorithms/free-ind-vars-substitution-visitor'
import { formulaTrait, forwardRef as formulaForwardRef } from '../traits'

export function createBinaryFormula (operator, lFormula, rFormula) {
  const that = Object.create(binaryFormulaTrait)
  Object.assign(that, {
    _operator: operator,
    _lFormula: lFormula,
    _rFormula: rFormula
  })
  return that
}

const binaryFormulaTrait = {
  ...formulaTrait,

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
  }
}

formulaForwardRef.createBinaryFormula = createBinaryFormula
freeIndVarsSubstitutionVisitorForwardRef.createBinaryFormula = createBinaryFormula
