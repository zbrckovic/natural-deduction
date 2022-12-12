import { variable } from './variable'
import { term } from './term'

/**
 * Creates an atomic formula.
 * @param predVar - A predicate variable or an id of one.
 * @param terms - A list where each item is either a term or an id of an individual variable.
 */
export function formula (predVar, ...terms) {
  const realPredVar = typeof predVar === 'string' ? variable(predVar, terms.length) : predVar
  const realTerms = terms.map(t => typeof t === 'string' ? term(t) : t)

  const that = Object.create(formulaTrait)
  Object.assign(that, {
    predVar: realPredVar,
    terms: Object.freeze(realTerms)
  })

  return Object.freeze(that)
}

/** Creates a negative formula. */
export function not (formula) {
  return unaryFormula(UnaryOperator.NEGATION, formula)
}

/**
 * Creates a universally quantified formula.
 * @param indVar - An individual variable or an id of one.
 * @param formula
 */
export function all (indVar, formula) {
  const realIndVar = typeof indVar === 'string' ? variable(indVar) : indVar
  return quantifiedFormula(Quantifier.UNIVERSAL, realIndVar, formula)
}

/**
 * Creates an existentially quantified formula.
 * @param indVar - An individual variable or an id of one.
 * @param formula
 */
export function some (indVar, formula) {
  const realIndVar = typeof indVar === 'string' ? variable(indVar) : indVar
  return quantifiedFormula(Quantifier.EXISTENTIAL, realIndVar, formula)
}

export function unaryFormula (operator, formula) {
  const that = Object.create(formulaTrait)
  Object.assign(that, {
    operator,
    formula
  })

  return Object.freeze(that)
}

export function binaryFormula (operator, lFormula, rFormula) {
  const that = Object.create(formulaTrait)
  Object.assign(that, {
    operator,
    lFormula,
    rFormula
  })

  return Object.freeze(that)
}

export function quantifiedFormula (quantifier, indVar, formula) {
  const that = Object.create(formulaTrait)
  Object.assign(that, {
    quantifier,
    indVar,
    formula
  })

  return Object.freeze(that)
}

export const UnaryOperator = {
  NEGATION: 'NEGATION'
}

export const BinaryOperator = {
  CONJUNCTION: 'CONJUNCTION',
  DISJUNCTION: 'DISJUNCTION',
  CONDITIONAL: 'CONDITIONAL',
  BICONDITIONAL: 'BICONDITIONAL'
}

export const Quantifier = {
  UNIVERSAL: 'UNIVERSAL',
  EXISTENTIAL: 'EXISTENTIAL'
}

// region Private
const formulaTrait = {
  /** Creates a conjunctive formula. */
  and (formula) {
    return binaryFormula(BinaryOperator.CONJUNCTION, this, formula)
  },
  /** Creates a disjunctive formula. */
  or (formula) {
    return binaryFormula(BinaryOperator.DISJUNCTION, this, formula)
  },
  /** Creates a conditional formula. */
  then (formula) {
    return binaryFormula(BinaryOperator.CONDITIONAL, this, formula)
  },
  /** Creates a biconditional formula. */
  onlyThen (formula) {
    return binaryFormula(BinaryOperator.BICONDITIONAL, this, formula)
  }
}
// endregion
