// Generated from NaturalDeduction.g4 by ANTLR 4.9.3
// jshint ignore: start
import antlr4 from 'antlr4';
import NaturalDeductionListener from './NaturalDeductionListener.js';
import NaturalDeductionVisitor from './NaturalDeductionVisitor.js';


const serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786",
    "\u5964\u0003-\u00b0\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004\u0004",
    "\t\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t\u0007",
    "\u0004\b\t\b\u0004\t\t\t\u0004\n\t\n\u0004\u000b\t\u000b\u0004\f\t\f",
    "\u0004\r\t\r\u0004\u000e\t\u000e\u0004\u000f\t\u000f\u0004\u0010\t\u0010",
    "\u0004\u0011\t\u0011\u0004\u0012\t\u0012\u0004\u0013\t\u0013\u0004\u0014",
    "\t\u0014\u0004\u0015\t\u0015\u0004\u0016\t\u0016\u0003\u0002\u0007\u0002",
    ".\n\u0002\f\u0002\u000e\u00021\u000b\u0002\u0003\u0002\u0007\u00024",
    "\n\u0002\f\u0002\u000e\u00027\u000b\u0002\u0003\u0002\u0003\u0002\u0003",
    "\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003",
    "\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0007",
    "\u0004G\n\u0004\f\u0004\u000e\u0004J\u000b\u0004\u0003\u0004\u0003\u0004",
    "\u0003\u0004\u0003\u0004\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0005",
    "\u0003\u0006\u0006\u0006U\n\u0006\r\u0006\u000e\u0006V\u0003\u0007\u0003",
    "\u0007\u0003\u0007\u0003\u0007\u0003\u0007\u0003\u0007\u0003\u0007\u0003",
    "\b\u0003\b\u0005\bb\n\b\u0003\t\u0003\t\u0003\t\u0007\tg\n\t\f\t\u000e",
    "\tj\u000b\t\u0003\n\u0003\n\u0003\n\u0005\no\n\n\u0003\u000b\u0003\u000b",
    "\u0003\u000b\u0005\u000bt\n\u000b\u0003\f\u0003\f\u0005\fx\n\f\u0003",
    "\r\u0003\r\u0005\r|\n\r\u0003\u000e\u0003\u000e\u0003\u000e\u0003\u000e",
    "\u0003\u000f\u0003\u000f\u0003\u000f\u0003\u000f\u0003\u000f\u0003\u000f",
    "\u0003\u0010\u0003\u0010\u0003\u0010\u0003\u0011\u0003\u0011\u0003\u0012",
    "\u0003\u0012\u0005\u0012\u008f\n\u0012\u0003\u0013\u0003\u0013\u0003",
    "\u0013\u0003\u0013\u0003\u0013\u0003\u0014\u0003\u0014\u0003\u0014\u0003",
    "\u0014\u0003\u0014\u0003\u0015\u0003\u0015\u0005\u0015\u009d\n\u0015",
    "\u0003\u0016\u0006\u0016\u00a0\n\u0016\r\u0016\u000e\u0016\u00a1\u0003",
    "\u0016\u0003\u0016\u0003\u0016\u0003\u0016\u0007\u0016\u00a8\n\u0016",
    "\f\u0016\u000e\u0016\u00ab\u000b\u0016\u0003\u0016\u0005\u0016\u00ae",
    "\n\u0016\u0003\u0016\u0002\u0002\u0017\u0002\u0004\u0006\b\n\f\u000e",
    "\u0010\u0012\u0014\u0016\u0018\u001a\u001c\u001e \"$&(*\u0002\u0005",
    "\u0003\u0002\u0011\"\u0003\u0002),\u0005\u0002\u0011\u0012!!##\u0002",
    "\u00ab\u0002/\u0003\u0002\u0002\u0002\u0004:\u0003\u0002\u0002\u0002",
    "\u0006@\u0003\u0002\u0002\u0002\bO\u0003\u0002\u0002\u0002\nT\u0003",
    "\u0002\u0002\u0002\fX\u0003\u0002\u0002\u0002\u000e_\u0003\u0002\u0002",
    "\u0002\u0010c\u0003\u0002\u0002\u0002\u0012n\u0003\u0002\u0002\u0002",
    "\u0014s\u0003\u0002\u0002\u0002\u0016w\u0003\u0002\u0002\u0002\u0018",
    "{\u0003\u0002\u0002\u0002\u001a}\u0003\u0002\u0002\u0002\u001c\u0081",
    "\u0003\u0002\u0002\u0002\u001e\u0087\u0003\u0002\u0002\u0002 \u008a",
    "\u0003\u0002\u0002\u0002\"\u008e\u0003\u0002\u0002\u0002$\u0090\u0003",
    "\u0002\u0002\u0002&\u0095\u0003\u0002\u0002\u0002(\u009a\u0003\u0002",
    "\u0002\u0002*\u00ad\u0003\u0002\u0002\u0002,.\u0005\u0004\u0003\u0002",
    "-,\u0003\u0002\u0002\u0002.1\u0003\u0002\u0002\u0002/-\u0003\u0002\u0002",
    "\u0002/0\u0003\u0002\u0002\u000205\u0003\u0002\u0002\u00021/\u0003\u0002",
    "\u0002\u000224\u0005\u0006\u0004\u000232\u0003\u0002\u0002\u000247\u0003",
    "\u0002\u0002\u000253\u0003\u0002\u0002\u000256\u0003\u0002\u0002\u0002",
    "68\u0003\u0002\u0002\u000275\u0003\u0002\u0002\u000289\u0005\n\u0006",
    "\u00029\u0003\u0003\u0002\u0002\u0002:;\u0007\u0003\u0002\u0002;<\u0005",
    "\u0012\n\u0002<=\u0007\u0004\u0002\u0002=>\u0007\u0010\u0002\u0002>",
    "?\u0007\u0005\u0002\u0002?\u0005\u0003\u0002\u0002\u0002@A\u0007\u0006",
    "\u0002\u0002AB\u0005\u0012\n\u0002BC\u0007\u0007\u0002\u0002CH\u0005",
    "\b\u0005\u0002DE\u0007\b\u0002\u0002EG\u0005\b\u0005\u0002FD\u0003\u0002",
    "\u0002\u0002GJ\u0003\u0002\u0002\u0002HF\u0003\u0002\u0002\u0002HI\u0003",
    "\u0002\u0002\u0002IK\u0003\u0002\u0002\u0002JH\u0003\u0002\u0002\u0002",
    "KL\u0007\t\u0002\u0002LM\u0005\u0012\n\u0002MN\u0007\u0005\u0002\u0002",
    "N\u0007\u0003\u0002\u0002\u0002OP\u0005(\u0015\u0002PQ\u0007\n\u0002",
    "\u0002QR\u0005\u0012\n\u0002R\t\u0003\u0002\u0002\u0002SU\u0005\f\u0007",
    "\u0002TS\u0003\u0002\u0002\u0002UV\u0003\u0002\u0002\u0002VT\u0003\u0002",
    "\u0002\u0002VW\u0003\u0002\u0002\u0002W\u000b\u0003\u0002\u0002\u0002",
    "XY\u0007%\u0002\u0002YZ\u0007\u000b\u0002\u0002Z[\u0005\u0012\n\u0002",
    "[\\\u0007\f\u0002\u0002\\]\u0005\u000e\b\u0002]^\u0007\u0005\u0002\u0002",
    "^\r\u0003\u0002\u0002\u0002_a\t\u0002\u0002\u0002`b\u0005\u0010\t\u0002",
    "a`\u0003\u0002\u0002\u0002ab\u0003\u0002\u0002\u0002b\u000f\u0003\u0002",
    "\u0002\u0002ch\u0007%\u0002\u0002de\u0007\b\u0002\u0002eg\u0007%\u0002",
    "\u0002fd\u0003\u0002\u0002\u0002gj\u0003\u0002\u0002\u0002hf\u0003\u0002",
    "\u0002\u0002hi\u0003\u0002\u0002\u0002i\u0011\u0003\u0002\u0002\u0002",
    "jh\u0003\u0002\u0002\u0002ko\u0005\u0016\f\u0002lo\u0005\"\u0012\u0002",
    "mo\u0005(\u0015\u0002nk\u0003\u0002\u0002\u0002nl\u0003\u0002\u0002",
    "\u0002nm\u0003\u0002\u0002\u0002o\u0013\u0003\u0002\u0002\u0002pt\u0005",
    "\u0018\r\u0002qt\u0005\"\u0012\u0002rt\u0005(\u0015\u0002sp\u0003\u0002",
    "\u0002\u0002sq\u0003\u0002\u0002\u0002sr\u0003\u0002\u0002\u0002t\u0015",
    "\u0003\u0002\u0002\u0002ux\u0005\u001a\u000e\u0002vx\u0005\u001e\u0010",
    "\u0002wu\u0003\u0002\u0002\u0002wv\u0003\u0002\u0002\u0002x\u0017\u0003",
    "\u0002\u0002\u0002y|\u0005\u001c\u000f\u0002z|\u0005\u001e\u0010\u0002",
    "{y\u0003\u0002\u0002\u0002{z\u0003\u0002\u0002\u0002|\u0019\u0003\u0002",
    "\u0002\u0002}~\u0005\u0014\u000b\u0002~\u007f\u0005 \u0011\u0002\u007f",
    "\u0080\u0005\u0014\u000b\u0002\u0080\u001b\u0003\u0002\u0002\u0002\u0081",
    "\u0082\u0007\r\u0002\u0002\u0082\u0083\u0005\u0014\u000b\u0002\u0083",
    "\u0084\u0005 \u0011\u0002\u0084\u0085\u0005\u0014\u000b\u0002\u0085",
    "\u0086\u0007\u000b\u0002\u0002\u0086\u001d\u0003\u0002\u0002\u0002\u0087",
    "\u0088\u0007(\u0002\u0002\u0088\u0089\u0005\u0014\u000b\u0002\u0089",
    "\u001f\u0003\u0002\u0002\u0002\u008a\u008b\t\u0003\u0002\u0002\u008b",
    "!\u0003\u0002\u0002\u0002\u008c\u008f\u0005$\u0013\u0002\u008d\u008f",
    "\u0005&\u0014\u0002\u008e\u008c\u0003\u0002\u0002\u0002\u008e\u008d",
    "\u0003\u0002\u0002\u0002\u008f#\u0003\u0002\u0002\u0002\u0090\u0091",
    "\u0007\r\u0002\u0002\u0091\u0092\u0007$\u0002\u0002\u0092\u0093\u0007",
    "\u000b\u0002\u0002\u0093\u0094\u0005\u0014\u000b\u0002\u0094%\u0003",
    "\u0002\u0002\u0002\u0095\u0096\u0007\u000e\u0002\u0002\u0096\u0097\u0007",
    "$\u0002\u0002\u0097\u0098\u0007\u000f\u0002\u0002\u0098\u0099\u0005",
    "\u0014\u000b\u0002\u0099\'\u0003\u0002\u0002\u0002\u009a\u009c\t\u0004",
    "\u0002\u0002\u009b\u009d\u0005*\u0016\u0002\u009c\u009b\u0003\u0002",
    "\u0002\u0002\u009c\u009d\u0003\u0002\u0002\u0002\u009d)\u0003\u0002",
    "\u0002\u0002\u009e\u00a0\u0007$\u0002\u0002\u009f\u009e\u0003\u0002",
    "\u0002\u0002\u00a0\u00a1\u0003\u0002\u0002\u0002\u00a1\u009f\u0003\u0002",
    "\u0002\u0002\u00a1\u00a2\u0003\u0002\u0002\u0002\u00a2\u00ae\u0003\u0002",
    "\u0002\u0002\u00a3\u00a4\u0007\r\u0002\u0002\u00a4\u00a9\u0007$\u0002",
    "\u0002\u00a5\u00a6\u0007\b\u0002\u0002\u00a6\u00a8\u0007$\u0002\u0002",
    "\u00a7\u00a5\u0003\u0002\u0002\u0002\u00a8\u00ab\u0003\u0002\u0002\u0002",
    "\u00a9\u00a7\u0003\u0002\u0002\u0002\u00a9\u00aa\u0003\u0002\u0002\u0002",
    "\u00aa\u00ac\u0003\u0002\u0002\u0002\u00ab\u00a9\u0003\u0002\u0002\u0002",
    "\u00ac\u00ae\u0007\u000b\u0002\u0002\u00ad\u009f\u0003\u0002\u0002\u0002",
    "\u00ad\u00a3\u0003\u0002\u0002\u0002\u00ae+\u0003\u0002\u0002\u0002",
    "\u0011/5HVahnsw{\u008e\u009c\u00a1\u00a9\u00ad"].join("");


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.PredictionContextCache();

