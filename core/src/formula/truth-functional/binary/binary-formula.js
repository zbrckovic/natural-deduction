import { TruthFunctional } from '../truth-functional'

export function BinaryFormula ({ lFormula, rFormula }) {
  TruthFunctional.call(this)
  this.lFormula = lFormula
  this.rFormula = rFormula
}

Object.assign(BinaryFormula.prototype, TruthFunctional.prototype)
