var user = {
    userName : "bigruan",
    passwd   : "123456",
    car : {
        brand : "Audi",
        price : 1000
    }
}

var superUser = {
    prototype : user,
    nickName : "tommy"
}
//superUser.prototype = user;

console.log(superUser.userName);
superUser.userName = "tommy";
console.log(superUser.userName);

//Define a functional object to hold persons in JavaScript
var Person = function(name) {
    this.name = name;
};

//Add dynamically to the already defined object a new getter
Person.prototype.getName = function() {
    return this.name;
};

//Create a new object of type Person
var john = new Person("John");

//Try the getter
console.log(john.getName());

//If now I modify person, also John gets the updates
Person.prototype.sayMyName = function() {
    console.log('Hello, my name is ' + this.getName());
};

//Call the new method on john
john.sayMyName();
