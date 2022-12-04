import { Formula } from '../formula'

export function QuantifiedFormula ({ indVar, terms }) {
  Formula.call(this)
  this.indVar = indVar
  this.terms = terms
}

Object.assign(QuantifiedFormula.prototype, Formula.prototype)
