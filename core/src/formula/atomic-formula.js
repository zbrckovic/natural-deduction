import { Formula } from './formula'

export function AtomicFormula ({ predVar, terms = [] }) {
  Formula.call(this)
  this.predVar = predVar
  this.terms = terms
}

Object.assign(AtomicFormula.prototype, Formula.prototype, {
  accept (visitor) {
    return visitor.visitAtomicFormula(this)
  }
})
