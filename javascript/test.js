function caculater() {
  this.formula = new Array();
  this.cal = function() {
    var num1 = this.formula[0];
    var num2 = this.formula[2];
    var op = this.formula[1];
    if(op === '+') {
      return num1 + num2;
    } else if(op === '-') {
      return num1 - num2;
    } else if(op === '*') {
      return num1 * num2;
    } else if(op === '/') {
      return num1 / num2;
    }
  };
  this.chain = function(o) {
    this.formula.unshift(o);
    if(this.formula.length < 3) {
      return 'false';
    } else if(this.formula.length === 3) {
      return this.cal();
    }
  };
}
function zero(c) {
  this.__proto__ = c ? c : new caculater();
  var result = this.chain(0);
  return result !== 'false' ? result : this.__proto__;
}
function one(c) {
  this.__proto__ = c ? c : new caculater();
  var result = this.chain(1);
  return result !== 'false' ? result : this.__proto__;
}
function two(c) {
  this.__proto__ = c ? c : new caculater();
  var result = this.chain(2);
  return result !== 'false' ? result : this.__proto__;
}
function three(c) {
  this.__proto__ = c ? c : new caculater();
  var result = this.chain(3);
  return result !== 'false' ? result : this.__proto__;
}
function four(c) {
  this.__proto__ = c ? c : new caculater();
  var result = this.chain(4);
  return result !== 'false' ? result : this.__proto__;
}
function five(c) {
  this.__proto__ = c ? c : new caculater();
  var result = this.chain(5);
  return result !== 'false' ? result : this.__proto__;
}
function six(c) {
  this.__proto__ = c ? c : new caculater();
  var result = this.chain(6);
  return result !== 'false' ? result : this.__proto__;
}
function seven(c) {
  this.__proto__ = c ? c : new caculater();
  var result = this.chain(7);
  return result !== 'false' ? result : this.__proto__;
}
function eight(c) {
  this.__proto__ = c ? c : new caculater();
  var result = this.chain(8);
  return result !== 'false' ? result : this.__proto__;
}
function nine(c) {
  this.__proto__ = c ? c : new caculater();
  var result = this.chain(9);
  return result !== 'false' ? result : this.__proto__;
}

function plus(c) {
  this.__proto__ = c ? c : new caculater();
  var result = this.chain('+');
  return result !== 'false' ? result : this.__proto__;
}
function minus(c) {
  this.__proto__ = c ? c : new caculater();
  var result = this.chain('-');
  return result !== 'false' ? result : this.__proto__;
}
function times(c) {
  this.__proto__ = c ? c : new caculater();
  var result = this.chain('*');
  return result !== 'false' ? result : this.__proto__;
}
function dividedBy(c) {
  this.__proto__ = c ? c : new caculater();
  var result = this.chain('/');
  return result !== 'false' ? result : this.__proto__;
}
console.log(seven(times(five())));
console.log(seven(times(zero())));
console.log(four(plus(nine())));
console.log(eight(minus(three())));
console.log(six(dividedBy(two())));

