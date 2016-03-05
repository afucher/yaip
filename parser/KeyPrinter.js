var IniFileGrammarListener=require("./IniFileGrammarListener");

KeyPrinter = function() {
	 IniFileGrammarListener.IniFileGrammarListener.call(this); // inherit default listener
	 return this;
};

KeyPrinter.prototype = Object.create(IniFileGrammarListener.IniFileGrammarListener.prototype);
KeyPrinter.prototype.constructor = KeyPrinter;

 KeyPrinter.prototype.exitKey = function(ctx) {
	console.log(ctx.getText());
};

exports.KeyPrinter = KeyPrinter;
