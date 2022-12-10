import { AtomicFormula, Term, Var } from '../src/formula'
import { createAntlr4Parser } from './antlr4-parser'
import { AstVisitor } from '../src/parser/ast-visitor'

describe('ast processor', () => {
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
    const parser = createAntlr4Parser(formulaTxt)
    const ast = parser.rootFormula()
    const visitor = new AstVisitor()
    const formula = visitor.visitRootFormula(ast)
    expect(formula).toEqual(expectedFormula)
  })
})
