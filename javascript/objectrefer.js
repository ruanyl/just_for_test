var foo = {
  'name' : 'ruan'
};

function changeName(people) {
  people.name = 'yu';
}

changeName(foo);

console.log(foo.name);
