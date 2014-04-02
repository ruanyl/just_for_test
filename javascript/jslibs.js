var jqueryV = '2.0.3, 2.0.2, 2.0.1, 2.0.0, 1.10.2, 1.10.1, 1.10.0, 1.9.1, 1.9.0, 1.8.3, 1.8.2, 1.8.1, 1.8.0, 1.7.2, 1.7.1, 1.7.0, 1.6.4, 1.6.3, 1.6.2, 1.6.1, 1.6.0, 1.5.2, 1.5.1, 1.5.0, 1.4.4, 1.4.3, 1.4.2, 1.4.1, 1.4.0, 1.3.2, 1.3.1, 1.3.0, 1.2.6, 1.2.3';
var angularV = '1.2.8, 1.2.7, 1.2.6, 1.2.5, 1.2.4, 1.2.3, 1.2.2, 1.2.1, 1.2.0, 1.0.8, 1.0.7, 1.0.6, 1.0.5, 1.0.4, 1.0.3, 1.0.2, 1.0.1';
var cfinstallV = '1.0.3, 1.0.2, 1.0.1, 1.0.0';
var dojoV = '1.9.2, 1.9.1, 1.9.0, 1.8.5, 1.8.4, 1.8.3, 1.8.2, 1.8.1, 1.8.0, 1.7.5, 1.7.4, 1.7.3, 1.7.2, 1.7.1, 1.7.0, 1.6.2, 1.6.1, 1.6.0, 1.5.3, 1.5.2, 1.5.1, 1.5.0, 1.4.5, 1.4.4, 1.4.3, 1.4.1, 1.4.0, 1.3.2, 1.3.1, 1.3.0, 1.2.3, 1.2.0, 1.1.1';
var extcoreV = '3.1.0, 3.0.0';
var jqueryuiV = '1.10.3, 1.10.2, 1.10.1, 1.10.0, 1.9.2, 1.9.1, 1.9.0, 1.8.24, 1.8.23, 1.8.22, 1.8.21, 1.8.20, 1.8.19, 1.8.18, 1.8.17, 1.8.16, 1.8.15, 1.8.14, 1.8.13, 1.8.12, 1.8.11, 1.8.10, 1.8.9, 1.8.8, 1.8.7, 1.8.6, 1.8.5, 1.8.4, 1.8.2, 1.8.1, 1.8.0, 1.7.3, 1.7.2, 1.7.1, 1.7.0, 1.6.0, 1.5.3, 1.5.2';
var mootoolsV = '1.4.5, 1.4.4, 1.4.3, 1.4.2, 1.4.1, 1.4.0, 1.3.2, 1.3.1, 1.3.0, 1.2.5, 1.2.4, 1.2.3, 1.2.2, 1.2.1, 1.1.2, 1.1.1';
var prototypeV = '1.7.1.0, 1.7.0.0, 1.6.1.0, 1.6.0.3, 1.6.0.2';
var scriptaculousV = '1.9.0, 1.8.3, 1.8.2, 1.8.1';
var swfobjectV = '2.2, 2.1';
var webfontV = '1.5.0, 1.4.10, 1.4.8, 1.4.7, 1.4.6, 1.4.2, 1.3.0, 1.1.2, 1.1.1, 1.1.0, 1.0.31, 1.0.30, 1.0.29, 1.0.28, 1.0.27, 1.0.26, 1.0.25, 1.0.24, 1.0.23, 1.0.22, 1.0.21, 1.0.19, 1.0.18, 1.0.17, 1.0.16, 1.0.15, 1.0.14, 1.0.13, 1.0.12, 1.0.11, 1.0.10, 1.0.9, 1.0.6, 1.0.5, 1.0.4, 1.0.3, 1.0.2, 1.0.1, 1.0.0';

for(var i=0, arr = jqueryV.split(','); i<arr.length; i++) {
    console.log('\\ \'jQuery ' + arr[i].trim() + '\':\'//ajax.googleapis.com/ajax/libs/jquery/' + arr[i].trim() + '/jquery.min.js\',');
}

for(var i=0, arr = angularV.split(','); i<arr.length; i++) {
    console.log('\\ \'AngularJS ' + arr[i].trim() + '\':\'//ajax.googleapis.com/ajax/libs/angularjs/' + arr[i].trim() + '/angular.min.js\',');
}

for(var i=0, arr = cfinstallV.split(','); i<arr.length; i++) {
    console.log('\\ \'Chrome Frame ' + arr[i].trim() + '\':\'//ajax.googleapis.com/ajax/libs/chrome-frame/' + arr[i].trim() + '/CFInstall.min.js\',');
}

for(var i=0, arr = dojoV.split(','); i<arr.length; i++) {
    console.log('\\ \'Dojo ' + arr[i].trim() + '\':\'//ajax.googleapis.com/ajax/libs/dojo/' + arr[i].trim() + '/dojo/dojo.js\',');
}

for(var i=0, arr = extcoreV.split(','); i<arr.length; i++) {
    console.log('\\ \'Ext Core ' + arr[i].trim() + '\':\'//ajax.googleapis.com/ajax/libs/ext-core/' + arr[i].trim() + '/ext-core.js\',');
}

for(var i=0, arr = jqueryuiV.split(','); i<arr.length; i++) {
    console.log('\\ \'jQuery UI ' + arr[i].trim() + '\':\'//ajax.googleapis.com/ajax/libs/jqueryui/' + arr[i].trim() + '/jqueryui.min.js\',');
}

for(var i=0, arr = mootoolsV.split(','); i<arr.length; i++) {
    console.log('\\ \'MooTools ' + arr[i].trim() + '\':\'//ajax.googleapis.com/ajax/libs/mootools/' + arr[i].trim() + '/mootools-yui-compressed.js\',');
}

for(var i=0, arr = prototypeV.split(','); i<arr.length; i++) {
    console.log('\\ \'Prototype ' + arr[i].trim() + '\':\'//ajax.googleapis.com/ajax/libs/prototype/' + arr[i].trim() + '/prototype.js\',');
}

for(var i=0, arr = scriptaculousV.split(','); i<arr.length; i++) {
    console.log('\\ \'script.aculo.us ' + arr[i].trim() + '\':\'//ajax.googleapis.com/ajax/libs/scriptaculous/' + arr[i].trim() + '/scriptaculous.js\',');
}

for(var i=0, arr = swfobjectV.split(','); i<arr.length; i++) {
    console.log('\\ \'SWFObject ' + arr[i].trim() + '\':\'//ajax.googleapis.com/ajax/libs/swfobject/' + arr[i].trim() + '/swfobject.js\',');
}

for(var i=0, arr = webfontV.split(','); i<arr.length; i++) {
    console.log('\\ \'Web Font Loader ' + arr[i].trim() + '\':\'//ajax.googleapis.com/ajax/libs/webfont/' + arr[i].trim() + '/webfont.js\',');
}
