import { BinaryFormula } from './binary-formula'

export function Conditional ({ lFormula, rFormula }) {
  BinaryFormula.call(this, { lFormula, rFormula })
}

Object.assign(Conditional.prototype, BinaryFormula.prototype, {
  accept (visitor) {
    visitor.visitConditional(this)
  }
})
