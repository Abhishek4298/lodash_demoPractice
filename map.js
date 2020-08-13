const _ = require('lodash');

let users = [
  { 'name': 'Abhi',   'age': 15 },
  { 'name': 'dharmik', 'age': 14 },
  { 'name': 'Bharat',   'age': 53 },
	{ 'name': 'chatoor', 'age': 22 },
];

const newData = _.map(users,(Element)=>{
	return Element;	
	// return Element.age;	

})
console.log("Map data is:::",newData);

