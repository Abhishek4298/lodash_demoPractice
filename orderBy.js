const _ = require('lodash');

let users = [
  { 'name': 'Abhi',   'age': 15 },
  { 'name': 'dharmik', 'age': 14 },
  { 'name': 'Bharat',   'age': 53 },
  { 'name': 'chatoor', 'age': 22 }
];

//assesnding order age 
console.log("decending order by the age :::",_.orderBy(users, ['age'], ['desc']));

//assending order name
console.log("assending order by the name:::",_.orderBy(users, ['name'], ['asc']));

