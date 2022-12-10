import { BinaryFormula } from './binary-formula'

export function Disjunction ({ lFormula, rFormula }) {
  BinaryFormula.call(this, { lFormula, rFormula })
}

Object.assign(Disjunction.prototype, BinaryFormula.prototype, {
  accept (visitor) {
    return visitor.visitDisjunction(this)
  }
})
