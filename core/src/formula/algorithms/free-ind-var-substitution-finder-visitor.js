import { formulaComparingVisitorTrait } from './formula-comparing-visitor-trait'
import { bindTrackingTrait } from './bind-tracking-trait'

/**
 * Creates a visitor which compares expressions which differ only in one free individual variable in
 * such a way that the visited expression can be obtained from the reference expression by
 * substituting one free individual variable. It returns a pair of individual variables.
 * @throws Throws an error if formulas differ in more than that.
 */
export function createFreeIndVarSubstitutionFinderVisitor (expression) {
  const that = Object.create(freeIndVarSubstitutionFinderVisitorTrait)

  /** A stack whose head is the reference expression against which visited one is compared. */
  that._refExpressionStack = [expression]

  that._boundVars = {}

  /** Free individual variables which are equal in both formulas. */
  that._freeIndVars = {}

  /** Free individual variable in the reference formula which has been substituted. */
  that._refIndVar = undefined

  /** A substitute for `ref_ind_var` in the visited formula. */
  that._visIndVar = undefined

  return that
}

const freeIndVarSubstitutionFinderVisitorTrait = {
  ...formulaComparingVisitorTrait,
  ...bindTrackingTrait,
  registerFreeIndVars (refIndVar, visIndVar) {
    if (this.isBound(visIndVar)) {
      throw createSubstituteBecomesBoundError()
    }
  },
}

const {
  createSubstituteBecomesBoundError,
  isSubstituteBecomesBoundError
} = (() => {
  const SUBSTITUTE_BECOMES_BOUND_ERROR = Symbol('SUBSTITUTE_BECOMES_BOUND_ERROR')

  const createSubstituteBecomesBoundError = function () {
    const result = new Error(`substitute becomes bound`)
    result[SUBSTITUTE_BECOMES_BOUND_ERROR] = true
    return result
  }

  function isSubstituteBecomesBoundError (error) {
    return error[SUBSTITUTE_BECOMES_BOUND_ERROR] === true
  }

  return { createSubstituteBecomesBoundError, isSubstituteBecomesBoundError }
})()
