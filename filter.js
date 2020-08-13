const _ = require('lodash');

let users = [
  { 'name': 'Abhi',   'age': 15 },
  { 'name': 'dharmik', 'age': 14 },
  { 'name': 'Bharat',   'age': 53 },
	{ 'name': 'chatoor', 'age': 22 },
];

//return age greater then 20
const newFilter = _.filter(users,(elemtent)=>{
		return elemtent.age > 20
});
console.log("New filter data is::",newFilter);
