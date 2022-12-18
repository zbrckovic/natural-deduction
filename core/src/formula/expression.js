import { createSubformulaFinder } from './algorithms/subexpression-finder'
import { createFreeIndVarsFinder } from './algorithms/free-ind-vars-finder'

export const expressionProto = {
  /**
   * Finds a subexpression by following the path.
   * @param path - The list of indices where each index represents the direction to take at the
   * point of branching.
   */
  get (...path) {
    const visitor = createSubformulaFinder(path)
    return this.accept(visitor)
  },
  /**
   * Finds free individual variables and returns them as a map (variables by ids).
   */
  findFreeIndVars () {
    const visitor = createFreeIndVarsFinder()
    return this.accept(visitor)
  }
}
