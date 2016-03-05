var expect = require('chai').expect;
var input = "[section1]\nkey=value\n";
var assert = require("assert");
var sinon = require('sinon');

describe("A Listener walking the tree", function() {
  var BasicIniFileListener= require("../../listeners/BasicIniFileListener");
  var listener = new BasicIniFileListener.BasicIniFileListener();
  var parser = require('../../parser')
  parser.parse(input);
  it("should call 'enterKey' once", function() {
    var spy = sinon.spy(listener, "enterKey");
    parser.walk(listener);
    assert.equal(spy.callCount, 1);
  });
  it("should call 'enterSection' once", function() {
    var spy = sinon.spy(listener, "enterSection");
    parser.walk(listener);
    assert.equal(spy.callCount, 1);
  });
  it("should call 'enterValue' once", function() {
    var spy = sinon.spy(listener, "enterValue");
    parser.walk(listener);
    assert.equal(spy.callCount, 1);
  });
  it("should call 'exitKey' once", function() {
    var spy = sinon.spy(listener, "exitKey");
    parser.walk(listener);
    assert.equal(spy.callCount, 1);
  });
  it("should call 'exitSection' once", function() {
    var spy = sinon.spy(listener, "exitSection");
    parser.walk(listener);
    assert.equal(spy.callCount, 1);
  });
  it("should call 'exitValue' once", function() {
    var spy = sinon.spy(listener, "exitValue");
    parser.walk(listener);
    assert.equal(spy.callCount, 1);
  });
})
