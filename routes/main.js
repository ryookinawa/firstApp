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
      res.render('index', { title: 'Remote Control' });
    },
    command : function (req, res) {
        // idにより処理を分岐
        // idをAPI的に活用する
        var cmd = req.param('id');

       	res.console.log('------------Start----------');
	var statCode = irkit.sendIr(cmd,function(statCode){
       		console.log('------------Second----------');
		//res.send("success_main.js");
		res.send('StatusCode = ' + statCode);
       		console.log(statCode);
        	console.log('------------3333----------');
        	console.log(statCode);
	});
       	console.log('------------4444----------');
    },
    create : function (req, res) {
        // TODO: insert 実装する
        //res.send(req.body.content);
        res.render('create', { title: req.body.content });
    }
};
