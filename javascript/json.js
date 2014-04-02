var foo = {},
    bar = {};
foo.name = "Ruan";
foo.age = 25;

bar.name = "Qiu";
bar.age = 24;

foo.bar = bar;

for(var key in foo) {
    console.log(foo[key]);
}

var JSONfoo = JSON.stringify(foo);
console.log(JSONfoo);

var foo2 = {
    "name" : "ruan",
    "age" : 25,
    "bar2" : {
        "name" : "1iu"
    }
};
var JSONfoo2 = JSON.stringify(foo2);
var JSONObj = JSON.parse("{\"foo\" : 1}");
//console.log(JSONfoo2);

var arr = new Array();
arr["name"] = "ruan";
arr["age"] = 25;
var JSONarr = JSON.stringify(arr);
console.log(arr);