export default class NaturalDeductionParser extends antlr4.Parser {

    static grammarFileName = "NaturalDeduction.g4";
    static literalNames = [ null, "'import'", "'from'", "';'", "'in'", "'substitute'", 
                            "','", "'result'", "'with'", "')'", "':'", "'('", 
                            "'['", "']'", null, "'PR'", "'TH'", "'+A'", 
                            "'-A'", "'+E'", "'-E'", "'+IF'", "'-IF'", "'+IFF'", 
                            "'-IFF'", "'+AND'", "'-AND'", "'+OR'", "'-OR'", 
                            "'+NOT'", "'-NOT'", "'XP'", "'RP'", null, null, 
                            null, null, null, "'~'", "'&'", "'|'", "'->'", 
                            "'<->'" ];
    static symbolicNames = [ null, null, null, null, null, null, null, null, 
                             null, null, null, null, null, null, "STRING", 
                             "RULE_PREMISE", "RULE_THEOREM", "RULE_A_IN", 
                             "RULE_A_OUT", "RULE_E_IN", "RULE_E_OUT", "RULE_IF_IN", 
                             "RULE_IF_OUT", "RULE_IFF_IN", "RULE_IFF_OUT", 
                             "RULE_AND_IN", "RULE_AND_OUT", "RULE_OR_IN", 
                             "RULE_OR_OUT", "RULE_NOT_IN", "RULE_NOT_OUT", 
                             "RULE_EXPLOSION", "RULE_REPETITION", "PRED_VAR", 
                             "IND_VAR", "NUMBER", "NEWLINE", "WS", "NEGATION", 
                             "CONJUNCTION", "DISJUNCTION", "CONDITIONAL", 
                             "BICONDITIONAL", "UNKNOWN" ];
    static ruleNames = [ "start", "theoremImport", "substitution", "spec", 
                         "deduction", "line", "ruleOfInference", "ruleDependencies", 
                         "rootFormula", "formula", "compRootFormula", "compFormula", 
                         "compRootBinaryFormula", "compBinaryFormula", "compUnaryFormula", 
                         "binaryOperator", "quantFormula", "uniFormula", 
                         "exiFormula", "atomicFormula", "terms" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = NaturalDeductionParser.ruleNames;
        this.literalNames = NaturalDeductionParser.literalNames;
        this.symbolicNames = NaturalDeductionParser.symbolicNames;
    }

