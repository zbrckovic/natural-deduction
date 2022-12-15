import { BinaryOperator, createBinaryFormula } from './formula-binary'

export const formulaProto = {
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
