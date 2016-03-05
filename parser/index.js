var antlr4=require("antlr4");
var IniFileGrammarLexer=require("./IniFileGrammarLexer");
var IniFileGrammarParser=require("./IniFileGrammarParser");
//var PropertyFileListener=require("./PropertyFileListener");
var BasicIniFileListener=require("../listeners/BasicIniFileListener");
var JsonIniFileListener=require("../listeners/JsonIniFileListener");
var KeyPrinter=require("./KeyPrinter");
var assert = require('assert');

var yaip = {};

yaip.baseListener = BasicIniFileListener.BasicIniFileListener;

yaip.parse = function( input )
{
  var chars = new antlr4.InputStream(input);
  var lexer = new IniFileGrammarLexer.IniFileGrammarLexer(chars);
  var tokens  = new antlr4.CommonTokenStream(lexer);
  var parser = new IniFileGrammarParser.IniFileGrammarParser(tokens);
  parser.buildParseTrees = true;
  this.tree = parser.ini(); //m�todo � o nome da regra a ser executada.
};

yaip.walk = function( listener ){
  //var listener = new KeyPrinter.KeyPrinter();
  assert.ok( listener instanceof BasicIniFileListener.BasicIniFileListener, "Method walk should be called with a listener, and should be an instance of BasicIniFileListener");
  this.listener = listener;
  antlr4.tree.ParseTreeWalker.DEFAULT.walk(this.listener, this.tree);
}

yaip.toJson = function(){
  var listener = new JsonIniFileListener.JsonIniFileListener();
  this.walk(listener);
  return listener.getResult();
}


module.exports = yaip;