    get atn() {
        return atn;
    }



	start() {
	    let localctx = new StartContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, NaturalDeductionParser.RULE_start);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 45;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===NaturalDeductionParser.T__0) {
	            this.state = 42;
	            localctx._theoremImport = this.theoremImport();
	            localctx.theoremImports.push(localctx._theoremImport);
	            this.state = 47;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 51;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===NaturalDeductionParser.T__3) {
	            this.state = 48;
	            localctx._substitution = this.substitution();
	            localctx.substitutions.push(localctx._substitution);
	            this.state = 53;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 54;
	        this.deduction();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	theoremImport() {
	    let localctx = new TheoremImportContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 2, NaturalDeductionParser.RULE_theoremImport);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 56;
	        this.match(NaturalDeductionParser.T__0);
	        this.state = 57;
	        localctx.theorem = this.rootFormula();
	        this.state = 58;
	        this.match(NaturalDeductionParser.T__1);
	        this.state = 59;
	        localctx.filepath = this.match(NaturalDeductionParser.STRING);
	        this.state = 60;
	        this.match(NaturalDeductionParser.T__2);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	substitution() {
	    let localctx = new SubstitutionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, NaturalDeductionParser.RULE_substitution);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 62;
	        this.match(NaturalDeductionParser.T__3);
	        this.state = 63;
	        localctx.theorem = this.rootFormula();
	        this.state = 64;
	        this.match(NaturalDeductionParser.T__4);
	        this.state = 65;
	        localctx._spec = this.spec();
	        localctx.specs.push(localctx._spec);
	        this.state = 70;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===NaturalDeductionParser.T__5) {
	            this.state = 66;
	            this.match(NaturalDeductionParser.T__5);
	            this.state = 67;
	            localctx._spec = this.spec();
	            localctx.specs.push(localctx._spec);
	            this.state = 72;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 73;
	        this.match(NaturalDeductionParser.T__6);
	        this.state = 74;
	        localctx.result = this.rootFormula();
	        this.state = 75;
	        this.match(NaturalDeductionParser.T__2);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	spec() {
	    let localctx = new SpecContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, NaturalDeductionParser.RULE_spec);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 77;
	        localctx.substituted = this.atomicFormula();
	        this.state = 78;
	        this.match(NaturalDeductionParser.T__7);
	        this.state = 79;
	        localctx.substitute = this.rootFormula();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	deduction() {
	    let localctx = new DeductionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 8, NaturalDeductionParser.RULE_deduction);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 82; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 81;
	            localctx._line = this.line();
	            localctx.lines.push(localctx._line);
	            this.state = 84; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while(_la===NaturalDeductionParser.NUMBER);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	line() {
	    let localctx = new LineContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 10, NaturalDeductionParser.RULE_line);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 86;
	        localctx.lineNumber = this.match(NaturalDeductionParser.NUMBER);
	        this.state = 87;
	        this.match(NaturalDeductionParser.T__8);
	        this.state = 88;
	        this.rootFormula();
	        this.state = 89;
	        this.match(NaturalDeductionParser.T__9);
	        this.state = 90;
	        this.ruleOfInference();
	        this.state = 91;
	        this.match(NaturalDeductionParser.T__2);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	ruleOfInference() {
	    let localctx = new RuleOfInferenceContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 12, NaturalDeductionParser.RULE_ruleOfInference);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 93;
	        localctx.ruleName = this._input.LT(1);
	        _la = this._input.LA(1);
	        if(!(((((_la - 15)) & ~0x1f) == 0 && ((1 << (_la - 15)) & ((1 << (NaturalDeductionParser.RULE_PREMISE - 15)) | (1 << (NaturalDeductionParser.RULE_THEOREM - 15)) | (1 << (NaturalDeductionParser.RULE_A_IN - 15)) | (1 << (NaturalDeductionParser.RULE_A_OUT - 15)) | (1 << (NaturalDeductionParser.RULE_E_IN - 15)) | (1 << (NaturalDeductionParser.RULE_E_OUT - 15)) | (1 << (NaturalDeductionParser.RULE_IF_IN - 15)) | (1 << (NaturalDeductionParser.RULE_IF_OUT - 15)) | (1 << (NaturalDeductionParser.RULE_IFF_IN - 15)) | (1 << (NaturalDeductionParser.RULE_IFF_OUT - 15)) | (1 << (NaturalDeductionParser.RULE_AND_IN - 15)) | (1 << (NaturalDeductionParser.RULE_AND_OUT - 15)) | (1 << (NaturalDeductionParser.RULE_OR_IN - 15)) | (1 << (NaturalDeductionParser.RULE_OR_OUT - 15)) | (1 << (NaturalDeductionParser.RULE_NOT_IN - 15)) | (1 << (NaturalDeductionParser.RULE_NOT_OUT - 15)) | (1 << (NaturalDeductionParser.RULE_EXPLOSION - 15)) | (1 << (NaturalDeductionParser.RULE_REPETITION - 15)))) !== 0))) {
	            localctx.ruleName = this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	        this.state = 95;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===NaturalDeductionParser.NUMBER) {
	            this.state = 94;
	            this.ruleDependencies();
	        }

	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	ruleDependencies() {
	    let localctx = new RuleDependenciesContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 14, NaturalDeductionParser.RULE_ruleDependencies);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 97;
	        localctx._NUMBER = this.match(NaturalDeductionParser.NUMBER);
	        localctx.lineNumbers.push(localctx._NUMBER);
	        this.state = 102;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===NaturalDeductionParser.T__5) {
	            this.state = 98;
	            this.match(NaturalDeductionParser.T__5);
	            this.state = 99;
	            localctx._NUMBER = this.match(NaturalDeductionParser.NUMBER);
	            localctx.lineNumbers.push(localctx._NUMBER);
	            this.state = 104;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	rootFormula() {
	    let localctx = new RootFormulaContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 16, NaturalDeductionParser.RULE_rootFormula);
	    try {
	        this.state = 108;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,6,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 105;
	            this.compRootFormula();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 106;
	            this.quantFormula();
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 107;
	            this.atomicFormula();
	            break;

	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	formula() {
	    let localctx = new FormulaContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 18, NaturalDeductionParser.RULE_formula);
	    try {
	        this.state = 113;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,7,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 110;
	            this.compFormula();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 111;
	            this.quantFormula();
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 112;
	            this.atomicFormula();
	            break;

	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	compRootFormula() {
	    let localctx = new CompRootFormulaContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 20, NaturalDeductionParser.RULE_compRootFormula);
	    try {
	        this.state = 117;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,8,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 115;
	            this.compRootBinaryFormula();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 116;
	            this.compUnaryFormula();
	            break;

	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	compFormula() {
	    let localctx = new CompFormulaContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 22, NaturalDeductionParser.RULE_compFormula);
	    try {
	        this.state = 121;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case NaturalDeductionParser.T__10:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 119;
	            this.compBinaryFormula();
	            break;
	        case NaturalDeductionParser.NEGATION:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 120;
	            this.compUnaryFormula();
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	compRootBinaryFormula() {
	    let localctx = new CompRootBinaryFormulaContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 24, NaturalDeductionParser.RULE_compRootBinaryFormula);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 123;
	        localctx.lFormula = this.formula();
	        this.state = 124;
	        this.binaryOperator();
	        this.state = 125;
	        localctx.rFormula = this.formula();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	compBinaryFormula() {
	    let localctx = new CompBinaryFormulaContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 26, NaturalDeductionParser.RULE_compBinaryFormula);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 127;
	        localctx.lParen = this.match(NaturalDeductionParser.T__10);
	        this.state = 128;
	        localctx.lFormula = this.formula();
	        this.state = 129;
	        this.binaryOperator();
	        this.state = 130;
	        localctx.rFormula = this.formula();
	        this.state = 131;
	        localctx.rParen = this.match(NaturalDeductionParser.T__8);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	compUnaryFormula() {
	    let localctx = new CompUnaryFormulaContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 28, NaturalDeductionParser.RULE_compUnaryFormula);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 133;
	        localctx.operator = this.match(NaturalDeductionParser.NEGATION);
	        this.state = 134;
	        this.formula();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	binaryOperator() {
	    let localctx = new BinaryOperatorContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 30, NaturalDeductionParser.RULE_binaryOperator);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 136;
	        localctx.operator = this._input.LT(1);
	        _la = this._input.LA(1);
	        if(!(((((_la - 39)) & ~0x1f) == 0 && ((1 << (_la - 39)) & ((1 << (NaturalDeductionParser.CONJUNCTION - 39)) | (1 << (NaturalDeductionParser.DISJUNCTION - 39)) | (1 << (NaturalDeductionParser.CONDITIONAL - 39)) | (1 << (NaturalDeductionParser.BICONDITIONAL - 39)))) !== 0))) {
	            localctx.operator = this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	quantFormula() {
	    let localctx = new QuantFormulaContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 32, NaturalDeductionParser.RULE_quantFormula);
	    try {
	        this.state = 140;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case NaturalDeductionParser.T__10:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 138;
	            this.uniFormula();
	            break;
	        case NaturalDeductionParser.T__11:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 139;
	            this.exiFormula();
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	uniFormula() {
	    let localctx = new UniFormulaContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 34, NaturalDeductionParser.RULE_uniFormula);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 142;
	        localctx.lParen = this.match(NaturalDeductionParser.T__10);
	        this.state = 143;
	        localctx.indVar = this.match(NaturalDeductionParser.IND_VAR);
	        this.state = 144;
	        localctx.rParen = this.match(NaturalDeductionParser.T__8);
	        this.state = 145;
	        this.formula();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	exiFormula() {
	    let localctx = new ExiFormulaContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 36, NaturalDeductionParser.RULE_exiFormula);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 147;
	        localctx.lBracket = this.match(NaturalDeductionParser.T__11);
	        this.state = 148;
	        localctx.indVar = this.match(NaturalDeductionParser.IND_VAR);
	        this.state = 149;
	        localctx.rBracket = this.match(NaturalDeductionParser.T__12);
	        this.state = 150;
	        this.formula();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	atomicFormula() {
	    let localctx = new AtomicFormulaContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 38, NaturalDeductionParser.RULE_atomicFormula);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 152;
	        localctx.predVar = this._input.LT(1);
	        _la = this._input.LA(1);
	        if(!(((((_la - 15)) & ~0x1f) == 0 && ((1 << (_la - 15)) & ((1 << (NaturalDeductionParser.RULE_PREMISE - 15)) | (1 << (NaturalDeductionParser.RULE_THEOREM - 15)) | (1 << (NaturalDeductionParser.RULE_EXPLOSION - 15)) | (1 << (NaturalDeductionParser.PRED_VAR - 15)))) !== 0))) {
	            localctx.predVar = this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	        this.state = 154;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===NaturalDeductionParser.T__10 || _la===NaturalDeductionParser.IND_VAR) {
	            this.state = 153;
	            this.terms();
	        }

	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	terms() {
	    let localctx = new TermsContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 40, NaturalDeductionParser.RULE_terms);
	    var _la = 0; // Token type
	    try {
	        this.state = 171;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case NaturalDeductionParser.IND_VAR:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 157; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            do {
	                this.state = 156;
	                localctx._IND_VAR = this.match(NaturalDeductionParser.IND_VAR);
	                localctx.indVars.push(localctx._IND_VAR);
	                this.state = 159; 
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            } while(_la===NaturalDeductionParser.IND_VAR);
	            break;
	        case NaturalDeductionParser.T__10:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 161;
	            localctx.lParen = this.match(NaturalDeductionParser.T__10);
	            this.state = 162;
	            localctx._IND_VAR = this.match(NaturalDeductionParser.IND_VAR);
	            localctx.indVars.push(localctx._IND_VAR);
	            this.state = 167;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(_la===NaturalDeductionParser.T__5) {
	                this.state = 163;
	                this.match(NaturalDeductionParser.T__5);
	                this.state = 164;
	                localctx._IND_VAR = this.match(NaturalDeductionParser.IND_VAR);
	                localctx.indVars.push(localctx._IND_VAR);
	                this.state = 169;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	            this.state = 170;
	            localctx.rParen = this.match(NaturalDeductionParser.T__8);
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}


}

NaturalDeductionParser.EOF = antlr4.Token.EOF;
NaturalDeductionParser.T__0 = 1;
NaturalDeductionParser.T__1 = 2;
NaturalDeductionParser.T__2 = 3;
NaturalDeductionParser.T__3 = 4;
NaturalDeductionParser.T__4 = 5;
NaturalDeductionParser.T__5 = 6;
NaturalDeductionParser.T__6 = 7;
NaturalDeductionParser.T__7 = 8;
NaturalDeductionParser.T__8 = 9;
NaturalDeductionParser.T__9 = 10;
NaturalDeductionParser.T__10 = 11;
NaturalDeductionParser.T__11 = 12;
NaturalDeductionParser.T__12 = 13;
NaturalDeductionParser.STRING = 14;
NaturalDeductionParser.RULE_PREMISE = 15;
NaturalDeductionParser.RULE_THEOREM = 16;
NaturalDeductionParser.RULE_A_IN = 17;
NaturalDeductionParser.RULE_A_OUT = 18;
NaturalDeductionParser.RULE_E_IN = 19;
NaturalDeductionParser.RULE_E_OUT = 20;
NaturalDeductionParser.RULE_IF_IN = 21;
NaturalDeductionParser.RULE_IF_OUT = 22;
NaturalDeductionParser.RULE_IFF_IN = 23;
NaturalDeductionParser.RULE_IFF_OUT = 24;
NaturalDeductionParser.RULE_AND_IN = 25;
NaturalDeductionParser.RULE_AND_OUT = 26;
NaturalDeductionParser.RULE_OR_IN = 27;
NaturalDeductionParser.RULE_OR_OUT = 28;
NaturalDeductionParser.RULE_NOT_IN = 29;
NaturalDeductionParser.RULE_NOT_OUT = 30;
NaturalDeductionParser.RULE_EXPLOSION = 31;
NaturalDeductionParser.RULE_REPETITION = 32;
NaturalDeductionParser.PRED_VAR = 33;
NaturalDeductionParser.IND_VAR = 34;
NaturalDeductionParser.NUMBER = 35;
NaturalDeductionParser.NEWLINE = 36;
NaturalDeductionParser.WS = 37;
NaturalDeductionParser.NEGATION = 38;
NaturalDeductionParser.CONJUNCTION = 39;
NaturalDeductionParser.DISJUNCTION = 40;
NaturalDeductionParser.CONDITIONAL = 41;
NaturalDeductionParser.BICONDITIONAL = 42;
NaturalDeductionParser.UNKNOWN = 43;

NaturalDeductionParser.RULE_start = 0;
NaturalDeductionParser.RULE_theoremImport = 1;
NaturalDeductionParser.RULE_substitution = 2;
NaturalDeductionParser.RULE_spec = 3;
NaturalDeductionParser.RULE_deduction = 4;
NaturalDeductionParser.RULE_line = 5;
NaturalDeductionParser.RULE_ruleOfInference = 6;
NaturalDeductionParser.RULE_ruleDependencies = 7;
NaturalDeductionParser.RULE_rootFormula = 8;
NaturalDeductionParser.RULE_formula = 9;
NaturalDeductionParser.RULE_compRootFormula = 10;
NaturalDeductionParser.RULE_compFormula = 11;
NaturalDeductionParser.RULE_compRootBinaryFormula = 12;
NaturalDeductionParser.RULE_compBinaryFormula = 13;
NaturalDeductionParser.RULE_compUnaryFormula = 14;
NaturalDeductionParser.RULE_binaryOperator = 15;
NaturalDeductionParser.RULE_quantFormula = 16;
NaturalDeductionParser.RULE_uniFormula = 17;
NaturalDeductionParser.RULE_exiFormula = 18;
NaturalDeductionParser.RULE_atomicFormula = 19;
NaturalDeductionParser.RULE_terms = 20;

class StartContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = NaturalDeductionParser.RULE_start;
        this._theoremImport = null; // TheoremImportContext
        this.theoremImports = []; // of TheoremImportContexts
        this._substitution = null; // SubstitutionContext
        this.substitutions = []; // of SubstitutionContexts
    }

	deduction() {
	    return this.getTypedRuleContext(DeductionContext,0);
	};

	theoremImport = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(TheoremImportContext);
	    } else {
	        return this.getTypedRuleContext(TheoremImportContext,i);
	    }
	};

	substitution = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(SubstitutionContext);
	    } else {
	        return this.getTypedRuleContext(SubstitutionContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof NaturalDeductionListener ) {
	        listener.enterStart(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof NaturalDeductionListener ) {
	        listener.exitStart(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof NaturalDeductionVisitor ) {
	        return visitor.visitStart(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class TheoremImportContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = NaturalDeductionParser.RULE_theoremImport;
        this.theorem = null; // RootFormulaContext
        this.filepath = null; // Token
    }

	rootFormula() {
	    return this.getTypedRuleContext(RootFormulaContext,0);
	};

	STRING() {
	    return this.getToken(NaturalDeductionParser.STRING, 0);
	};

	enterRule(listener) {
	    if(listener instanceof NaturalDeductionListener ) {
	        listener.enterTheoremImport(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof NaturalDeductionListener ) {
	        listener.exitTheoremImport(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof NaturalDeductionVisitor ) {
	        return visitor.visitTheoremImport(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class SubstitutionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = NaturalDeductionParser.RULE_substitution;
        this.theorem = null; // RootFormulaContext
        this._spec = null; // SpecContext
        this.specs = []; // of SpecContexts
        this.result = null; // RootFormulaContext
    }

	rootFormula = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(RootFormulaContext);
	    } else {
	        return this.getTypedRuleContext(RootFormulaContext,i);
	    }
	};

	spec = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(SpecContext);
	    } else {
	        return this.getTypedRuleContext(SpecContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof NaturalDeductionListener ) {
	        listener.enterSubstitution(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof NaturalDeductionListener ) {
	        listener.exitSubstitution(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof NaturalDeductionVisitor ) {
	        return visitor.visitSubstitution(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class SpecContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = NaturalDeductionParser.RULE_spec;
        this.substituted = null; // AtomicFormulaContext
        this.substitute = null; // RootFormulaContext
    }

	atomicFormula() {
	    return this.getTypedRuleContext(AtomicFormulaContext,0);
	};

	rootFormula() {
	    return this.getTypedRuleContext(RootFormulaContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof NaturalDeductionListener ) {
	        listener.enterSpec(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof NaturalDeductionListener ) {
	        listener.exitSpec(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof NaturalDeductionVisitor ) {
	        return visitor.visitSpec(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class DeductionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = NaturalDeductionParser.RULE_deduction;
        this._line = null; // LineContext
        this.lines = []; // of LineContexts
    }

	line = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(LineContext);
	    } else {
	        return this.getTypedRuleContext(LineContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof NaturalDeductionListener ) {
	        listener.enterDeduction(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof NaturalDeductionListener ) {
	        listener.exitDeduction(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof NaturalDeductionVisitor ) {
	        return visitor.visitDeduction(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class LineContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = NaturalDeductionParser.RULE_line;
        this.lineNumber = null; // Token
    }

	rootFormula() {
	    return this.getTypedRuleContext(RootFormulaContext,0);
	};

	ruleOfInference() {
	    return this.getTypedRuleContext(RuleOfInferenceContext,0);
	};

	NUMBER() {
	    return this.getToken(NaturalDeductionParser.NUMBER, 0);
	};

	enterRule(listener) {
	    if(listener instanceof NaturalDeductionListener ) {
	        listener.enterLine(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof NaturalDeductionListener ) {
	        listener.exitLine(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof NaturalDeductionVisitor ) {
	        return visitor.visitLine(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class RuleOfInferenceContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = NaturalDeductionParser.RULE_ruleOfInference;
        this.ruleName = null; // Token
    }

	RULE_PREMISE() {
	    return this.getToken(NaturalDeductionParser.RULE_PREMISE, 0);
	};

	RULE_THEOREM() {
	    return this.getToken(NaturalDeductionParser.RULE_THEOREM, 0);
	};

	RULE_A_IN() {
	    return this.getToken(NaturalDeductionParser.RULE_A_IN, 0);
	};

	RULE_A_OUT() {
	    return this.getToken(NaturalDeductionParser.RULE_A_OUT, 0);
	};

	RULE_E_IN() {
	    return this.getToken(NaturalDeductionParser.RULE_E_IN, 0);
	};

	RULE_E_OUT() {
	    return this.getToken(NaturalDeductionParser.RULE_E_OUT, 0);
	};

	RULE_IF_IN() {
	    return this.getToken(NaturalDeductionParser.RULE_IF_IN, 0);
	};

	RULE_IF_OUT() {
	    return this.getToken(NaturalDeductionParser.RULE_IF_OUT, 0);
	};

	RULE_IFF_IN() {
	    return this.getToken(NaturalDeductionParser.RULE_IFF_IN, 0);
	};

	RULE_IFF_OUT() {
	    return this.getToken(NaturalDeductionParser.RULE_IFF_OUT, 0);
	};

	RULE_AND_IN() {
	    return this.getToken(NaturalDeductionParser.RULE_AND_IN, 0);
	};

	RULE_AND_OUT() {
	    return this.getToken(NaturalDeductionParser.RULE_AND_OUT, 0);
	};

	RULE_OR_IN() {
	    return this.getToken(NaturalDeductionParser.RULE_OR_IN, 0);
	};

	RULE_OR_OUT() {
	    return this.getToken(NaturalDeductionParser.RULE_OR_OUT, 0);
	};

	RULE_NOT_IN() {
	    return this.getToken(NaturalDeductionParser.RULE_NOT_IN, 0);
	};

	RULE_NOT_OUT() {
	    return this.getToken(NaturalDeductionParser.RULE_NOT_OUT, 0);
	};

	RULE_EXPLOSION() {
	    return this.getToken(NaturalDeductionParser.RULE_EXPLOSION, 0);
	};

	RULE_REPETITION() {
	    return this.getToken(NaturalDeductionParser.RULE_REPETITION, 0);
	};

	ruleDependencies() {
	    return this.getTypedRuleContext(RuleDependenciesContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof NaturalDeductionListener ) {
	        listener.enterRuleOfInference(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof NaturalDeductionListener ) {
	        listener.exitRuleOfInference(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof NaturalDeductionVisitor ) {
	        return visitor.visitRuleOfInference(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class RuleDependenciesContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = NaturalDeductionParser.RULE_ruleDependencies;
        this._NUMBER = null; // Token
        this.lineNumbers = []; // of Tokens
    }

	NUMBER = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(NaturalDeductionParser.NUMBER);
	    } else {
	        return this.getToken(NaturalDeductionParser.NUMBER, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof NaturalDeductionListener ) {
	        listener.enterRuleDependencies(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof NaturalDeductionListener ) {
	        listener.exitRuleDependencies(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof NaturalDeductionVisitor ) {
	        return visitor.visitRuleDependencies(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class RootFormulaContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = NaturalDeductionParser.RULE_rootFormula;
    }

	compRootFormula() {
	    return this.getTypedRuleContext(CompRootFormulaContext,0);
	};

	quantFormula() {
	    return this.getTypedRuleContext(QuantFormulaContext,0);
	};

	atomicFormula() {
	    return this.getTypedRuleContext(AtomicFormulaContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof NaturalDeductionListener ) {
	        listener.enterRootFormula(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof NaturalDeductionListener ) {
	        listener.exitRootFormula(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof NaturalDeductionVisitor ) {
	        return visitor.visitRootFormula(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class FormulaContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = NaturalDeductionParser.RULE_formula;
    }

	compFormula() {
	    return this.getTypedRuleContext(CompFormulaContext,0);
	};

	quantFormula() {
	    return this.getTypedRuleContext(QuantFormulaContext,0);
	};

	atomicFormula() {
	    return this.getTypedRuleContext(AtomicFormulaContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof NaturalDeductionListener ) {
	        listener.enterFormula(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof NaturalDeductionListener ) {
	        listener.exitFormula(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof NaturalDeductionVisitor ) {
	        return visitor.visitFormula(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class CompRootFormulaContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = NaturalDeductionParser.RULE_compRootFormula;
    }

	compRootBinaryFormula() {
	    return this.getTypedRuleContext(CompRootBinaryFormulaContext,0);
	};

	compUnaryFormula() {
	    return this.getTypedRuleContext(CompUnaryFormulaContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof NaturalDeductionListener ) {
	        listener.enterCompRootFormula(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof NaturalDeductionListener ) {
	        listener.exitCompRootFormula(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof NaturalDeductionVisitor ) {
	        return visitor.visitCompRootFormula(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class CompFormulaContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = NaturalDeductionParser.RULE_compFormula;
    }

	compBinaryFormula() {
	    return this.getTypedRuleContext(CompBinaryFormulaContext,0);
	};

	compUnaryFormula() {
	    return this.getTypedRuleContext(CompUnaryFormulaContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof NaturalDeductionListener ) {
	        listener.enterCompFormula(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof NaturalDeductionListener ) {
	        listener.exitCompFormula(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof NaturalDeductionVisitor ) {
	        return visitor.visitCompFormula(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class CompRootBinaryFormulaContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = NaturalDeductionParser.RULE_compRootBinaryFormula;
        this.lFormula = null; // FormulaContext
        this.rFormula = null; // FormulaContext
    }

	binaryOperator() {
	    return this.getTypedRuleContext(BinaryOperatorContext,0);
	};

	formula = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(FormulaContext);
	    } else {
	        return this.getTypedRuleContext(FormulaContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof NaturalDeductionListener ) {
	        listener.enterCompRootBinaryFormula(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof NaturalDeductionListener ) {
	        listener.exitCompRootBinaryFormula(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof NaturalDeductionVisitor ) {
	        return visitor.visitCompRootBinaryFormula(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class CompBinaryFormulaContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = NaturalDeductionParser.RULE_compBinaryFormula;
        this.lParen = null; // Token
        this.lFormula = null; // FormulaContext
        this.rFormula = null; // FormulaContext
        this.rParen = null; // Token
    }

	binaryOperator() {
	    return this.getTypedRuleContext(BinaryOperatorContext,0);
	};

	formula = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(FormulaContext);
	    } else {
	        return this.getTypedRuleContext(FormulaContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof NaturalDeductionListener ) {
	        listener.enterCompBinaryFormula(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof NaturalDeductionListener ) {
	        listener.exitCompBinaryFormula(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof NaturalDeductionVisitor ) {
	        return visitor.visitCompBinaryFormula(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class CompUnaryFormulaContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = NaturalDeductionParser.RULE_compUnaryFormula;
        this.operator = null; // Token
    }

	formula() {
	    return this.getTypedRuleContext(FormulaContext,0);
	};

	NEGATION() {
	    return this.getToken(NaturalDeductionParser.NEGATION, 0);
	};

	enterRule(listener) {
	    if(listener instanceof NaturalDeductionListener ) {
	        listener.enterCompUnaryFormula(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof NaturalDeductionListener ) {
	        listener.exitCompUnaryFormula(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof NaturalDeductionVisitor ) {
	        return visitor.visitCompUnaryFormula(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class BinaryOperatorContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = NaturalDeductionParser.RULE_binaryOperator;
        this.operator = null; // Token
    }

	CONDITIONAL() {
	    return this.getToken(NaturalDeductionParser.CONDITIONAL, 0);
	};

	DISJUNCTION() {
	    return this.getToken(NaturalDeductionParser.DISJUNCTION, 0);
	};

	CONJUNCTION() {
	    return this.getToken(NaturalDeductionParser.CONJUNCTION, 0);
	};

	BICONDITIONAL() {
	    return this.getToken(NaturalDeductionParser.BICONDITIONAL, 0);
	};

	enterRule(listener) {
	    if(listener instanceof NaturalDeductionListener ) {
	        listener.enterBinaryOperator(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof NaturalDeductionListener ) {
	        listener.exitBinaryOperator(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof NaturalDeductionVisitor ) {
	        return visitor.visitBinaryOperator(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class QuantFormulaContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = NaturalDeductionParser.RULE_quantFormula;
    }

	uniFormula() {
	    return this.getTypedRuleContext(UniFormulaContext,0);
	};

	exiFormula() {
	    return this.getTypedRuleContext(ExiFormulaContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof NaturalDeductionListener ) {
	        listener.enterQuantFormula(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof NaturalDeductionListener ) {
	        listener.exitQuantFormula(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof NaturalDeductionVisitor ) {
	        return visitor.visitQuantFormula(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class UniFormulaContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = NaturalDeductionParser.RULE_uniFormula;
        this.lParen = null; // Token
        this.indVar = null; // Token
        this.rParen = null; // Token
    }

	formula() {
	    return this.getTypedRuleContext(FormulaContext,0);
	};

	IND_VAR() {
	    return this.getToken(NaturalDeductionParser.IND_VAR, 0);
	};

	enterRule(listener) {
	    if(listener instanceof NaturalDeductionListener ) {
	        listener.enterUniFormula(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof NaturalDeductionListener ) {
	        listener.exitUniFormula(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof NaturalDeductionVisitor ) {
	        return visitor.visitUniFormula(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ExiFormulaContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = NaturalDeductionParser.RULE_exiFormula;
        this.lBracket = null; // Token
        this.indVar = null; // Token
        this.rBracket = null; // Token
    }

	formula() {
	    return this.getTypedRuleContext(FormulaContext,0);
	};

	IND_VAR() {
	    return this.getToken(NaturalDeductionParser.IND_VAR, 0);
	};

	enterRule(listener) {
	    if(listener instanceof NaturalDeductionListener ) {
	        listener.enterExiFormula(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof NaturalDeductionListener ) {
	        listener.exitExiFormula(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof NaturalDeductionVisitor ) {
	        return visitor.visitExiFormula(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class AtomicFormulaContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = NaturalDeductionParser.RULE_atomicFormula;
        this.predVar = null; // Token
    }

	RULE_PREMISE() {
	    return this.getToken(NaturalDeductionParser.RULE_PREMISE, 0);
	};

	RULE_THEOREM() {
	    return this.getToken(NaturalDeductionParser.RULE_THEOREM, 0);
	};

	RULE_EXPLOSION() {
	    return this.getToken(NaturalDeductionParser.RULE_EXPLOSION, 0);
	};

	PRED_VAR() {
	    return this.getToken(NaturalDeductionParser.PRED_VAR, 0);
	};

	terms() {
	    return this.getTypedRuleContext(TermsContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof NaturalDeductionListener ) {
	        listener.enterAtomicFormula(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof NaturalDeductionListener ) {
	        listener.exitAtomicFormula(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof NaturalDeductionVisitor ) {
	        return visitor.visitAtomicFormula(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class TermsContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = NaturalDeductionParser.RULE_terms;
        this._IND_VAR = null; // Token
        this.indVars = []; // of Tokens
        this.lParen = null; // Token
        this.rParen = null; // Token
    }

	IND_VAR = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(NaturalDeductionParser.IND_VAR);
	    } else {
	        return this.getToken(NaturalDeductionParser.IND_VAR, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof NaturalDeductionListener ) {
	        listener.enterTerms(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof NaturalDeductionListener ) {
	        listener.exitTerms(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof NaturalDeductionVisitor ) {
	        return visitor.visitTerms(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}




NaturalDeductionParser.StartContext = StartContext; 
NaturalDeductionParser.TheoremImportContext = TheoremImportContext; 
NaturalDeductionParser.SubstitutionContext = SubstitutionContext; 
NaturalDeductionParser.SpecContext = SpecContext; 
NaturalDeductionParser.DeductionContext = DeductionContext; 
NaturalDeductionParser.LineContext = LineContext; 
NaturalDeductionParser.RuleOfInferenceContext = RuleOfInferenceContext; 
NaturalDeductionParser.RuleDependenciesContext = RuleDependenciesContext; 
NaturalDeductionParser.RootFormulaContext = RootFormulaContext; 
NaturalDeductionParser.FormulaContext = FormulaContext; 
NaturalDeductionParser.CompRootFormulaContext = CompRootFormulaContext; 
NaturalDeductionParser.CompFormulaContext = CompFormulaContext; 
NaturalDeductionParser.CompRootBinaryFormulaContext = CompRootBinaryFormulaContext; 
NaturalDeductionParser.CompBinaryFormulaContext = CompBinaryFormulaContext; 
NaturalDeductionParser.CompUnaryFormulaContext = CompUnaryFormulaContext; 
NaturalDeductionParser.BinaryOperatorContext = BinaryOperatorContext; 
NaturalDeductionParser.QuantFormulaContext = QuantFormulaContext; 
NaturalDeductionParser.UniFormulaContext = UniFormulaContext; 
NaturalDeductionParser.ExiFormulaContext = ExiFormulaContext; 
NaturalDeductionParser.AtomicFormulaContext = AtomicFormulaContext; 
NaturalDeductionParser.TermsContext = TermsContext; 
