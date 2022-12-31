import {
  forwardRef as freeIndVarsSubstitutionVisitorForwardRef
} from '../algorithms/free-ind-vars-substitution-visitor'
import {
  forwardRef as predVarSubstitutionVistiorForwardRef
} from '../algorithms/pred-var-substitution-visitor'
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

freeIndVarsSubstitutionVisitorForwardRef.createUnaryFormula = createUnaryFormula
predVarSubstitutionVistiorForwardRef.createUnaryFormula = createUnaryFormula
