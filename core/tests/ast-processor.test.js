import { formula, term, all, some } from '../src/formula'
import { Parser } from './parser'
import { createErrorRegexForTest, ErrorCode } from '../src/errors'
import { not } from '../src/formula/formula'

describe('ast processor', () => {
  let parser
  beforeEach(() => {
    parser = new Parser()
  })

  test.each([
    ['A',
      formula('A')
    ],
    [
      'Fx',
      formula('F', 'x')
    ],
    [
      'F(x)',
      formula('F', 'x')
    ],
    [
      'F(x, y)',
      formula('F', 'x', 'y')
    ],
    [
      'F(x, f(y))',
      formula('F', 'x', term('f', 'y'))
    ],
    [
      '~A',
      not(formula('A'))
    ],
    [
      'A & B',
      formula('A').and(formula('B'))
    ],
    [
      'A | B',
      formula('A').or(formula('B'))
    ],
    [
      'A -> B',
      formula('A').then(formula('B'))
    ],
    [
      'A <-> B',
      formula('A').onlyThen(formula('B'))
    ],
    [
      '(x) A',
      all('x', formula('A'))
    ],
    [
      '[x] A',
      some('x', formula('A'))
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
