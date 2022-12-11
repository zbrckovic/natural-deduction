import { createAntlr4Parser } from './antlr4-parser'
import { AstVisitor } from '../src/parser/ast-visitor'

export class Parser {
  visitor = new AstVisitor()

  parseRootFormula (formulaTxt) {
    const antlr4Parser = createAntlr4Parser(formulaTxt)
    const ast = antlr4Parser.rootFormula()
    return this.visitor.visitRootFormula(ast)
  }
}
