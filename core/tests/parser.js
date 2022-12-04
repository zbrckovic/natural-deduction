import antlr4 from 'antlr4'
import NaturalDeductionParser from '../src/parser/antlr4-generated/NaturalDeductionParser'
import NaturalDeductionLexer from '../src/parser/antlr4-generated/NaturalDeductionLexer'

export function createParser (text) {
  const stream = new antlr4.InputStream(text)
  const lexer = new NaturalDeductionLexer(stream)
  const tokens = new antlr4.CommonTokenStream(lexer)
  const parser = new NaturalDeductionParser(tokens)
  parser._errHandler = new antlr4.error.BailErrorStrategy()
  return parser
}
