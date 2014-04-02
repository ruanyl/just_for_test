var fs = require("fs");

var record = "";
for(var i=0; i<100; i++) {
    var qq = 613136000;
    qq += i;
    record += "" + qq + "----" + "lovelong44242863" + "\r\n";
}

fs.writeFile("./qq.txt", record);
