var obj1 = {name : 'a'};
var obj2 = {name : 'a'};
var obj3 = {name : 'a'};

var array = new Array();
array.push(obj1);
array.push(obj2);
array.push(obj3);

function indexOf(array, element) {
  for (var i = 0; i < array.length; i++) {
    if (array[i] == element) return i;
  }
  return -1;
}
obj1.name = 'b';

console.log(indexOf(array, obj1));
