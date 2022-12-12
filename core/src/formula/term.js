import { variable } from './variable'

const termBehavior = {
  accept (visitor) {
    return visitor.visitTerm(this)
  }
}

/**
 * Creates a term.
 *
 * It can be either simple like a single individual variable or a complex one like a function with
 * arguments.
 * @param termVar - A term variable or an id of an individual variable.
 * @param terms - A list where each item is either term or an id of an individual variable.
 */
export function term (termVar, ...terms) {
  if (typeof termVar === 'string') {
    termVar = variable(termVar, terms.length)
  }
  terms = terms.map(t => typeof t === 'string' ? term(t) : t)
  const result = Object.create(termBehavior)
  Object.assign(result, {
    termVar,
    terms: Object.freeze([...terms])
  })
  return result
}
