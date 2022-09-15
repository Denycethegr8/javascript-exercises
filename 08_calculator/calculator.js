const add = function(...arr) {
  newArr = arr;
  return newArr[0]+newArr[1];
};

const subtract = function(...arr) {
  newArr = arr;
	return Math.abs(newArr[0]-newArr[1]);
};

const sum = function(arr) {
  if(length.arr===0) return 0;
	else return arr.reduce((prev, curr) => prev + curr, 0);
};

const multiply = function(arr) {
  if(length.arr===0) return 0;
  else return arr.reduce((prev, curr) => prev * curr, 1);
};

const power = function(...arr) {
  newArr = arr;
	return newArr[0]**newArr[1];
};

const factorial = function(arr) {
	if(arr===0 || arr===1) return 1
  else return arr * factorial(arr-1); 
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
