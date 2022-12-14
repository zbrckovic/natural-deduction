import { variable } from './variable'
import { term } from './term'

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

const atomicFormulaTrait = {
  ...formulaTrait,
  predVar () {
    return this._predVar
  },
  terms () {
    return this._terms
  }
}

/**
 * Creates an atomic formula.
 * @param predVar - A predicate variable or an id of one.
 * @param terms - A list where each item is either a term or an id of an individual variable.
 */
export function formula (predVar, ...terms) {
  const realPredVar = typeof predVar === 'string' ? variable(predVar, terms.length) : predVar
  const realTerms = terms.map(t => typeof t === 'string' ? term(t) : t)

  const that = Object.create(atomicFormulaTrait)
  Object.assign(that, {
    _predVar: realPredVar,
    _terms: realTerms
  })

  return that
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

const unaryFormulaTrait = {
  ...formulaTrait,
  operator () {
    return this._operator
  },
  formula () {
    return this._formula
  }
}

export function unaryFormula (operator, formula) {
  const that = Object.create(unaryFormulaTrait)
  Object.assign(that, {
    _operator: operator,
    _formula: formula
  })

  return that
}

const binaryFormulaTrait = {
  ...formulaTrait,
  operator () {
    return this._operator
  },
  lFormula () {
    return this._lFormula
  },
  rFormula () {
    return this._rFormula
  }
}

export function binaryFormula (operator, lFormula, rFormula) {
  const that = Object.create(binaryFormulaTrait)
  Object.assign(that, {
    _operator: operator,
    _lFormula: lFormula,
    _rFormula: rFormula
  })

  return that
}

const quantifierFormulaTrait = {
  quantifier () {
    return this._quantifier
  },
  indVar () {
    return this._indVar
  },
  formula () {
    return this._formula
  }
}

export function quantifiedFormula (quantifier, indVar, formula) {
  const that = Object.create(quantifierFormulaTrait)
  Object.assign(that, {
    _quantifier: quantifier,
    _indVar: indVar,
    _formula: formula
  })

  return that
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
