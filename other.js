const _ = require('lodash');

const number = ['one', 'two', 'three']

//_.countBy ::: counting array number
const numCount = _.countBy(number, 'length');
console.log("length(count) of the number ", numCount);

// _.some ::: checks in array if any natch condition return true. 
// _.every ::: checks in array if all are match the condition then only return  true. 

let users = [
	{ 'name': 'Abhi', 'age': 15 },
	{ 'name': 'dharmik', 'age': 14 },
	{ 'name': 'Bharat', 'age': 53 },
	{ 'name': 'chatoor', 'age': 22 },
];

console.log("some::: ", _.some(users, { 'name': 'Abhi', 'age': 15 }));
console.log("every::: ", _.every(users, { 'name': 'Abhi' }));

// _.isArray ::: check that is that array of not 

console.log("check array::: ", _.isArray(number));

// _.random ::: generate random number 

console.log("the random number between 0 to 5 is:::", _.random(0, 5));

//_.prototype.reverse()

const array = [1, 2, 3];
console.log("reverse the number :::", _(array).reverse().value());

//String
const string = "this is PROJECT"
console.log("camelcase :::", _.camelCase(string));
console.log("capitalize :::", _.capitalize(string));
console.log("lowercase :::", _.lowerCase(string));
console.log("Uppercase:::", _.upperCase(string));

const trimDate = '  abc  ';
const trimDataSecond = '-_-xyz-_-';

console.log("trim data is:::",_.trim(trimDate));
console.log("second trim data is:::",_.trim(trimDataSecond,'_-'));



