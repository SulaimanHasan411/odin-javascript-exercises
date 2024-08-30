const add = function(a,b) {
	return a + b;
};

const subtract = function(a,b) {
	return a - b;
};

const sum = function(arr) {
	return arr.reduce((tot,curr) => tot + curr, 0);
};

const multiply = function(arr) {
  return arr.reduce((tot,curr) => tot * curr, 1);
};

const power = function(a,b) {
	return Math.pow(a,b);
};

const factorial = function(a) {
  res = 1;
	for (let i = 2; i <= a; i++){
    res *= i;
  }
  return res;
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
