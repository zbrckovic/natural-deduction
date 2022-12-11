import { AtomicFormula, Term, Var } from '../src/formula'
import { Parser } from './parser'
import { createErrorRegexForTest, ErrorCode } from '../src/errors'

describe('ast processor', () => {
  let parser
  beforeEach(() => {
    parser = new Parser()
  })

  test.each([
    [
      'A',
      new AtomicFormula({
        predVar: new Var({ id: 'A' })
      })
    ],
    [
      'Fx',
      new AtomicFormula({
        predVar: new Var({ id: 'F', arity: 1 }),
        terms: [
          new Term({ termVar: new Var({ id: 'x' }) })
        ]
      })
    ],
    [
      'F(x)',
      new AtomicFormula({
        predVar: new Var({ id: 'F', arity: 1 }),
        terms: [
          new Term({ termVar: new Var({ id: 'x' }) })
        ]
      })
    ],
    [
      'F(x, y)',
      new AtomicFormula({
        predVar: new Var({ id: 'F', arity: 2 }),
        terms: [
          new Term({ termVar: new Var({ id: 'x' }) }),
          new Term({ termVar: new Var({ id: 'y' }) })
        ]
      })
    ]
  ])('produces expected formula for "%s"', (formulaTxt, expectedFormula) => {
    const formula = parser.parseRootFormula(formulaTxt)
    expect(formula).toEqual(expectedFormula)
  })

  it('throws on variable collision', () => {
    parser.parseRootFormula('F')
    expect(() => {
      parser.parseRootFormula('Fx')
    }).toThrow(createErrorRegexForTest(ErrorCode.VARIABLE_COLLISION))
  })
})
