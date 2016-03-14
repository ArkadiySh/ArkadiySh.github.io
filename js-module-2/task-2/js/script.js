var arr = [];
var n = 5;
console.log('Array length is', arr.length)

for (var i = 1; i <= n; i++){
  var name = prompt('enter name  ' + i);
  arr.push (name);
}
console.log('array =', arr);
console.log('Array length is', arr.length)

var yourName = prompt('enter your name')
console.log('Your Name =', yourName);

var nameTrue = 0;

for (var j = 0; j < arr.length; j++){
  if (arr[j] == yourName){
    console.log('j =', j)
    nameTrue++;
    break;
  }
 }

if (nameTrue == 1){
    alert (yourName + ', вы успешно вошли')
  } else {
    alert ('Ошибка');
 }