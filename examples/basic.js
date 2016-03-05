var fs = require('fs');
var input = fs.readFileSync(__dirname + '/../test/ini-files/basic.ini','utf-8');

var yaip = require('../');

//Parse the input
yaip.parse(input);

//Get result to Json
var json_ini = yaip.toJson();

console.log(json_ini);
