var express = require('express');
var router = express.Router();
var irkit = require('./irkit.js');

/* GET home page. */
/*router.get('/', function(req, res) {
  res.render('index', { title: 'Routing' });
});


module.exports = router;
*/
module.exports = {
    index : function (req, res) {
      res.console.log('test')
      res.console.log('test2')
      res.render('index', { title: 'Remote ControllllllGGGGGGGHHHHHH' });
    },
    command : function (req, res) {
        // idにより処理を分岐
        // idをAPI的に活用する
        var cmd = req.param('id');

       	//res.console.log('------------Start----------');
	var statCode = irkit.sendIr(cmd,function(statCode){
       		console.log('main.js => ------------Second----------');
		//res.send("success_main.js");
		res.send('StatusCode = ' + statCode);
       		console.log("main.js => " + statCode);
        	console.log('main.js => ------------3333----------');
        	console.log("main.js => " + statCode);
	});
       	console.log('main.js => ------------4444----------');
    },
    test : function (req, res) {
        //res.render('register');
        res.render('test');
    },
    register : function (req, res) {
        res.console.log('register directive');
	var data = req.body;
        res.console.log(data);
	res.send(200);
    }
};
