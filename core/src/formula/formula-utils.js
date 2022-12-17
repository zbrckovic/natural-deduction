import { createUnaryFormula, UnaryOperator } from './formula-unary'
import { createVariable } from './variable'
import { createQuantifiedFormula, Quantifier } from './formula-quantified'
import { BinaryOperator, createBinaryFormula } from './formula-binary'
import { createAtomicFormula } from './formula-atomic'

/**
 * Creates a negative formula.
 * @param formula - A formula or an id of a propositional variable.
 */
export function not (formula) {
  const realFormula = typeof formula === 'string' ? createAtomicFormula(formula) : formula
  return createUnaryFormula(UnaryOperator.NEGATION, realFormula)
}

/**
 * Creates a universally quantified formula.
 * @param indVar - An individual variable or an id of one.
 * @param formula - A formula or an id of a propositional variable.
 */
export function all (indVar, formula) {
  return _createQuantifiedFormula(Quantifier.UNIVERSAL, indVar, formula)
}

/**
 * Creates an existentially quantified formula.
 * @param indVar - An individual variable or an id of one.
 * @param formula - A formula or an id of a propositional variable.
 */
export function some (indVar, formula) {
  return _createQuantifiedFormula(Quantifier.EXISTENTIAL, indVar, formula)
}

/**
 * Creates a conjunctive formula.
 * @param lFormula - A formula or an id of a propositional variable.
 * @param rFormula - A formula or an id of a propositional variable.
 */
export function and (lFormula, rFormula) {
  return _createBinaryFormula(BinaryOperator.CONJUNCTION, lFormula, rFormula)
}

/**
 * Creates a disjunctive formula.
 * @param lFormula - A formula or an id of a propositional variable.
 * @param rFormula - A formula or an id of a propositional variable.
 */
export function or (lFormula, rFormula) {
  return _createBinaryFormula(BinaryOperator.DISJUNCTION, lFormula, rFormula)
}

/**
 * Creates a conditional formula.
 * @param lFormula - A formula or an id of a propositional variable.
 * @param rFormula - A formula or an id of a propositional variable.
 */
export function then (lFormula, rFormula) {
  return _createBinaryFormula(BinaryOperator.CONDITIONAL, lFormula, rFormula)
}

/**
 * Creates a biconditional formula.
 * @param lFormula - A formula or an id of a propositional variable.
 * @param rFormula - A formula or an id of a propositional variable.
 */
export function onlyThen (lFormula, rFormula) {
  return _createBinaryFormula(BinaryOperator.BICONDITIONAL, lFormula, rFormula)
}

function _createQuantifiedFormula (quantifier, indVar, formula) {
  const realIndVar = typeof indVar === 'string' ? createVariable(indVar) : indVar
  const realFormula = typeof formula === 'string' ? createAtomicFormula(formula) : formula
  return createQuantifiedFormula(quantifier, realIndVar, realFormula)
}

function _createBinaryFormula (operator, lFormula, rFormula) {
  const realLFormula = typeof lFormula === 'string' ? createAtomicFormula(lFormula) : lFormula
  const realRFormula = typeof rFormula === 'string' ? createAtomicFormula(rFormula) : rFormula
  return createBinaryFormula(operator, realLFormula, realRFormula)
}
