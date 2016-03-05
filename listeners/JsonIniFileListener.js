var BasicIniFileListener=require("./BasicIniFileListener");
var last_section;
var last_key;
JsonIniFileListener = function() {
   BasicIniFileListener.BasicIniFileListener.call(this); // inherit default listener
   return this;
};

JsonIniFileListener.prototype = Object.create(BasicIniFileListener.BasicIniFileListener.prototype);
JsonIniFileListener.prototype.constructor = JsonIniFileListener;

JsonIniFileListener.prototype.result = {};
JsonIniFileListener.prototype.getResult = function(){
  return this.result;
};

JsonIniFileListener.prototype.enterSection_header_title = function(ctx) {
  this.result[ctx.getText()] = {};
  last_section = ctx.getText();
};


JsonIniFileListener.prototype.exitKey = function(ctx) {
  this.result[last_section][ctx.getText()] = null;
  last_key = ctx.getText();
};

JsonIniFileListener.prototype.exitValue = function(ctx) {
  this.result[last_section][last_key] = ctx.getText();
};

exports.JsonIniFileListener = JsonIniFileListener;
