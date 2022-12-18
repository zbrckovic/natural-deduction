import { createUnaryFormula } from './structures/formula-unary'
import { createQuantifiedFormula } from './structures/formula-quantified'
import { createVariable } from './structures/variable'
import { Quantifier, UnaryOperator } from './structures/symbols'

/**
 * Creates a negative formula.
 */
export function not (formula) {
  return createUnaryFormula(UnaryOperator.NEGATION, formula)
}

/**
 * Creates a universally quantified formula.
 */
export function all (indVar, formula) {
  return _createQuantifiedFormula(Quantifier.UNIVERSAL, indVar, formula)
}

/**
 * Creates an existentially quantified formula.
 */
export function some (indVar, formula) {
  return _createQuantifiedFormula(Quantifier.EXISTENTIAL, indVar, formula)
}

function _createQuantifiedFormula (quantifier, indVar, formula) {
  const realIndVar = typeof indVar === 'string' ? createVariable(indVar) : indVar
  return createQuantifiedFormula(quantifier, realIndVar, formula)
}
