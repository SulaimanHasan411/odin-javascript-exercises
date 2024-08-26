const convertToCelsius = function(oldTemp) {
  celcius = (oldTemp - 32) * 5/9;
  return Number(celcius.toFixed(1));
};

const convertToFahrenheit = function(oldTemp) {
  farenheit = 9/5 * oldTemp + 32;
  return Number(farenheit.toFixed(1));
};

//could also do math.round(num * 10)/10 instead of toFixed(1)

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
