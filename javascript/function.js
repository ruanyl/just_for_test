var User = function(username) {
  this.username = username;
}

User.prototype.getUsername = function() {
  return this.username;
}

var user = new User("bigruan");
console.log(user.getUsername());

function sum() {
  var i,
    sum = 0;
  for (i = 0; i < arguments.length; i++) {
    sum += arguments[i];
  }
  return sum;
}

console.log(sum(1, 2, 3, 4, 5));
