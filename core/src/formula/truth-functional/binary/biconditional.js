import { BinaryFormula } from './binary-formula'

export function Biconditional ({ lFormula, rFormula }) {
  BinaryFormula.call(this, { lFormula, rFormula })
}

Object.assign(Biconditional.prototype, BinaryFormula.prototype, {
  accept (visitor) {
    visitor.visitBiconditional(this)
  }
})
