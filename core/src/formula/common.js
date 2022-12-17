import { BinaryOperator, createBinaryFormula } from './formula-binary'
import { createSubformulaFinder } from './algorithms/subexpression-finder'

export const expressionProto = {
  /**
   * Finds a subexpression by following the path.
   * @param path - The list of indices where each index represents the direction to take at the
   * point of branching.
   */
  get (...path) {
    const visitor = createSubformulaFinder(path)
    return this.accept(visitor)
  }
}

export const formulaProto = {
  ...expressionProto,

  /** Creates a conjunctive formula. */
  and (formula) {
    return createBinaryFormula(BinaryOperator.CONJUNCTION, this, formula)
  },
  /** Creates a disjunctive formula. */
  or (formula) {
    return createBinaryFormula(BinaryOperator.DISJUNCTION, this, formula)
  },
  /** Creates a conditional formula. */
  then (formula) {
    return createBinaryFormula(BinaryOperator.CONDITIONAL, this, formula)
  },
  /** Creates a biconditional formula. */
  onlyThen (formula) {
    return createBinaryFormula(BinaryOperator.BICONDITIONAL, this, formula)
  }
}
