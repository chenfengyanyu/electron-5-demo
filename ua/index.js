// https://github.com/faisalman/ua-parser-js
const UAParser = require('ua-parser-js')

let parser = new UAParser();
console.log(parser.getResult());