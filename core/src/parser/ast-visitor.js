import NaturalDeductionVisitor from './antlr4-generated/NaturalDeductionVisitor'
import { AtomicFormula, Term, Var } from '../formula'

export class AstVisitor extends NaturalDeductionVisitor {
  // region Formula
  visitRootFormula (ctx) {
    if (ctx.atomicFormula() !== null) {
      return this.visitAtomicFormula(ctx.atomicFormula())
    }
  }

  visitAtomicFormula (ctx) {
    const predVarId = ctx.predVar.text
    const terms = this._extractTermsFromAtomicFormulaCtx(ctx)
    const predVar = new Var({ id: predVarId, arity: terms.length })
    return new AtomicFormula({ predVar, terms })
  }

  visitTermList (ctx) {
    if (ctx.bracketedTerms() !== null) return this.visitBracketedTerms(ctx.bracketedTerms())

    return ctx.indVars.map(token => {
      const id = token.text
      const termVar = new Var({ id })
      return new Term({ termVar })
    })
  }

  visitBracketedTerms (ctx) {
    return ctx.terms.map(termCtx => this.visitTerm(termCtx))
  }

  visitTerm (ctx) {
    const termId = ctx.termVar.text

    const terms = this._extractTermsFromTermCtx(ctx)
    const termVar = new Var({ id: termId, arity: terms.length })

    return new Term({ termVar, terms })
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
