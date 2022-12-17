import { createVariable } from './variable'
import { createTerm } from './term'
import { formulaProto } from './common'
import { createError, ErrorCode } from '../errors'

const atomicFormulaProto = {
  ...formulaProto,

  predVar () {
    return this._predVar
  },
  terms () {
    return this._terms
  },
  accept (visitor) {
    return visitor.visitAtomicFormula(this)
  },
  /**
   * Finds free individual variables and returns them as a map (variables by ids).
   * @param boundVars - The map of bound variables used in recursive calls.
   */
  findFreeIndVars (boundVars = {}) {
    return this.terms().reduce(
      (acc, term) => ({ ...acc, ...term.findFreeIndVars(boundVars) }),
      {}
    )
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
    assertArityMatches(predVar, realTerms)
    realPredVar = predVar
  }

  const that = Object.create(atomicFormulaProto)
  Object.assign(that, {
    _predVar: realPredVar,
    _terms: realTerms
  })

  return that
}

function assertArityMatches (predVar, terms) {
  if (predVar.arity() !== terms.length) {
    throw createError(ErrorCode.INVALID_ARITY, 'Invalid arity')
  }
}
