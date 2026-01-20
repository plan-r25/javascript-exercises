const convertToCelsius = function(f) {
 const tempt = (f - 32) * 5/9;
 return celsius = Math.round(tempt * 10) / 10;
};

const convertToFahrenheit = function(c) {
  const tempt  = (c * 9/5) + 32;
  return fahrenheit = Math.round(tempt * 10) / 10;
};


// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
