// Generated from parser/IniFileGrammar.g4 by ANTLR 4.5.2
// jshint ignore: start
var antlr4 = require('antlr4/index');
var IniFileGrammarListener = require('./IniFileGrammarListener').IniFileGrammarListener;
var grammarFileName = "IniFileGrammar.g4";

var serializedATN = ["\u0003\u0430\ud6d1\u8206\uad2d\u4417\uaef1\u8d80\uaadd",
    "\u0003\b8\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004\u0004\t\u0004",
    "\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t\u0007\u0004\b",
    "\t\b\u0004\t\t\t\u0004\n\t\n\u0003\u0002\u0003\u0002\u0007\u0002\u0017",
    "\n\u0002\f\u0002\u000e\u0002\u001a\u000b\u0002\u0003\u0002\u0003\u0002",
    "\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0004\u0003\u0004\u0003\u0004",
    "\u0003\u0004\u0003\u0005\u0003\u0005\u0003\u0006\u0007\u0006(\n\u0006",
    "\f\u0006\u000e\u0006+\u000b\u0006\u0003\u0007\u0003\u0007\u0003\u0007",
    "\u0005\u00070\n\u0007\u0003\b\u0003\b\u0003\t\u0003\t\u0003\n\u0003",
    "\n\u0003\n\u0002\u0002\u000b\u0002\u0004\u0006\b\n\f\u000e\u0010\u0012",
    "\u0002\u00022\u0002\u0018\u0003\u0002\u0002\u0002\u0004\u001d\u0003",
    "\u0002\u0002\u0002\u0006 \u0003\u0002\u0002\u0002\b$\u0003\u0002\u0002",
    "\u0002\n)\u0003\u0002\u0002\u0002\f,\u0003\u0002\u0002\u0002\u000e1",
    "\u0003\u0002\u0002\u0002\u00103\u0003\u0002\u0002\u0002\u00125\u0003",
    "\u0002\u0002\u0002\u0014\u0017\u0007\u0007\u0002\u0002\u0015\u0017\u0005",
    "\u0004\u0003\u0002\u0016\u0014\u0003\u0002\u0002\u0002\u0016\u0015\u0003",
    "\u0002\u0002\u0002\u0017\u001a\u0003\u0002\u0002\u0002\u0018\u0016\u0003",
    "\u0002\u0002\u0002\u0018\u0019\u0003\u0002\u0002\u0002\u0019\u001b\u0003",
    "\u0002\u0002\u0002\u001a\u0018\u0003\u0002\u0002\u0002\u001b\u001c\u0007",
    "\u0002\u0002\u0003\u001c\u0003\u0003\u0002\u0002\u0002\u001d\u001e\u0005",
    "\u0006\u0004\u0002\u001e\u001f\u0005\n\u0006\u0002\u001f\u0005\u0003",
    "\u0002\u0002\u0002 !\u0007\u0005\u0002\u0002!\"\u0005\b\u0005\u0002",
    "\"#\u0007\u0006\u0002\u0002#\u0007\u0003\u0002\u0002\u0002$%\u0005\u0012",
    "\n\u0002%\t\u0003\u0002\u0002\u0002&(\u0005\f\u0007\u0002\'&\u0003\u0002",
    "\u0002\u0002(+\u0003\u0002\u0002\u0002)\'\u0003\u0002\u0002\u0002)*",
    "\u0003\u0002\u0002\u0002*\u000b\u0003\u0002\u0002\u0002+)\u0003\u0002",
    "\u0002\u0002,-\u0005\u000e\b\u0002-/\u0007\u0004\u0002\u0002.0\u0005",
    "\u0010\t\u0002/.\u0003\u0002\u0002\u0002/0\u0003\u0002\u0002\u00020",
    "\r\u0003\u0002\u0002\u000212\u0005\u0012\n\u00022\u000f\u0003\u0002",
    "\u0002\u000234\u0005\u0012\n\u00024\u0011\u0003\u0002\u0002\u000256",
    "\u0007\u0003\u0002\u00026\u0013\u0003\u0002\u0002\u0002\u0006\u0016",
    "\u0018)/"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

var sharedContextCache = new antlr4.PredictionContextCache();

var literalNames = [ null, null, "'='", "'['", "']'" ];

var symbolicNames = [ null, "TEXT", "EQUALS", "LBRACK", "RBRACK", "LINE_COMMENT", 
                      "WS" ];

var ruleNames =  [ "ini", "section", "section_header", "section_header_title", 
                   "key_values", "key_value", "key", "value", "text" ];

function IniFileGrammarParser (input) {
	antlr4.Parser.call(this, input);
    this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
    this.ruleNames = ruleNames;
    this.literalNames = literalNames;
    this.symbolicNames = symbolicNames;
    return this;
}

IniFileGrammarParser.prototype = Object.create(antlr4.Parser.prototype);
IniFileGrammarParser.prototype.constructor = IniFileGrammarParser;

Object.defineProperty(IniFileGrammarParser.prototype, "atn", {
	get : function() {
		return atn;
	}
});

IniFileGrammarParser.EOF = antlr4.Token.EOF;
IniFileGrammarParser.TEXT = 1;
IniFileGrammarParser.EQUALS = 2;
IniFileGrammarParser.LBRACK = 3;
IniFileGrammarParser.RBRACK = 4;
IniFileGrammarParser.LINE_COMMENT = 5;
IniFileGrammarParser.WS = 6;

IniFileGrammarParser.RULE_ini = 0;
IniFileGrammarParser.RULE_section = 1;
IniFileGrammarParser.RULE_section_header = 2;
IniFileGrammarParser.RULE_section_header_title = 3;
IniFileGrammarParser.RULE_key_values = 4;
IniFileGrammarParser.RULE_key_value = 5;
IniFileGrammarParser.RULE_key = 6;
IniFileGrammarParser.RULE_value = 7;
IniFileGrammarParser.RULE_text = 8;

function IniContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = IniFileGrammarParser.RULE_ini;
    return this;
}

IniContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
IniContext.prototype.constructor = IniContext;

IniContext.prototype.EOF = function() {
    return this.getToken(IniFileGrammarParser.EOF, 0);
};

IniContext.prototype.LINE_COMMENT = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(IniFileGrammarParser.LINE_COMMENT);
    } else {
        return this.getToken(IniFileGrammarParser.LINE_COMMENT, i);
    }
};


IniContext.prototype.section = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(SectionContext);
    } else {
        return this.getTypedRuleContext(SectionContext,i);
    }
};

IniContext.prototype.enterRule = function(listener) {
    if(listener instanceof IniFileGrammarListener ) {
        listener.enterIni(this);
	}
};

IniContext.prototype.exitRule = function(listener) {
    if(listener instanceof IniFileGrammarListener ) {
        listener.exitIni(this);
	}
};




IniFileGrammarParser.IniContext = IniContext;

IniFileGrammarParser.prototype.ini = function() {

    var localctx = new IniContext(this, this._ctx, this.state);
    this.enterRule(localctx, 0, IniFileGrammarParser.RULE_ini);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 22;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===IniFileGrammarParser.LBRACK || _la===IniFileGrammarParser.LINE_COMMENT) {
            this.state = 20;
            switch(this._input.LA(1)) {
            case IniFileGrammarParser.LINE_COMMENT:
                this.state = 18;
                this.match(IniFileGrammarParser.LINE_COMMENT);
                break;
            case IniFileGrammarParser.LBRACK:
                this.state = 19;
                this.section();
                break;
            default:
                throw new antlr4.error.NoViableAltException(this);
            }
            this.state = 24;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 25;
        this.match(IniFileGrammarParser.EOF);
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
};

function SectionContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = IniFileGrammarParser.RULE_section;
    return this;
}

SectionContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
SectionContext.prototype.constructor = SectionContext;

SectionContext.prototype.section_header = function() {
    return this.getTypedRuleContext(Section_headerContext,0);
};

SectionContext.prototype.key_values = function() {
    return this.getTypedRuleContext(Key_valuesContext,0);
};

