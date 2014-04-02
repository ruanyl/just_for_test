var person1 = {
  name : 'foo',
  age  : 20
};

var person2 = {
  name : 'bar',
  age  : 21
};

var sayHello = function(action) {
  console.log(action + ' ' + this.name);
};

var update = function(name, age) {
  this.name = name;
  this.age  = age;
  console.log(this.name + ':' + this.age);
}

var router = function(person, method, args) {
  method.apply(person, args);
}

router(person1, sayHello, ['Hello']);
router(person2, update, ['bigruan', 25]);
