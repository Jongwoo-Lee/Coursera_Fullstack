var express  = require('express');
var path = require('path');

// define vars
var PORT = 8081;

// define server
var app = express();
app.use('/',express.static(path.resolve(__dirname,'./app')));

// actually run server
app.listen(PORT,()=>{
	console.log(`server runnint on ${PORT}`);
});
