import {createParser} from "./parser";

describe("parser", () => {
    it("throws for empty", () => {
        const parser = createParser("");
        expect(() => {
            parser.rootFormula()
        }).toThrow()
    })

    it("throws for incomplete formula", () => {
        const parser = createParser("A ->");
        expect(() => {
            parser.rootFormula()
        }).toThrow()
    })

    it("succeeds for valid formula", () => {
        const parser = createParser("(F2yz -> ~G2zy) & [x] F2zx");
        parser.rootFormula()
    })

    it("succeeds for valid formula with function and indVar list", () => {
        const parser = createParser("F(x, f(x)) -> Gxy");
        parser.rootFormula()
    })

    it("succeeds for valid deduction", () => {
        const parser = createParser(`
            1) [x] (y) Fyx : PR;
            2) (y) Fya     : -E 1;
            3) Fba         : -A 2;
            4) [x] Fbx     : +E 3;
            5) (y) [x] Fyx : +A 4;
        `);
        parser.deduction()
    })
})
