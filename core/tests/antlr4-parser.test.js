import { createAntlr4Parser } from './antlr4-parser'

describe('parser', () => {
  it('throws for empty', () => {
    const parser = createAntlr4Parser('')
    expect(() => {
      parser.rootFormula()
    }).toThrow()
  })

  it('throws for incomplete formula', () => {
    const parser = createAntlr4Parser('A ->')
    expect(() => {
      parser.rootFormula()
    }).toThrow()
  })

  it('succeeds for valid formula', () => {
    const parser = createAntlr4Parser('(F2yz -> ~G2zy) & [x] F2zx')
    parser.rootFormula()
  })

  it('succeeds for valid formula with function and indVar list', () => {
    const parser = createAntlr4Parser('F(x, f(x)) -> Gxy')
    parser.rootFormula()
  })

  it('succeeds for valid deduction', () => {
    const parser = createAntlr4Parser(`
            1) [x] (y) Fyx : PR;
            2) (y) Fya     : -E 1;
            3) Fba         : -A 2;
            4) [x] Fbx     : +E 3;
            5) (y) [x] Fyx : +A 4;
        `)
    parser.deduction()
  })
})
