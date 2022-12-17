import {
  all,
  createAtomicFormula,
  not,
  some,
  createTerm,
  and,
  or,
  then,
  onlyThen
} from '../src/formula'
import { createParser } from './parser'
import { ErrorCode, createErrorRegexForTest } from '../src/errors'

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
      and('A', 'B')
    ],
    [
      'A | B',
      or('A', 'B')
    ],
    [
      'A -> B',
      then('A', 'B')
    ],
    [
      'A <-> B',
      onlyThen('A', 'B')
    ],
    [
      '(x) A',
      all('x', 'A')
    ],
    [
      '[x] A',
      some('x', 'A')
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
