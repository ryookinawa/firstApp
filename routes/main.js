var express = require('express');
var router = express.Router();

// 作成したirkit用のJSを読み込む
var irkit = require('./irkit.js');

module.exports = {
    // app.jsでindexを読み込んだ場合の処理
    index : function (req, res) {
        res.console.log('test')
        res.console.log('test2')
        res.render('index', { title: 'Remote ControllllLLLLLL' });
    },

    // app.jsでcommandを読み込んだ場合の処理
    command : function (req, res) {
        // idにより処理を分岐
        // idをAPI的に活用する
        var cmd = req.param('id');

       	//res.console.log('------------Start----------');
	      var statCode = irkit.sendIr(cmd,function(statCode){
       	      //console.log('main.js => ------------Second----------');
		          res.send('StatusCode = ' + statCode);
       	      //console.log("main.js => " + statCode);
              //console.log('main.js => ------------3333----------');
              //console.log("main.js => " + statCode);
	      });
       	//console.log('main.js => ------------4444----------');
    },

    // app.jsでtestを読み込んだ場合の処理
    test : function (req, res) {
        //res.render('register');
        res.render('test');
    },
    
    // app.jsでregisterを読み込んだ場合の処理
    register : function (req, res) {
        res.console.log('register directive');
	      var data = req.body;
        res.console.log(data);
	      res.send(200);
    }
};
