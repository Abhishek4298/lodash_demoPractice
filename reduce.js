const _ = require('lodash');

//_.reduce ::: accept two argument accumulator and current value

//accumulator value :::
//-> That accept the previous answer value 
//-> that default is zero
//-> you can assign it's value at the end, example i have assigned it's value (5) so in the answer it add that value

//current value :::
//-> the current itterated value 

const num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const reduceData = _.reduce(num, (n1, n2) => {
	return n1+ n2;
}, 5);

console.log("Answer of reduce data is:::",reduceData);

