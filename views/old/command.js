var port = 4;	//GPIO4
var val = 0;	//初期値
var cmd = "gpio";
var mode = "out";

$(function() {

	//初期設定：GPIO4をOUTモードにして、出力を0にする
	       $.ajax({
                 type: 'POST',
                 url: 'test.php',
                 data: {item:val , port:port , mode:mode },
                 success: function(data) {
                 }
                });

	//ボタンが押されたらGPIOの値をトグルする
        $('#ledbtn').click( function() {
		val = (val) ? 0 : 1;
                cmd = "gpio";
		$.ajax({
                 type: 'POST',
                 url: 'test.php', data: {cmd:cmd , item:val , port:port},
                 success: function(data) {
                   alert('success!!');
                 },
                 error: function(data) {
                   alert('error!!');
                 }
                });
		color = (val) ? "#f88888" : "#f8f8f8";
                $(this).css('background',color);
        });

