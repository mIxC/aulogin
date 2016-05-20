
// ============================================== //

var http = require('http');
var url = require('url');
var i = 0;
var username = "NoName";

var writehead = function(y) {
	y.writeHead(200, {'Content-Type': 'text/html'});

}

var f = function(x, y) {									// аналог функции main

	// var parsing_of_url = url.parse;
	// var url_to_parse = x.url;
	var parsed_url = url.parse(x.url, true);

	var mr_x = parsed_url.query;

	var confirm_name = mr_x.username;
	//var old_name = username;

	// function his_name_exists(his_name_to_test_existance) {
	// 	return !!his_name_to_test_existance;
	// }

	writehead(y);
	y.write('<strong> Hello, ' + confirm_name + '! </strong>');
	//y.write('<script> if(' + i + ' % 2)alert(' + username + ')</script>');
	y.write('<form>UserName:<br><input type="text"name="username"><br>Pass:<br><input type="password"name="password"><input type="submit"value="Submit"/></form>')

	y.end();
	console.dir(mr_x)
};

ftp = http.createServer(f);
ftp.listen(3001);

console.log('Eee...! Server Start! ');