import { QuantifiedFormula } from './quantified-formula'

export function UniversalFormula ({ indVar, terms }) {
  QuantifiedFormula.call({ indVar, terms })
}

Object.assign(UniversalFormula.prototype, QuantifiedFormula.prototype, {
  accept (visitor) {
    visitor.visitUniversalFormula(this)
  }
})
