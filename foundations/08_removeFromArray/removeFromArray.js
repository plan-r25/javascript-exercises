const removeFromArray = function(array, ...valueToRemove) {
  return arr = array.filter(e => !valueToRemove.includes(e));
};  

// Do not edit below this line
module.exports = removeFromArray;
