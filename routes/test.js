var sync = require('synchronize')
var fs = require('fs');

//sync(fs, 'readFile')

//sync.fiber(function(){
module.exports = {
    index : function (req, res) {
	var text = fs.readFileSync('./routes/data/tv/power', 'utf-8');
	return text;
    }
};

//console.log(text + 'ttttttttttt');
//})
