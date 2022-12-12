import NaturalDeductionVisitor from './antlr4-generated/NaturalDeductionVisitor'
import { formula, binaryFormula, BinaryOperator, term, variable, all, some } from '../formula'
import NaturalDeductionLexer from './antlr4-generated/NaturalDeductionLexer'
import { VariableTracker } from './variable-tracker'
import { not } from '../formula/formula'

/** Visits AST (abstract syntax tree) produced by ANTLR4 and constructs domain objects. */
export class AstVisitor extends NaturalDeductionVisitor {
  variableTracker = new VariableTracker()

  // region Formula
  visitRootFormula (ctx) {
    if (ctx.compRootFormula() !== null) {
      return this.visitCompRootFormula(ctx.compRootFormula())
    }
    return this._handleRestOfFormula(ctx)
  }

  visitFormula (ctx) {
    if (ctx.compFormula() !== null) {
      return this.visitCompFormula(ctx.compFormula())
    }
    return this._handleRestOfFormula(ctx)
  }

  _handleRestOfFormula (ctx) {
    if (ctx.quantFormula() !== null) {
      return this.visitQuantFormula(ctx.quantFormula())
    }
    if (ctx.atomicFormula() !== null) {
      return this.visitAtomicFormula(ctx.atomicFormula())
    }
    throw new Error('Invalid context') // Shouldn't happen
  }

  visitCompRootFormula (ctx) {
    if (ctx.compRootBinaryFormula() !== null) {
      return this.visitCompRootBinaryFormula(ctx.compRootBinaryFormula())
    }
    if (ctx.compUnaryFormula() !== null) {
      return this.visitCompUnaryFormula(ctx.compUnaryFormula())
    }
    throw new Error('Invalid context') // Shouldn't happen
  }

  visitCompFormula (ctx) {
    if (ctx.compBinaryFormula() !== null) {
      return this.visitCompBinaryFormula(ctx.compBinaryFormula())
    }
    if (ctx.compUnaryFormula() !== null) {
      return this.visitCompUnaryFormula(ctx.compUnaryFormula())
    }
    throw new Error('Invalid context') // Shouldn't happen
  }

  visitCompRootBinaryFormula (ctx) {
    return this._visitCompBinaryFormula(ctx)
  }

  visitCompBinaryFormula (ctx) {
    return super._visitCompBinaryFormula(ctx)
  }

  _visitCompBinaryFormula (ctx) {
    const operatorTokenType = this.visitBinaryOperator(ctx.binaryOperator())
    const lFormula = this.visitFormula(ctx.lFormula)
    const rFormula = this.visitFormula(ctx.rFormula)
    const operator = binaryOperatorsMap[operatorTokenType]
    return binaryFormula(operator, lFormula, rFormula)
  }

  visitBinaryOperator (ctx) {
    return ctx.operator.type
  }

  visitCompUnaryFormula (ctx) {
    const formula = this.visitFormula(ctx.formula())
    return not(formula)
  }

  visitQuantFormula (ctx) {
    if (ctx.uniFormula() !== null) {
      return this.visitUniFormula(ctx.uniFormula())
    }
    if (ctx.exiFormula() !== null) {
      return this.visitExiFormula(ctx.exiFormula())
    }
    throw new Error('Invalid context') // Shouldn't happen
  }

  visitUniFormula (ctx) {
    const formula = this.visitFormula(ctx.formula())
    return all(ctx.indVar.text, formula)
  }

  visitExiFormula (ctx) {
    const formula = this.visitFormula(ctx.formula())
    return some(ctx.indVar.text, formula)
  }

  visitAtomicFormula (ctx) {
    const predVarId = ctx.predVar.text
    const terms = this._extractTermsFromAtomicFormulaCtx(ctx)
    const predVar = variable(predVarId, terms.length)
    this.variableTracker.register(predVar)
    return formula(predVar, ...terms)
  }

  visitTermList (ctx) {
    if (ctx.bracketedTerms() !== null) return this.visitBracketedTerms(ctx.bracketedTerms())

    return ctx.indVars.map(token => {
      const id = token.text
      const termVar = variable(id)
      this.variableTracker.register(termVar)
      return term(termVar)
    })
  }

  visitBracketedTerms (ctx) {
    return ctx.terms.map(termCtx => this.visitTerm(termCtx))
  }

  visitTerm (ctx) {
    const termId = ctx.termVar.text

    const terms = this._extractTermsFromTermCtx(ctx)
    const termVar = variable(termId, terms.length)
    this.variableTracker.register(termVar)

    return term(termVar, ...terms)
  }

  _extractTermsFromAtomicFormulaCtx (ctx) {
    if (ctx.termList() === null) return []
    return this.visitTermList(ctx.termList())
  }

  _extractTermsFromTermCtx (ctx) {
    if (ctx.bracketedTerms() === null) return []
    return this.visitBracketedTerms(ctx.bracketedTerms())
  }

  // endregion
}

const binaryOperatorsMap = {
  [NaturalDeductionLexer.CONJUNCTION]: BinaryOperator.CONJUNCTION,
  [NaturalDeductionLexer.DISJUNCTION]: BinaryOperator.DISJUNCTION,
  [NaturalDeductionLexer.CONDITIONAL]: BinaryOperator.CONDITIONAL,
  [NaturalDeductionLexer.BICONDITIONAL]: BinaryOperator.BICONDITIONAL
}
