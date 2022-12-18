import { all, createAtomicFormula, createTerm, not, some } from '../src/formula'
import { createParser } from './parser'
import { createErrorRegexForTest, ErrorCode } from '../src/errors'

describe('ast processor', () => {
  let parser
  beforeEach(() => {
    parser = createParser()
  })

  test.each([
    ['A',
      createAtomicFormula('A')
    ],
    [
      'Fx',
      createAtomicFormula('F', 'x')
    ],
    [
      'F(x)',
      createAtomicFormula('F', 'x')
    ],
    [
      'F(x, y)',
      createAtomicFormula('F', 'x', 'y')
    ],
    [
      'F(x, f(y))',
      createAtomicFormula('F', 'x', createTerm('f', 'y'))
    ],
    [
      '~A',
      not(createAtomicFormula('A'))
    ],
    [
      'A & B',
      createAtomicFormula('A').and(createAtomicFormula('B'))
    ],
    [
      'A | B',
      createAtomicFormula('A').or(createAtomicFormula('B'))
    ],
    [
      'A -> B',
      createAtomicFormula('A').then(createAtomicFormula('B'))
    ],
    [
      'A <-> B',
      createAtomicFormula('A').onlyThen(createAtomicFormula('B'))
    ],
    [
      '(x) A',
      all('x', createAtomicFormula('A'))
    ],
    [
      '[x] A',
      some('x', createAtomicFormula('A'))
    ]
  ])('produces expected formula for "%s"', (formulaTxt, expectedFormula) => {
    const formula = parser.parseRootFormula(formulaTxt)
    expect(formula).toDeepEqual(expectedFormula)
  })

  it('throws on variable collision', () => {
    parser.parseRootFormula('F')
    expect(() => {
      parser.parseRootFormula('Fx')
    }).toThrow(createErrorRegexForTest(ErrorCode.VARIABLE_COLLISION))
  })
})
