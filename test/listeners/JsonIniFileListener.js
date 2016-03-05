var expect = require('chai').expect;
var assert = require("assert");
var sinon = require('sinon');

describe("A Json generator", function() {
  var IniFileGrammarListener= require("../../listeners/JsonIniFileListener");
  var listener = new JsonIniFileListener();

  it("should has 'getResult' method", function() {
    expect(JsonIniFileListener).to.respondTo('getResult');
  });
  it("should return an empty object", function() {
    expect(listener.getResult()).to.be.an('object').and.to.be.empty;
  });
  it("should return a simple object", function() {
    var input = "[section1]\nkey=value\n";
    var parser = require('../../parser')
    parser.init(input);
    parser.walk(listener);
    var result = listener.getResult();
    expect(result).to.have.property('section1');
    expect(result).to.have.deep.property('section1.key','value');
  });
});
