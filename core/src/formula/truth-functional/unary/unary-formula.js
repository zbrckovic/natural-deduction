import { TruthFunctional } from '../truth-functional'

export function UnaryFormula ({ formula }) {
  TruthFunctional.call(this)
  this.formula = formula
}

Object.assign(UnaryFormula.prototype, TruthFunctional.prototype)
