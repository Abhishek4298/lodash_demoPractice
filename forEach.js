const _ = require('lodash');

let carArray = ["Saab", "Volvo", "BMW"];
let carObject = {
	name: "mercedes",
	color: "black",
	type: {
		sports: "yes",
		modified: "DC"
	}
}

//  =>  forEach method ittrate with array values and object 

	// Object 
_.forEach(carArray, (value) => {
	// console.log("forEach with array ::: ", value);
});

	// Array
_.forEach(carObject, (value, key) => {
	// console.log("car object inner object value:: ",carObject.type.sports);
	// _.forEach(carObject.type, (value) => {
		// console.log("inner object",value);
	// })
	// console.log("forEach  key ::: ", key);
	// console.log("forEach  value ::: ", value);
});




