import { createVariable } from './variable'
import { createTerm } from './term'
import { formulaTrait } from './formula-common'
import { createError, ErrorCode } from '../errors'

const atomicFormulaTrait = {
  ...formulaTrait,
  predVar () {
    return this._predVar
  },
  terms () {
    return this._terms
  },
  accept (visitor) {
    return visitor.visitAtomicFormula(this)
  },
  get (...path) {
    if (path.length === 0) return this
    const [i, ...rest] = path
    const term = this.terms()[i]
    return term.get(...rest)
  }
}

/**
 * @param predVar - A predicate variable or an id of one.
 * @param terms - A list where each item is either a term or an id of an individual variable.
 */
export function createAtomicFormula (predVar, ...terms) {
  const realTerms = terms.map(t => typeof t === 'string' ? createTerm(t) : t)

  let realPredVar
  if (typeof predVar === 'string') {
    realPredVar = createVariable(predVar, terms.length)
  } else {
    if (predVar.arity() !== realTerms.length) {
      throw createError(ErrorCode.INVALID_ARITY, 'Invalid arity')
    }
    realPredVar = predVar
  }

  const that = Object.create(atomicFormulaTrait)
  Object.assign(that, {
    _predVar: realPredVar,
    _terms: realTerms
  })

  return that
}
