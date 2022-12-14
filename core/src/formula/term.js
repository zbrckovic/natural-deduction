import { variable } from './variable'

const termTrait = {
  termVar () {
    return this._termVar
  },
  terms () {
    return this._terms
  },
  accept (visitor) {
    return visitor.visitTerm(this)
  }
}

/**
 * Creates a term.
 *
 * It can be either simple like a single individual variable or complex like a function with
 * arguments.
 * @param termVar - A term variable or an id of an individual variable.
 * @param terms - A list where each item is either a term or an id of an individual variable.
 */
export function term (termVar, ...terms) {
  const realTermVar = typeof termVar === 'string' ? variable(termVar, terms.length) : termVar
  const realTerms = terms.map(t => typeof t === 'string' ? term(t) : t)

  const that = Object.create(termTrait)
  Object.assign(that, {
    _termVar: realTermVar,
    _terms: realTerms
  })

  return that
}
