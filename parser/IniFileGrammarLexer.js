// Generated from parser/IniFileGrammar.g4 by ANTLR 4.5.2
// jshint ignore: start
var antlr4 = require('antlr4/index');


var serializedATN = ["\u0003\u0430\ud6d1\u8206\uad2d\u4417\uaef1\u8d80\uaadd",
    "\u0002\b.\b\u0001\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004\u0004",
    "\t\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t\u0007",
    "\u0003\u0002\u0006\u0002\u0011\n\u0002\r\u0002\u000e\u0002\u0012\u0003",
    "\u0003\u0003\u0003\u0003\u0004\u0003\u0004\u0003\u0005\u0003\u0005\u0003",
    "\u0006\u0003\u0006\u0007\u0006\u001d\n\u0006\f\u0006\u000e\u0006 \u000b",
    "\u0006\u0003\u0006\u0003\u0006\u0003\u0007\u0005\u0007%\n\u0007\u0003",
    "\u0007\u0003\u0007\u0006\u0007)\n\u0007\r\u0007\u000e\u0007*\u0003\u0007",
    "\u0003\u0007\u0002\u0002\b\u0003\u0003\u0005\u0004\u0007\u0005\t\u0006",
    "\u000b\u0007\r\b\u0003\u0002\u0005\n\u0002\"\",,..0<B\\^^aac|\u0004",
    "\u0002\f\f\u000f\u000f\u0004\u0002\u000b\u000b\"\"2\u0002\u0003\u0003",
    "\u0002\u0002\u0002\u0002\u0005\u0003\u0002\u0002\u0002\u0002\u0007\u0003",
    "\u0002\u0002\u0002\u0002\t\u0003\u0002\u0002\u0002\u0002\u000b\u0003",
    "\u0002\u0002\u0002\u0002\r\u0003\u0002\u0002\u0002\u0003\u0010\u0003",
    "\u0002\u0002\u0002\u0005\u0014\u0003\u0002\u0002\u0002\u0007\u0016\u0003",
    "\u0002\u0002\u0002\t\u0018\u0003\u0002\u0002\u0002\u000b\u001a\u0003",
    "\u0002\u0002\u0002\r(\u0003\u0002\u0002\u0002\u000f\u0011\t\u0002\u0002",
    "\u0002\u0010\u000f\u0003\u0002\u0002\u0002\u0011\u0012\u0003\u0002\u0002",
    "\u0002\u0012\u0010\u0003\u0002\u0002\u0002\u0012\u0013\u0003\u0002\u0002",
    "\u0002\u0013\u0004\u0003\u0002\u0002\u0002\u0014\u0015\u0007?\u0002",
    "\u0002\u0015\u0006\u0003\u0002\u0002\u0002\u0016\u0017\u0007]\u0002",
    "\u0002\u0017\b\u0003\u0002\u0002\u0002\u0018\u0019\u0007_\u0002\u0002",
    "\u0019\n\u0003\u0002\u0002\u0002\u001a\u001e\u0007=\u0002\u0002\u001b",
    "\u001d\n\u0003\u0002\u0002\u001c\u001b\u0003\u0002\u0002\u0002\u001d",
    " \u0003\u0002\u0002\u0002\u001e\u001c\u0003\u0002\u0002\u0002\u001e",
    "\u001f\u0003\u0002\u0002\u0002\u001f!\u0003\u0002\u0002\u0002 \u001e",
    "\u0003\u0002\u0002\u0002!\"\b\u0006\u0002\u0002\"\f\u0003\u0002\u0002",
    "\u0002#%\u0007\u000f\u0002\u0002$#\u0003\u0002\u0002\u0002$%\u0003\u0002",
    "\u0002\u0002%&\u0003\u0002\u0002\u0002&)\u0007\f\u0002\u0002\')\t\u0004",
    "\u0002\u0002($\u0003\u0002\u0002\u0002(\'\u0003\u0002\u0002\u0002)*",
    "\u0003\u0002\u0002\u0002*(\u0003\u0002\u0002\u0002*+\u0003\u0002\u0002",
    "\u0002+,\u0003\u0002\u0002\u0002,-\b\u0007\u0003\u0002-\u000e\u0003",
    "\u0002\u0002\u0002\b\u0002\u0012\u001e$(*\u0004\u0002\u0003\u0002\b",
    "\u0002\u0002"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

function IniFileGrammarLexer(input) {
	antlr4.Lexer.call(this, input);
    this._interp = new antlr4.atn.LexerATNSimulator(this, atn, decisionsToDFA, new antlr4.PredictionContextCache());
    return this;
}

IniFileGrammarLexer.prototype = Object.create(antlr4.Lexer.prototype);
IniFileGrammarLexer.prototype.constructor = IniFileGrammarLexer;

IniFileGrammarLexer.EOF = antlr4.Token.EOF;
IniFileGrammarLexer.TEXT = 1;
IniFileGrammarLexer.EQUALS = 2;
IniFileGrammarLexer.LBRACK = 3;
IniFileGrammarLexer.RBRACK = 4;
IniFileGrammarLexer.LINE_COMMENT = 5;
IniFileGrammarLexer.WS = 6;


IniFileGrammarLexer.modeNames = [ "DEFAULT_MODE" ];

IniFileGrammarLexer.literalNames = [ null, null, "'='", "'['", "']'" ];

IniFileGrammarLexer.symbolicNames = [ null, "TEXT", "EQUALS", "LBRACK", 
                                      "RBRACK", "LINE_COMMENT", "WS" ];

IniFileGrammarLexer.ruleNames = [ "TEXT", "EQUALS", "LBRACK", "RBRACK", 
                                  "LINE_COMMENT", "WS" ];

IniFileGrammarLexer.grammarFileName = "IniFileGrammar.g4";



exports.IniFileGrammarLexer = IniFileGrammarLexer;

