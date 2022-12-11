export class Formula {}

export class AtomicFormula extends Formula {
  constructor ({ predVar, terms = [] }) {
    super()
    this.predVar = predVar
    this.terms = terms
  }
}

export class TruthFunctional extends Formula {
  constructor ({ operator }) {
    super()
    this.operator = operator
  }
}

export class UnaryFormula extends TruthFunctional {
  constructor ({ operator, formula }) {
    super({ operator })
    this.formula = formula
  }
}

export class BinaryFormula extends TruthFunctional {
  constructor ({ operator, lFormula, rFormula }) {
    super({ operator })
    this.lFormula = lFormula
    this.rFormula = rFormula
  }
}

export class QuantifiedFormula extends Formula {
  constructor ({ quantifier, indVar, terms }) {
    super()
    this.quantifier = quantifier
    this.indVar = indVar
    this.terms = terms
  }
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
