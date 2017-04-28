var request = require('request');
var fs = require('fs');
var db = require('./db.js');

var baseUrl = 'https://api.getirkit.com/1/messages';
var requestDelay = 0;

// read security file
var settingJson = require('./settings');
var irSettings = settingJson.irkit;

module.exports = {
  sendIr: function(cmd, callback) {
    //var macroJson = require('./macro');
    //var commandList = macroJson[cmd];
    //var message = fs.readFileSync(commandList.command, 'utf-8');

    db.findDb(cmd, function(code) {
      console.log("irkit.js => " + code);

      console.log("irkit.js => " + cmd);
      //console.log(message);
      request.post(
        baseUrl, {
          form: {
            clientkey: irSettings.clientkey,
            deviceid: irSettings.deviceid,
            //message   : message
            message: code
          }
        },
        function(err, res, body) {
          //console.log(commandList.command + ", " + commandList.compTime);
          if (!err && res.statusCode == 200) {
            console.log('irkit.js => request succeeded: ' + res.statusCode);
            callback(res.statusCode);
          } else {
            console.log('irkit.js => post error: ' + err);
          }
        }
      );
    });
  }
}
