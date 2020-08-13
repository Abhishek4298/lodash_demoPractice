const _ = require('lodash');

let users = [
  { 'name': 'Abhi',   'age': 15 },
  { 'name': 'dharmik', 'age': 14 },
  { 'name': 'Bharat',   'age': 53 },
	{ 'name': 'chatoor', 'age': 22 },
];

const findData = _.find(users, { 'age': 15});
// console.log("findData is::",findData);

const findSecondData = _.find(users, { 'name': 'dharmik' });
// console.log("findData is::",findSecondData);

// check that length is greater then 5 or not -> return true/false
_.find(users,(element)=>{
	console.log("element is:::",element.name.length > 5);
})

