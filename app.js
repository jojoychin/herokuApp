var express = require('express');

var app = express();
// var redis;

// if (process.env.REDISTOGO_URL) {
//     // redistogo connection
// 	var rtg   = require("url").parse(process.env.REDISTOGO_URL);
// 	redis = require("redis").createClient(rtg.port, rtg.hostname);

// 	redis.auth(rtg.auth.split(":")[1]);

// } else {
 //    redis = require("redis");
	// //our code is the client
	// var client = redis.createClient();
// }

app.get('/', function (req, res) {
  	res.send('hello world');
});

// app.get('/', function (req, res) {
//   client.incr("visitors") // increment visitors
//   client.get("visitors", function(err, value) {
//     res.send('Hello visitor number ' + value + '!');
//   });
// });

var server = app.listen(3000, function () {

  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);

});