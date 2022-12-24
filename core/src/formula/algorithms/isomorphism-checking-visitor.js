const isomorphismCheckingVisitorTrait = {
}

/**
 * Checks whether two comparable formulas are isomorphic.
 */
export function createIsomorphismCheckingVisitor (formula) {
  const that = Object.create(isomorphismCheckingVisitorTrait)
  that._formula = formula
  return that
}
