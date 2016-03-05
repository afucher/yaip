var IniFileGrammarListener=require("../parser/IniFileGrammarListener");

function BasicIniFileListener() {
   IniFileGrammarListener.IniFileGrammarListener.call(this); // inherit default listener
   return this;
};

BasicIniFileListener.prototype = Object.create(IniFileGrammarListener.IniFileGrammarListener.prototype);

BasicIniFileListener.prototype.constructor = BasicIniFileListener;
//create method for get result from listener
BasicIniFileListener.prototype.getResult = function() {};

exports.BasicIniFileListener = BasicIniFileListener;
