var pow = function pow(a, n) {
  var b = a;

  if (isNaN(a) || isNaN(n)) {
    b = 'Enter correct numbers';

  } else if (n == 0){
    b = 1;

  } else if (n < 0){
    b = 1 / (a * b);
  }

  for (var i = 1; i < n; i++){
    b *= a;
  }
  return b;
}

try {
  module.exports = pow;
} catch (e) {}