SectionContext.prototype.enterRule = function(listener) {
    if(listener instanceof IniFileGrammarListener ) {
        listener.enterSection(this);
	}
};

SectionContext.prototype.exitRule = function(listener) {
    if(listener instanceof IniFileGrammarListener ) {
        listener.exitSection(this);
	}
};




IniFileGrammarParser.SectionContext = SectionContext;

IniFileGrammarParser.prototype.section = function() {

    var localctx = new SectionContext(this, this._ctx, this.state);
    this.enterRule(localctx, 2, IniFileGrammarParser.RULE_section);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 27;
        this.section_header();
        this.state = 28;
        this.key_values();
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
};

function Section_headerContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = IniFileGrammarParser.RULE_section_header;
    return this;
}

Section_headerContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Section_headerContext.prototype.constructor = Section_headerContext;

Section_headerContext.prototype.LBRACK = function() {
    return this.getToken(IniFileGrammarParser.LBRACK, 0);
};

Section_headerContext.prototype.section_header_title = function() {
    return this.getTypedRuleContext(Section_header_titleContext,0);
};

Section_headerContext.prototype.RBRACK = function() {
    return this.getToken(IniFileGrammarParser.RBRACK, 0);
};

Section_headerContext.prototype.enterRule = function(listener) {
    if(listener instanceof IniFileGrammarListener ) {
        listener.enterSection_header(this);
	}
};

Section_headerContext.prototype.exitRule = function(listener) {
    if(listener instanceof IniFileGrammarListener ) {
        listener.exitSection_header(this);
	}
};




IniFileGrammarParser.Section_headerContext = Section_headerContext;

IniFileGrammarParser.prototype.section_header = function() {

    var localctx = new Section_headerContext(this, this._ctx, this.state);
    this.enterRule(localctx, 4, IniFileGrammarParser.RULE_section_header);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 30;
        this.match(IniFileGrammarParser.LBRACK);
        this.state = 31;
        this.section_header_title();
        this.state = 32;
        this.match(IniFileGrammarParser.RBRACK);
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
};

function Section_header_titleContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = IniFileGrammarParser.RULE_section_header_title;
    return this;
}

Section_header_titleContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Section_header_titleContext.prototype.constructor = Section_header_titleContext;

Section_header_titleContext.prototype.text = function() {
    return this.getTypedRuleContext(TextContext,0);
};

Section_header_titleContext.prototype.enterRule = function(listener) {
    if(listener instanceof IniFileGrammarListener ) {
        listener.enterSection_header_title(this);
	}
};

Section_header_titleContext.prototype.exitRule = function(listener) {
    if(listener instanceof IniFileGrammarListener ) {
        listener.exitSection_header_title(this);
	}
};




IniFileGrammarParser.Section_header_titleContext = Section_header_titleContext;

IniFileGrammarParser.prototype.section_header_title = function() {

    var localctx = new Section_header_titleContext(this, this._ctx, this.state);
    this.enterRule(localctx, 6, IniFileGrammarParser.RULE_section_header_title);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 34;
        this.text();
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
};

function Key_valuesContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = IniFileGrammarParser.RULE_key_values;
    return this;
}

Key_valuesContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Key_valuesContext.prototype.constructor = Key_valuesContext;

Key_valuesContext.prototype.key_value = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(Key_valueContext);
    } else {
        return this.getTypedRuleContext(Key_valueContext,i);
    }
};

Key_valuesContext.prototype.enterRule = function(listener) {
    if(listener instanceof IniFileGrammarListener ) {
        listener.enterKey_values(this);
	}
};

Key_valuesContext.prototype.exitRule = function(listener) {
    if(listener instanceof IniFileGrammarListener ) {
        listener.exitKey_values(this);
	}
};




IniFileGrammarParser.Key_valuesContext = Key_valuesContext;

IniFileGrammarParser.prototype.key_values = function() {

    var localctx = new Key_valuesContext(this, this._ctx, this.state);
    this.enterRule(localctx, 8, IniFileGrammarParser.RULE_key_values);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 39;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===IniFileGrammarParser.TEXT) {
            this.state = 36;
            this.key_value();
            this.state = 41;
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
};

