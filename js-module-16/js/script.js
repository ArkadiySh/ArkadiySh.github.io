function Human(name, age, sex, height, weight) {
  this.name = name || 'John';
  this.age = age || 25;
  this.sex = sex || 'Male';
  this.height = height || '180cm';
  this.weight = weight || '75kg';
}

function Worker() {
  this.job = 'company',
  this.wage = 1000,
  this.work = function(){
    console.log('till the sun comes down');
  }
}

function Student() {
  this.university = 'MIT';
  this.scholarship = 100;
  this.watchTvShows = function(){
    console.log(this.name + ' says: I won`t stop talking about Breaking Bad (and the Wire)');
  }
}

Student();
console.log(Student.weight);

Worker.prototype = new Human('Ivan', 35, 'male', 180, 90);
Student.prototype = new Human('Olga', 20, 'female', 165, 50);


var ivan = new Worker();
var olga = new Student();


console.log('Worker`s name is ' + ivan.name);
console.log('He is ' + ivan.age + ' years old ' + ivan.sex);
olga.watchTvShows();