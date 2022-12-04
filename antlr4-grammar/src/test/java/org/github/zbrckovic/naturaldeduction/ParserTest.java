package org.github.zbrckovic.naturaldeduction;

import org.antlr.v4.runtime.*;
import org.antlr.v4.runtime.misc.ParseCancellationException;
import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.*;

public class ParserTest {
    @Test
    void throwsForEmpty() {
        var parser = createParser("");
        assertThrows(ParseCancellationException.class, parser::rootFormula);
    }

    @Test
    void throwsForIncompleteFormula() {
        var parser = createParser("A ->");
        assertThrows(ParseCancellationException.class, parser::rootFormula);
    }

    @Test
    void succeedsForValidFormula() {
        var parser = createParser("(F2yz -> ~G2zy) & [x] F2zx");
        assertDoesNotThrow(parser::rootFormula);
    }

    @Test
    void succeedsForValidFormulaWithFunctionAndIndVarList() {
        var parser = createParser("F(x, f(x)) -> Gxy");
        assertDoesNotThrow(parser::rootFormula);
    }

    @Test
    void succeedsForValidDeduction() {
        var parser = createParser("""
                1) [x] (y) Fyx : PR;
                2) (y) Fya     : -E 1;
                3) Fba         : -A 2;
                4) [x] Fbx     : +E 3;
                5) (y) [x] Fyx : +A 4;""");
        assertDoesNotThrow(parser::deduction);
    }

    private NaturalDeductionParser createParser(String text) {
        @SuppressWarnings("deprecation") final var stream = new ANTLRInputStream(text);
        var lexer = new NaturalDeductionLexer(stream);
        var tokenStream = new CommonTokenStream(lexer);
        var parser = new NaturalDeductionParser(tokenStream);
        parser.setErrorHandler(new BailErrorStrategy());
        return parser;
    }
}
