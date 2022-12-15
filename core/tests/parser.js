import { createAntlr4Parser } from './antlr4-parser'
import { AstVisitor } from '../src/parser/ast-visitor'

class Parser {
  visitor = new AstVisitor()

  getVariable (id) {
    return this.visitor.getVariable(id)
  }

  parseRootFormula (formulaTxt) {
    const antlr4Parser = createAntlr4Parser(formulaTxt)
    const ast = antlr4Parser.rootFormula()
    return this.visitor.visitRootFormula(ast)
  }

  parseTerm (termTxt) {
    const antlr4Parser = createAntlr4Parser(termTxt)
    const ast = antlr4Parser.term()
    return this.visitor.visitTerm(ast)
  }
}

export function createParser () {
  return new Parser()
}
