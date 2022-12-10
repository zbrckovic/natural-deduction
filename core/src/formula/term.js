export function Term ({ termVar, terms = [] }) {
  this.termVar = termVar
  this.terms = terms
}

Object.assign(Term.prototype, {
  accept (visitor) {
    return visitor.visitTerm(this)
  }
})
