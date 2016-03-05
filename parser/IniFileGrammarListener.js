// Generated from parser/IniFileGrammar.g4 by ANTLR 4.5.2
// jshint ignore: start
var antlr4 = require('antlr4/index');

// This class defines a complete listener for a parse tree produced by IniFileGrammarParser.
function IniFileGrammarListener() {
	antlr4.tree.ParseTreeListener.call(this);
	return this;
}

IniFileGrammarListener.prototype = Object.create(antlr4.tree.ParseTreeListener.prototype);
IniFileGrammarListener.prototype.constructor = IniFileGrammarListener;

// Enter a parse tree produced by IniFileGrammarParser#ini.
IniFileGrammarListener.prototype.enterIni = function(ctx) {
};

// Exit a parse tree produced by IniFileGrammarParser#ini.
IniFileGrammarListener.prototype.exitIni = function(ctx) {
};


// Enter a parse tree produced by IniFileGrammarParser#section.
IniFileGrammarListener.prototype.enterSection = function(ctx) {
};

// Exit a parse tree produced by IniFileGrammarParser#section.
IniFileGrammarListener.prototype.exitSection = function(ctx) {
};


// Enter a parse tree produced by IniFileGrammarParser#section_header.
IniFileGrammarListener.prototype.enterSection_header = function(ctx) {
};

// Exit a parse tree produced by IniFileGrammarParser#section_header.
IniFileGrammarListener.prototype.exitSection_header = function(ctx) {
};


// Enter a parse tree produced by IniFileGrammarParser#section_header_title.
IniFileGrammarListener.prototype.enterSection_header_title = function(ctx) {
};

// Exit a parse tree produced by IniFileGrammarParser#section_header_title.
IniFileGrammarListener.prototype.exitSection_header_title = function(ctx) {
};


// Enter a parse tree produced by IniFileGrammarParser#key_values.
IniFileGrammarListener.prototype.enterKey_values = function(ctx) {
};

// Exit a parse tree produced by IniFileGrammarParser#key_values.
IniFileGrammarListener.prototype.exitKey_values = function(ctx) {
};


// Enter a parse tree produced by IniFileGrammarParser#key_value.
IniFileGrammarListener.prototype.enterKey_value = function(ctx) {
};

// Exit a parse tree produced by IniFileGrammarParser#key_value.
IniFileGrammarListener.prototype.exitKey_value = function(ctx) {
};


// Enter a parse tree produced by IniFileGrammarParser#key.
IniFileGrammarListener.prototype.enterKey = function(ctx) {
};

// Exit a parse tree produced by IniFileGrammarParser#key.
IniFileGrammarListener.prototype.exitKey = function(ctx) {
};


// Enter a parse tree produced by IniFileGrammarParser#value.
IniFileGrammarListener.prototype.enterValue = function(ctx) {
};

// Exit a parse tree produced by IniFileGrammarParser#value.
IniFileGrammarListener.prototype.exitValue = function(ctx) {
};


// Enter a parse tree produced by IniFileGrammarParser#text.
IniFileGrammarListener.prototype.enterText = function(ctx) {
};

// Exit a parse tree produced by IniFileGrammarParser#text.
IniFileGrammarListener.prototype.exitText = function(ctx) {
};



exports.IniFileGrammarListener = IniFileGrammarListener;