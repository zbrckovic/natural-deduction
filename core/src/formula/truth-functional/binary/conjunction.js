import { BinaryFormula } from './binary-formula'

export function Conjunction ({ lFormula, rFormula }) {
  BinaryFormula.call(this, { lFormula, rFormula })
}

Object.assign(Conjunction.prototype, BinaryFormula.prototype, {
  accept (visitor) {
    return visitor.visitConjunction(this)
  }
})
