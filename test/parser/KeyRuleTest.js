var antlr4=require("antlr4");
var IniFileGrammarLexer=require("../../parser/IniFileGrammarLexer");
var IniFileGrammarParser=require("../../parser/IniFileGrammarParser");
var assert = require('assert');

var IniFileGrammarListener= require("../../parser/IniFileGrammarListener");
var listener = new IniFileGrammarListener.IniFileGrammarListener();
var spy;

var expect = require('chai').expect;
var assert = require("assert");
var sinon = require('sinon');

describe("Key parser test", function() {
  before(function(){
    spy = sinon.spy(listener, "enterValue");
  });
  beforeEach(function(){
    spy.reset();
  })
  it("should get value if is just a number", function() {
    var input = "key=2";
    var chars = new antlr4.InputStream(input);
    var lexer = new IniFileGrammarLexer.IniFileGrammarLexer(chars);
    var tokens  = new antlr4.CommonTokenStream(lexer);
    var parser = new IniFileGrammarParser.IniFileGrammarParser(tokens);
    parser.buildParseTrees = true;
    var tree = parser.key_value();
    antlr4.tree.ParseTreeWalker.DEFAULT.walk(listener, tree);
    assert(spy.calledOnce,'Should be called once');
    assert.strictEqual(spy.getCall(0).args[0].getText(),'2');
  });
  it("should accept '/' in key value", function() {
    var input = "key=Test/test";
    var chars = new antlr4.InputStream(input);
    var lexer = new IniFileGrammarLexer.IniFileGrammarLexer(chars);
    var tokens  = new antlr4.CommonTokenStream(lexer);
    var parser = new IniFileGrammarParser.IniFileGrammarParser(tokens);
    parser.buildParseTrees = true;
    var tree = parser.key_value();
    antlr4.tree.ParseTreeWalker.DEFAULT.walk(listener, tree);
    assert(spy.calledOnce,'Should be called once');
    assert.strictEqual(spy.getCall(0).args[0].getText(),'Test/test');
  });
  it("should accept '\\' in key value", function() {
    var input = "key=Test\\Test";
    var chars = new antlr4.InputStream(input);
    var lexer = new IniFileGrammarLexer.IniFileGrammarLexer(chars);
    var tokens  = new antlr4.CommonTokenStream(lexer);
    var parser = new IniFileGrammarParser.IniFileGrammarParser(tokens);
    parser.buildParseTrees = true;
    var tree = parser.key_value();
    antlr4.tree.ParseTreeWalker.DEFAULT.walk(listener, tree);
    assert(spy.calledOnce,'Should be called once');
    assert.strictEqual(spy.getCall(0).args[0].getText(),'Test\\Test');
  });
  it("should accept ':' in key value", function() {
    var input = "key=Test:Test";
    var chars = new antlr4.InputStream(input);
    var lexer = new IniFileGrammarLexer.IniFileGrammarLexer(chars);
    var tokens  = new antlr4.CommonTokenStream(lexer);
    var parser = new IniFileGrammarParser.IniFileGrammarParser(tokens);
    parser.buildParseTrees = true;
    var tree = parser.key_value();
    antlr4.tree.ParseTreeWalker.DEFAULT.walk(listener, tree);
    assert(spy.calledOnce,'Should be called once');
    assert.strictEqual(spy.getCall(0).args[0].getText(),'Test:Test');
  });
  it("should accept '*' in key value", function() {
    var input = "key=Test*Test";
    var chars = new antlr4.InputStream(input);
    var lexer = new IniFileGrammarLexer.IniFileGrammarLexer(chars);
    var tokens  = new antlr4.CommonTokenStream(lexer);
    var parser = new IniFileGrammarParser.IniFileGrammarParser(tokens);
    parser.buildParseTrees = true;
    var tree = parser.key_value();
    antlr4.tree.ParseTreeWalker.DEFAULT.walk(listener, tree);
    assert(spy.calledOnce,'Should be called once');
    assert.strictEqual(spy.getCall(0).args[0].getText(),'Test*Test');
  });
  it("should accept '@' in key value", function() {
    var input = "key=Test@Test";
    var chars = new antlr4.InputStream(input);
    var lexer = new IniFileGrammarLexer.IniFileGrammarLexer(chars);
    var tokens  = new antlr4.CommonTokenStream(lexer);
    var parser = new IniFileGrammarParser.IniFileGrammarParser(tokens);
    parser.buildParseTrees = true;
    var tree = parser.key_value();
    antlr4.tree.ParseTreeWalker.DEFAULT.walk(listener, tree);
    assert(spy.calledOnce,'Should be called once');
    assert.strictEqual(spy.getCall(0).args[0].getText(),'Test@Test');
  });
  it("should accept '.' in key value", function() {
    var input = "key=Test.Test";
    var chars = new antlr4.InputStream(input);
    var lexer = new IniFileGrammarLexer.IniFileGrammarLexer(chars);
    var tokens  = new antlr4.CommonTokenStream(lexer);
    var parser = new IniFileGrammarParser.IniFileGrammarParser(tokens);
    parser.buildParseTrees = true;
    var tree = parser.key_value();
    antlr4.tree.ParseTreeWalker.DEFAULT.walk(listener, tree);
    assert(spy.calledOnce,'Should be called once');
    assert.strictEqual(spy.getCall(0).args[0].getText(),'Test.Test');
  });
  it("should accept ',' in key value", function() {
    var input = "key=Test,Test";
    var chars = new antlr4.InputStream(input);
    var lexer = new IniFileGrammarLexer.IniFileGrammarLexer(chars);
    var tokens  = new antlr4.CommonTokenStream(lexer);
    var parser = new IniFileGrammarParser.IniFileGrammarParser(tokens);
    parser.buildParseTrees = true;
    var tree = parser.key_value();
    antlr4.tree.ParseTreeWalker.DEFAULT.walk(listener, tree);
    assert(spy.calledOnce,'Should be called once');
    assert.strictEqual(spy.getCall(0).args[0].getText(),'Test,Test');
  });
  it("should accept ' ' in key value", function() {
    var input = "key=Test Test";
    var chars = new antlr4.InputStream(input);
    var lexer = new IniFileGrammarLexer.IniFileGrammarLexer(chars);
    var tokens  = new antlr4.CommonTokenStream(lexer);
    var parser = new IniFileGrammarParser.IniFileGrammarParser(tokens);
    parser.buildParseTrees = true;
    var tree = parser.key_value();
    antlr4.tree.ParseTreeWalker.DEFAULT.walk(listener, tree);
    assert(spy.calledOnce,'Should be called once');
    assert.strictEqual(spy.getCall(0).args[0].getText(),'Test Test');
  });
});
