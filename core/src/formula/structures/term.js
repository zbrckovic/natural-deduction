import { createVariable } from './variable'
import { InvalidArityError } from '../../errors'
import { expressionTrait } from '../traits'
import { forwardRef } from '../algorithms/free-ind-vars-substitution-visitor'

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
  that._termVar = realTermVar
  that._terms = realTerms
  return that
}

const termTrait = {
  ...expressionTrait,

  termVar () {
    return this._termVar
  },
  terms () {
    return this._terms
  },
  arity () {
    return this.termVar().arity()
  },
  isIndVar () {
    return this.arity() === 0
  },
  accept (visitor) {
    return visitor.visitTerm(this)
  }
}

function assertArityMatches (termVar, terms) {
  if (termVar.arity() !== terms.length) {
    throw new InvalidArityError()
  }
}

forwardRef.createTerm = createTerm
