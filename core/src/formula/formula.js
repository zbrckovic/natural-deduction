import { expressionProto } from './expression'
import { BinaryOperator } from './symbols'

export const formulaProto = {
  ...expressionProto,

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
