export class Formula {}

export class AtomicFormula extends Formula {
  constructor ({ predVar, terms = [] }) {
    super()
    this.predVar = predVar
    this.terms = terms
  }

  accept (visitor) {
    return visitor.visitAtomicFormula(this)
  }
}

export class TruthFunctional extends Formula {}

export class UnaryFormula extends TruthFunctional {
  constructor ({ formula }) {
    super()
    this.formula = formula
  }
}

export class Negation extends UnaryFormula {
  constructor ({ formula }) {
    super({ formula })
  }

  accept (visitor) {
    visitor.visitNegation(this)
  }
}

export class BinaryFormula extends TruthFunctional {
  constructor ({ lFormula, rFormula }) {
    super()
    this.lFormula = lFormula
    this.rFormula = rFormula
  }
}

export class Conjunction extends BinaryFormula {
  constructor ({ lFormula, rFormula }) {
    super({ lFormula, rFormula })
  }

  accept (visitor) {
    return visitor.visitConjunction(this)
  }
}

export class Disjunction extends BinaryFormula {
  constructor ({ lFormula, rFormula }) {
    super({ lFormula, rFormula })
  }

  accept (visitor) {
    return visitor.visitDisjunction(this)
  }
}

export class Conditional extends BinaryFormula {
  constructor ({ lFormula, rFormula }) {
    super({ lFormula, rFormula })
  }

  accept (visitor) {
    return visitor.visitConditional(this)
  }
}

export class Biconditional extends BinaryFormula {
  constructor ({ lFormula, rFormula }) {
    super({ lFormula, rFormula })
  }

  accept (visitor) {
    return visitor.visitBiconditional(this)
  }
}

export class QuantifiedFormula extends Formula {
  constructor ({ indVar, terms }) {
    super()
    this.indVar = indVar
    this.terms = terms
  }
}

export class UniversalFormula extends QuantifiedFormula {
  constructor ({ indVar, terms }) {
    super({ indVar, terms })
  }

  accept (visitor) {
    visitor.visitUniversalFormula(this)
  }
}

export class ExistentialFormula extends QuantifiedFormula {
  constructor ({ indVar, terms }) {
    super({ indVar, terms })
  }

  accept (visitor) {
    visitor.visitExistentialFormula(this)
  }
}
