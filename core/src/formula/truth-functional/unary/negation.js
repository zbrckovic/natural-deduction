import { UnaryFormula } from './unary-formula'

export function Negation ({ formula }) {
  UnaryFormula.call(this, { formula })
}

Object.assign(Negation.prototype, UnaryFormula.prototype, {
  accept (visitor) {
    visitor.visitNegation(this)
  }
})
