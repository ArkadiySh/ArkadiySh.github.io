var arr = [];
var n = 5;

for (var i = 0; i < n; i++){
  var name = prompt('enter name');
  arr.push (name);
}
console.log('array =', arr);

var testName = prompt('enter test name')
console.log('testName =', testName);

for (var j = 0; j < arr.length; j++){
  if (arr[j] == testName){
    alert (testName + ', вы успешно вошли')
  } else {
    alert ('Ошибка');
  }
}
