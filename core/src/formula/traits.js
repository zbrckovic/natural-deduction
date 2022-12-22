import { createSubformulaFinderVisitor } from './algorithms/subexpression-finder-visitor'
import { createFreeIndVarsFinderVisitor } from './algorithms/free-ind-vars-finder-visitor'
import {
  createFreeIndVarsSubstitutionVisitor
} from './algorithms/free-ind-vars-substitution-visitor'
import { BinaryOperator } from './structures/symbols'

export const expressionTrait = {
  /**
   * Finds a subexpression by following the path.
   * @param path - The list of indices where each index represents the direction to take at the
   * point of branching.
   */
  get (...path) {
    const visitor = createSubformulaFinderVisitor(path)
    return this.accept(visitor)
  },
  /**
   * Finds free individual variables and returns them as a map (variables by ids).
   */
  findFreeIndVars () {
    const visitor = createFreeIndVarsFinderVisitor()
    return this.accept(visitor)
  },
  substituteFreeIndVars (substitutions) {
    const visitor = createFreeIndVarsSubstitutionVisitor(substitutions)
    return this.accept(visitor)
  },
  isIsomorphicTo (other) {
    return false
  }
}

export const formulaTrait = {
  ...expressionTrait,

  /**
   * Creates a conjunctive formula.
   */
  and (formula) {
    return forwardRef.createBinaryFormula(BinaryOperator.CONJUNCTION, this, formula)
  },

  /**
   * Creates a disjunctive formula.
   */
  or (formula) {
    return forwardRef.createBinaryFormula(BinaryOperator.DISJUNCTION, this, formula)
  },

  /**
   * Creates a conditional formula.
   */
  then (formula) {
    return forwardRef.createBinaryFormula(BinaryOperator.CONDITIONAL, this, formula)
  },

  /**
   * Creates a biconditional formula.
   */
  onlyThen (formula) {
    return forwardRef.createBinaryFormula(BinaryOperator.BICONDITIONAL, this, formula)
  }
}

// Avoiding circular imports
export const forwardRef = {
  createBinaryFormula: undefined
}
