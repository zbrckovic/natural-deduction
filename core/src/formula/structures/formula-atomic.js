import { createVariable } from './variable'
import { createTerm } from './term'
import { createError, ErrorCode } from '../../errors'
import { forwardRef } from '../algorithms/free-ind-vars-substitution-visitor'
import { formulaTrait } from '../traits'

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
    assertArityMatches(predVar, realTerms)
    realPredVar = predVar
  }

  const that = Object.create(atomicFormulaTrait)
  Object.assign(that, {
    _predVar: realPredVar,
    _terms: realTerms
  })

  return that
}

const atomicFormulaTrait = {
  ...formulaTrait,

  predVar () {
    return this._predVar
  },
  terms () {
    return this._terms
  },
  arity () {
    return this.predVar().arity()
  },
  accept (visitor) {
    return visitor.visitAtomicFormula(this)
  }
}

function assertArityMatches (predVar, terms) {
  if (predVar.arity() !== terms.length) {
    throw createError(ErrorCode.INVALID_ARITY, 'Invalid arity')
  }
}

// Avoiding circular imports
forwardRef.createAtomicFormula = createAtomicFormula
