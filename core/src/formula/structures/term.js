import { createVariable } from './variable'
import { createError, ErrorCode } from '../../errors'
import { expressionTrait } from '../traits'
import { forwardRef } from '../algorithms/free-ind-vars-substitution-visitor'

function assertArityMatches (termVar, terms) {
  if (termVar.arity() !== terms.length) {
    throw createError(ErrorCode.INVALID_ARITY, 'Invalid arity')
  }
}

const termTrait = {
  ...expressionTrait,

  termVar () {
    return this._termVar
  },
  terms () {
    return this._terms
  },
  isIndVar () {
    return this.termVar().arity() === 0
  },
  accept (visitor) {
    return visitor.visitTerm(this)
  }
}

/**
 * It can be either simple like a single individual variable or complex like a function with
 * arguments.
 * @param termVar - A term variable or an id of an individual variable.
 * @param terms - A list where each item is either a term or an id of an individual variable.
 */
export function createTerm (termVar, ...terms) {
  const realTerms = terms.map(t => typeof t === 'string' ? createTerm(t) : t)

  let realTermVar
  if (typeof termVar === 'string') {
    realTermVar = createVariable(termVar, terms.length)
  } else {
    assertArityMatches(termVar, realTerms)
    realTermVar = termVar
  }

  const that = Object.create(termTrait)
  Object.assign(that, {
    _termVar: realTermVar,
    _terms: realTerms
  })

  return that
}

forwardRef.createTerm = createTerm
