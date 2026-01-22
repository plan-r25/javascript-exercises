const fibonacci = function(n) {
  if (n < 0) return 'OOPS';
  if (n < 1) return 0;

  let sum;
  let prev = 0;
  let curr = 1;

  for (let i = 2; i <= n; i++) {
    sum = prev + curr;
    prev = curr;
    curr = sum;
  }
  return curr;
}
  

// Do not edit below this line
module.exports = fibonacci;
