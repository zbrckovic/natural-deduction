import { createParser } from './parser'
import { createAtomicFormula, createTerm, createVariable } from '../src/formula'
import { ErrorCode, createErrorRegexForTest } from '../src/errors'

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

  describe('createAtomicFormula', () => {
    it('throws when predVar arity doesn\'t match the terms count', () => {
      expect(() => {
        createAtomicFormula(createVariable('F', 1), 'x', 'y')
      }).toThrow(createErrorRegexForTest(ErrorCode.INVALID_ARITY))
    })
  })

  describe('createTerm', () => {
    it('throws when termVar arity doesn\'t match the terms count', () => {
      expect(() => {
        createTerm(createVariable('f', 1), 'x', 'y')
      }).toThrow(createErrorRegexForTest(ErrorCode.INVALID_ARITY))
    })
  })

  describe('findFreeIndVars', function () {
    test.each([
      ['~A -> B', []],
      ['F(f(x))', ['x']],
      ['(x) F(f(x))', []],
      ['F2xy', ['x', 'y']],
      ['F2xx', ['x']],
      ['(x) Fx', []],
      ['[x] Fx', []],
      ['(x) F2xy', ['y']],
      ['(x) (x) Fx', []],
      ['Fx -> Gy', ['x', 'y']]
    ])('for %p returns variables %p', (formulaTxt, expectedIndVarsRaw) => {
      const formula = parser.parseRootFormula(formulaTxt)

      const expectedIndVars = {}
      expectedIndVarsRaw.forEach(id => {
        expectedIndVars[id] = parser.getVariable(id)
      })

      const freeIndVars = formula.findFreeIndVars()

      expect(freeIndVars).toDeepEqual(expectedIndVars)
    })
  })
})
