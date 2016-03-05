# Yes, another ini parser!

An ANTLR parser for ini files

## Instalation
```js
npm install yaip --save
```

## Usage
```js
var yaip = require('yaip');
yaip.parse(myInput);
var json_ini = yaip.toJson();
```

To more see the [examples](examples).

## Test
```js
npm test

//OR

npm run coverage

```

## Build Parser
This parser is based in [ANTLR](http://www.antlr.org/), so it has his own [Grammar](parser/IniFileGrammar.g4). If you want to change the grammar, you need to build again the parser files.
To do this just run this:
```js
npm run build:test
```
This will re-build the parser and run test to check.
