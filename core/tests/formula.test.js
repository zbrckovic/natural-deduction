import { createParser } from './parser'
import { createAtomicFormula, createTerm, createVariable } from '../src/formula'
import { createErrorRegexForTest, ErrorCode } from '../src/errors'

describe('formula', () => {
  let parser
  beforeEach(() => {
    parser = createParser()
  })

  describe('createAtomicFormula()', () => {
    it('throws when predVar arity doesn\'t match the terms count', () => {
      expect(() => {
        createAtomicFormula(createVariable('F', 1), 'x', 'y')
      }).toThrow(createErrorRegexForTest(ErrorCode.INVALID_ARITY))
    })
  })

  describe('createTerm()', () => {
    it('throws when termVar arity doesn\'t match the terms count', () => {
      expect(() => {
        createTerm(createVariable('f', 1), 'x', 'y')
      }).toThrow(createErrorRegexForTest(ErrorCode.INVALID_ARITY))
    })
  })

  describe('get()', () => {
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

  describe('findFreeIndVars()', () => {
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

  describe('substituteFreeIndVars()', () => {
    test.each([
      ['A', {}, 'A'],
      ['Fx', {}, 'Fx'],
      ['Fx', { x: 'x' }, 'Fx'],
      ['Fx', { x: 'y' }, 'Fy'],
      ['(x) Fx', { x: 'y' }, '(x) Fx'],
      ['F2xx', { x: 'y' }, 'F2yy'],
      ['F2xy', { x: 'y', y: 'x' }, 'F2yx'],
      ['(F2xy -> ~G2yx) & [x] F2yx', { x: 'y', y: 'z' }, '(F2yz -> ~G2zy) & [x] F2zx']
    ])('for %p and %p returns %p', (formulaTxt, substitutionsRaw, expectedFormulaTxt) => {
      const formula = parser.parseRootFormula(formulaTxt)
      const expectedFormula = parser.parseRootFormula(expectedFormulaTxt)

      const substitutions = {}
      Object.entries(substitutionsRaw).forEach(([id, substituteId]) => {
        substitutions[id] = createVariable(substituteId)
      })

      const actualFormula = formula.substituteFreeIndVars(substitutions)

      expect(actualFormula).toDeepEqual(expectedFormula)
    })

    test.each([
      ['[x] F2xy', { y: 'x' }],
      ['(x) [y] (F2xy -> ~Gz)', { z: 'x' }]
    ])('for %p and %p throws', (formulaTxt, substitutionsRaw) => {
      const formula = parser.parseRootFormula(formulaTxt)

      const substitutions = {}
      Object.entries(substitutionsRaw).forEach(([id, substituteId]) => {
        substitutions[id] = createVariable(substituteId)
      })

      expect(() => { formula.substituteFreeIndVars(substitutions) })
        .toThrow(createErrorRegexForTest(ErrorCode.VARIABLE_BECOMES_BOUND))
    })
  })

  describe('isIsomorphicTo()', () => {
    test.each([
      ['A', 'A'],
      ['A', 'B'],
      ['A -> ~B', 'B -> ~A'],
      ['Fx', 'Gy'],
      ['F2xy', 'G2yx'],
      ['F(f(x, y))', 'F(g(y, x))'],
      ['(x) [y] F2xy', '(y) [x] G2yx'],
      ['(x) [y] F2xy', '(y) [x] G2yx'],
      ['(x) (F2xy & [x] Gx)', '(y) (F2yz & [z] Gz)']
    ])('returns true for %p and %p', (formula1Txt, formula2Txt) => {
      const formula1 = parser.parseRootFormula(formula1Txt)
      const formula2 = parser.parseRootFormula(formula2Txt)
      const result = formula1.isIsomorphicTo(formula2)
      expect(result).toBe(true)
    })

    test.each([
      ['A', '~A'],
      ['A', '~B'],
      ['A -> ~A', 'A -> ~B'],
      ['F2xy', 'F2xx'],
      ['F(f(x, y))', 'F(g(y, y))'],
      ['(x) Fx', '[x] Fx'],
      ['(x) [y] F2xy', '(y) [x] F2xy']
    ])('returns false for %p and %p', (formula1Txt, formula2Txt) => {
      const formula1 = parser.parseRootFormula(formula1Txt)
      const formula2 = parser.parseRootFormula(formula2Txt)
      const result = formula1.isIsomorphicTo(formula2)
      expect(result).toBe(false)
    })
  })

  describe('findFreeIndVarSubstitution()', () => {
    test.each([
      ['A', 'A', undefined],
      ['Fx', 'Fx', undefined],
      ['F2xy', 'F2xx', ['y', 'x']],
      ['F2xx', 'F2yy', ['x', 'y']],
      ['(x) Fx', '(x) Fx', undefined],
      ['(z) F2xz -> [x] Gx', '(z) F2yz -> [x] Gx', ['x', 'y']]
    ])('for formulas %p for %p returns %p', (formula1Txt, formula2Txt, substitutionsRaw) => {
      const formula1 = parser.parseRootFormula(formula1Txt)
      const formula2 = parser.parseRootFormula(formula2Txt)
      const expectedSubstitution = substitutionsRaw?.map(id => createVariable(id))
      const substitution = formula1.findFreeIndVarSubstitution(formula2)
      expect(substitution).toDeepEqual(expectedSubstitution)
    })
  })
})
