var expect = require('chai').expect;
describe("BasicIniFileListener", function() {
  var BasicIniFileListener= require("../../listeners/BasicIniFileListener").BasicIniFileListener;
  it("should has 'enterKey' method", function() {
    expect(BasicIniFileListener).to.respondTo('enterKey');
  });
  it("should has 'exitKey' method", function() {
    expect(BasicIniFileListener).to.respondTo('exitKey');
  });
  it("should has 'enterValue' method", function() {
    expect(BasicIniFileListener).to.respondTo('enterValue');
  });
  it("should has 'exitValue' method", function() {
    expect(BasicIniFileListener).to.respondTo('exitValue');
  });
  it("should has 'enterSection' method", function() {
    expect(BasicIniFileListener).to.respondTo('enterSection');
  });
  it("should has 'exitSection' method", function() {
    expect(BasicIniFileListener).to.respondTo('exitSection');
  });
  it("should has 'getResult' method", function() {
    expect(BasicIniFileListener).to.respondTo('getResult');
  });
})
