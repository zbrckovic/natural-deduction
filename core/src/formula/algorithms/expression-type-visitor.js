import { ExpressionType } from '../structures/expression-type'

export function createExpressionTypeVisitor () {
  return Object.create(expressionTypeVisitor)
}

const expressionTypeVisitor = {
  visitAtomicFormula () {
    return ExpressionType.ATOMIC_FORMULA
  },
  visitUnaryFormula () {
    return ExpressionType.UNARY_FORMULA
  },
  visitBinaryFormula () {
    return ExpressionType.BINARY_FORMULA
  },
  visitQuantifiedFormula () {
    return ExpressionType.QUANTIFIED_FORMULA
  },
  visitTerm () {
    return ExpressionType.TERM
  }
}
