var expect = require('chai').expect;
describe("IniFileGrammarListener", function() {
  var IniFileGrammarListener= require("../../parser/IniFileGrammarListener").IniFileGrammarListener;
  it("should has 'enterKey' method", function() {
    expect(IniFileGrammarListener).to.respondTo('enterKey');
  });
  it("should has 'exitKey' method", function() {
    expect(IniFileGrammarListener).to.respondTo('exitKey');
  });
  it("should has 'enterValue' method", function() {
    expect(IniFileGrammarListener).to.respondTo('enterValue');
  });
  it("should has 'exitValue' method", function() {
    expect(IniFileGrammarListener).to.respondTo('exitValue');
  });
  it("should has 'enterSection' method", function() {
    expect(IniFileGrammarListener).to.respondTo('enterSection');
  });
  it("should has 'exitSection' method", function() {
    expect(IniFileGrammarListener).to.respondTo('exitSection');
  });
})
