/** Creates an expression visitor which checks whether this and other expression are isomorphic. */
export function createIsomorphismCheckingVisitor (formula) {
  const that = Object.create(isomorphismCheckingVisitorTrait)
  that._formula = formula
  return that
}

const isomorphismCheckingVisitorTrait = {
}
