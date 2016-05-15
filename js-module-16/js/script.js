function Human() {
  this.name = 'John';
  this.age = 25;
  this.sex = 'Male';
  this.height = '180cm';
  this.weight = '75kg';
}

function Worker() {
  this.job = 'company',
  this.wage = 1000,
  this.work = function(){
    console.log('till the sun comes down');
  }
}

function Student(){
  this.university = 'MIT';
  this.scholarship = 100;
  this.watchTvShows = function(){
    console.log('I won`t stop talking about Breaking Bad (and the Wire)');
  }
}

Worker.prototype = new Human();
Student.prototype = new Human();

var Ivanych = new Worker()
var Alex = new Student()

console.log(Ivanych.name);
console.log(Ivanych.weight);
console.log(Alex.sex);