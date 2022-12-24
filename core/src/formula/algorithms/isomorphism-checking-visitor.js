import { createBimap } from '../../bimap'

/**
 * Creates an expression visitor which checks whether this and other expression are isomorphic.
 * @param formula - The reference formula which will be checked for isomorphism against the visited
 * formula. Isomorphism is a symmetric relation, so it is not important which formula is the
 * reference formula and which is the visited one.
 */
export function createIsomorphismCheckingVisitor (formula) {
  const that = Object.create(isomorphismCheckingVisitorTrait)
  that._refFormula = formula
  /** Bijection between reference formula variables and visited formula variables. */
  that._varMap = {}
  return that
}

const isomorphismCheckingVisitorTrait = {
}
