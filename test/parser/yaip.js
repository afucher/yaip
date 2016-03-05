var expect = require('chai').expect;
describe("yaip", function() {
  var yaip = require("../../.");
  it("should has 'parse' method", function() {
    expect(yaip).to.respondTo('parse');
  });
  it("should has 'walk' method", function() {
    expect(yaip).to.respondTo('walk');
  });
  it("should has 'toJson' method", function() {
    expect(yaip).to.respondTo('toJson');
  });
  it("should has 'baseListener' attribute", function() {
    expect(yaip).to.property('baseListener');
  });
  it("baseListener should be BasicIniFileListener", function() {
    expect(yaip.baseListener).to.have.property('name','BasicIniFileListener');
  });
});
