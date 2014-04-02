function Class1() {
    this.showTxt = function(txt) {
        console.log(txt);
    }
}

function Class2() {
    Class1.call(this);
}

var c2 = new Class2();
c2.showTxt("abc");
