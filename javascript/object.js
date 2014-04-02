var user = {
    "username" : "bigruan",
    "password" : "123456",
    "sayHello" : function() {
        var that = this;
        var say = function() {
            return "Hello " + that.username;
        }
        return say();
    }
}

console.log(user.sayHello());

var user = {
    "username" : "ruan"
}
console.log(user);
console.log({"user" : user});
user.username = "big";
