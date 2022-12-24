import { ExpressionType } from '../src/formula/structures/expression-type'
import { createParser } from './parser'

describe('expression', () => {
  let parser
  beforeEach(() => {
    parser = createParser()
  })

  describe('type', () => {
    test(`returns ${ExpressionType.TERM} for for simple term`, () => {
      const expression = parser.parseTerm('x')
      expect(expression.type()).toEqual(ExpressionType.TERM)
    })

    test(`returns ${ExpressionType.TERM} for for complex term`, () => {
      const expression = parser.parseTerm('f(x)')
      expect(expression.type()).toEqual(ExpressionType.TERM)
    })

    test(`returns ${ExpressionType.ATOMIC_FORMULA} for simple atomic formula`, () => {
      const expression = parser.parseRootFormula('A')
      expect(expression.type()).toEqual(ExpressionType.ATOMIC_FORMULA)
    })

    test(`returns ${ExpressionType.ATOMIC_FORMULA} for complex atomic formula`, () => {
      const expression = parser.parseRootFormula('Fxy')
      expect(expression.type()).toEqual(ExpressionType.ATOMIC_FORMULA)
    })

    test(`returns ${ExpressionType.UNARY_FORMULA} for unary formula`, () => {
      const expression = parser.parseRootFormula('~A')
      expect(expression.type()).toEqual(ExpressionType.UNARY_FORMULA)
    })

    test(`returns ${ExpressionType.BINARY_FORMULA} for binary formula`, () => {
      const expression = parser.parseRootFormula('A -> B')
      expect(expression.type()).toEqual(ExpressionType.BINARY_FORMULA)
    })

    test(`returns ${ExpressionType.QUANTIFIED_FORMULA} for quantified formula`, () => {
      const expression = parser.parseRootFormula('(x) A')
      expect(expression.type()).toEqual(ExpressionType.QUANTIFIED_FORMULA)
    })
  })

  describe('equals', () => {
    test.each([
      ['A', 'A'],
      ['~A', '~A'],
      ['A -> B', 'A -> B'],
      ['Fxy', 'Fxy'],
      ['F(x, y)', 'Fxy'],
      ['(x) F(x, y)', '(x) Fxy'],
      ['F(x, f(y))', 'F(x, f(y))']
    ])('returns true for %p and %p', (formula1Text, formula2Text) => {
      const formula1 = parser.parseRootFormula(formula1Text)
      const formula2 = parser.parseRootFormula(formula2Text)
      expect(formula1).toDeepEqual(formula2)
    })

    test.each([
      ['A', 'B'],
      ['Fx', 'Fy'],
      ['Fx', 'Gx'],
      ['Fxy', 'Fyx'],
      ['~A', '~B'],
      ['(x) A', '(y) A'],
      ['F(x, f(y))', 'F(x, g(y))'],
      ['F(x, f(x))', 'F(x, f(y))'],
      ['(x) Fx', 'Fx']
    ])('returns false for %p and %p', (formula1Text, formula2Text) => {
      const formula1 = parser.parseRootFormula(formula1Text)
      const formula2 = parser.parseRootFormula(formula2Text)
      expect(formula1).not.toDeepEqual(formula2)
    })
  })
})