function Key_valueContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = IniFileGrammarParser.RULE_key_value;
    return this;
}

Key_valueContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Key_valueContext.prototype.constructor = Key_valueContext;

Key_valueContext.prototype.key = function() {
    return this.getTypedRuleContext(KeyContext,0);
};

Key_valueContext.prototype.EQUALS = function() {
    return this.getToken(IniFileGrammarParser.EQUALS, 0);
};

Key_valueContext.prototype.value = function() {
    return this.getTypedRuleContext(ValueContext,0);
};

Key_valueContext.prototype.enterRule = function(listener) {
    if(listener instanceof IniFileGrammarListener ) {
        listener.enterKey_value(this);
	}
};

Key_valueContext.prototype.exitRule = function(listener) {
    if(listener instanceof IniFileGrammarListener ) {
        listener.exitKey_value(this);
	}
};




IniFileGrammarParser.Key_valueContext = Key_valueContext;

IniFileGrammarParser.prototype.key_value = function() {

    var localctx = new Key_valueContext(this, this._ctx, this.state);
    this.enterRule(localctx, 10, IniFileGrammarParser.RULE_key_value);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 42;
        this.key();
        this.state = 43;
        this.match(IniFileGrammarParser.EQUALS);
        this.state = 45;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,3,this._ctx);
        if(la_===1) {
            this.state = 44;
            this.value();

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
};

function KeyContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = IniFileGrammarParser.RULE_key;
    return this;
}

KeyContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
KeyContext.prototype.constructor = KeyContext;

KeyContext.prototype.text = function() {
    return this.getTypedRuleContext(TextContext,0);
};

KeyContext.prototype.enterRule = function(listener) {
    if(listener instanceof IniFileGrammarListener ) {
        listener.enterKey(this);
	}
};

KeyContext.prototype.exitRule = function(listener) {
    if(listener instanceof IniFileGrammarListener ) {
        listener.exitKey(this);
	}
};




IniFileGrammarParser.KeyContext = KeyContext;

IniFileGrammarParser.prototype.key = function() {

    var localctx = new KeyContext(this, this._ctx, this.state);
    this.enterRule(localctx, 12, IniFileGrammarParser.RULE_key);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 47;
        this.text();
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
};

function ValueContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = IniFileGrammarParser.RULE_value;
    return this;
}

ValueContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ValueContext.prototype.constructor = ValueContext;

ValueContext.prototype.text = function() {
    return this.getTypedRuleContext(TextContext,0);
};

ValueContext.prototype.enterRule = function(listener) {
    if(listener instanceof IniFileGrammarListener ) {
        listener.enterValue(this);
	}
};

ValueContext.prototype.exitRule = function(listener) {
    if(listener instanceof IniFileGrammarListener ) {
        listener.exitValue(this);
	}
};




IniFileGrammarParser.ValueContext = ValueContext;

IniFileGrammarParser.prototype.value = function() {

    var localctx = new ValueContext(this, this._ctx, this.state);
    this.enterRule(localctx, 14, IniFileGrammarParser.RULE_value);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 49;
        this.text();
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
};

function TextContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = IniFileGrammarParser.RULE_text;
    return this;
}

TextContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
TextContext.prototype.constructor = TextContext;

TextContext.prototype.TEXT = function() {
    return this.getToken(IniFileGrammarParser.TEXT, 0);
};

TextContext.prototype.enterRule = function(listener) {
    if(listener instanceof IniFileGrammarListener ) {
        listener.enterText(this);
	}
};

TextContext.prototype.exitRule = function(listener) {
    if(listener instanceof IniFileGrammarListener ) {
        listener.exitText(this);
	}
};




IniFileGrammarParser.TextContext = TextContext;

IniFileGrammarParser.prototype.text = function() {

    var localctx = new TextContext(this, this._ctx, this.state);
    this.enterRule(localctx, 16, IniFileGrammarParser.RULE_text);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 51;
        this.match(IniFileGrammarParser.TEXT);
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
};


exports.IniFileGrammarParser = IniFileGrammarParser;
