var a = prompt('enter number');
var n = prompt('enter power');

function pow(a, n) {
  var b = a;

  if (n == 0){
    b = 1;
  }

  if (n < 0){
    b = 1 / (a * b)
  }

  for (var i = 1; i < n; i++){
    b = a * b;
  }
  return b;
}

var result = pow(a, n);

console.log('result =', result);

document.write('result = ', result);
