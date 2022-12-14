import { createUnaryFormula, UnaryOperator } from './formula-unary'
import { createVariable } from './variable'
import { createQuantifiedFormula, Quantifier } from './formula-quantified'

/** Creates a negative formula. */
export function not (formula) {
  return createUnaryFormula(UnaryOperator.NEGATION, formula)
}

/**
 * Creates a universally quantified formula.
 * @param indVar - An individual variable or an id of one.
 * @param formula
 */
export function all (indVar, formula) {
  const realIndVar = typeof indVar === 'string' ? createVariable(indVar) : indVar
  return createQuantifiedFormula(Quantifier.UNIVERSAL, realIndVar, formula)
}

/**
 * Creates an existentially quantified formula.
 * @param indVar - An individual variable or an id of one.
 * @param formula
 */
export function some (indVar, formula) {
  const realIndVar = typeof indVar === 'string' ? createVariable(indVar) : indVar
  return createQuantifiedFormula(Quantifier.EXISTENTIAL, realIndVar, formula)
}

