const _ = require('lodash');

let userOne = [
  { 'name': 'Abhi',   'age': 1 },
  { 'name': 'dharmik', 'age': 3 },
 
];
let userSecond = [
  { 'name': 'ram',   'age': 2 },
 	{ 'name': 'ravan', 'age': 4 },
];

const concatData = _.concat(userOne,userSecond);
console.log("concat data is:::",concatData);

