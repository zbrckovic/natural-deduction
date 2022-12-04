import { QuantifiedFormula } from './quantified-formula'

export function ExistentialFormula ({ indVar, terms }) {
  QuantifiedFormula.call({ indVar, terms })
}

Object.assign(ExistentialFormula.prototype, QuantifiedFormula.prototype, {
  accept (visitor) {
    visitor.visitExistentialFormula(this)
  }
})
