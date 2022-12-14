import { createParser } from './parser'

describe('formula', () => {
  let parser
  beforeEach(() => {
    parser = createParser()
  })

  describe('get', () => {
    it('returns the same formula for an empty path', () => {
      const formula = parser.parseRootFormula('[x] (Fx -> ~Gx)')
      const subformula = formula.get()
      expect(subformula).toDeepEqual(formula)
    })

    it('reaches a deeply nested formula', () => {
      const formula = parser.parseRootFormula('[x] (Fx -> ~Gx)')
      const subformula = formula.get(0, 1, 0)
      const expected = parser.parseRootFormula('Gx')
      expect(subformula).toDeepEqual(expected)
    })

    it('reaches a term', () => {
      const formula = parser.parseRootFormula('F(x, f(y))')
      const term = formula.get(1)
      const expected = parser.parseTerm('f(y)')
      expect(term).toDeepEqual(expected)
    })

    it('reaches a deeply nested term', () => {
      const formula = parser.parseRootFormula('F(x, f(y))')
      const term = formula.get(1, 0)
      const expected = parser.parseTerm('y')
      expect(term).toDeepEqual(expected)
    })
  })
})
