const repeatString = function(message, n) {
  if ( n < 0 ) return 'ERROR';
  let repeat = '';
  for (let i = 0; i < n; i++ ) {
     repeat += message;
  }
  return repeat;
};



// Do not edit below this line
module.exports = repeatString;
