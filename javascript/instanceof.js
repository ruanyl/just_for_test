function foo() {
  this.a = 'aaa';
  var that = this;
  console.log(this.a);
  (function bar() {
    console.log(this.a);
  })();
}

foo();
