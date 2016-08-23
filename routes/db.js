/*
 * Mongooseでデータを取り出して表示するテスト
 */
var mongoose = require('mongoose');

// スキーマ定義
var IrSchema = new mongoose.Schema({
  name: String,
  code: String,
  group: String
});
// モデルとして登録
var ircode = mongoose.model('IrCode', IrSchema);

// mongodbに接続
mongoose.connect('mongodb://localhost:27017/test', // memoの部分はデータベース名
  // コールバックでエラー時の処理が書けるみたい。
  function(err) {
    if (err) {
      console.log(err);
    } else {
      console.log('db.js => connection success!');
    }
  }
);

// findしてコンソールに出力
module.exports = {
    findDb : function ( cmd , callback ) {
	ircode.find({ name : cmd }, function(err, docs) {
  		if(!err) {
    		console.log("db.js => num of item = " + docs.length)
		console.log ("db.js => " + docs[0].code);
		callback (docs[0].code);
    		//for (var i = 0; i < docs.length; i++ ) {
      		//	console.log(docs[i]);
      		//	console.log(docs[i].name);
      		//	console.log(docs[i].code);
      		//	console.log(docs[i].group);
    		//}
    		//mongoose.disconnect()  // mongodbへの接続を切断
    		//process.exit()         // node.js終了
  		} else {
    			console.log("db.js => find error")
  		}
	});
    }
}
