cordova.define("com.handsmap.myFirstPlugin.myFirstPlugin", function(require, exports, module) { var exec = require('cordova/exec');

//exports.coolMethod = function(arg0, success, error) {
//    exec(success, error, "myFirstPlugin", "coolMethod", [arg0]);
//};

var alert = function(arg0, success, error) {
    exec(success, error, "myFirstPlugin", "showAlert", [arg0]);
};
window.plugins = window.plugins || {};
window.plugins.myFirstPlugin = {showAlert:alert};


});
