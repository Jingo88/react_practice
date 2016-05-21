var path = require('path');
var express = require('express');
var app = express();
var webpack = require('webpack');
var webpackConfig = require('webpack.config.js');

var compiler = webpack(webpackConfig);

var port = 8000

app.use(require('webpack-dev-middleware')(compiler, {
	noInfo: true,
	publicPath: config.output.publicPath
}));

app.use(require('webpack-hot-middleware')(complier));

app.get('*', function(req, res){
	res.sendFile(path.join(__dirname, 'base.html'));
});

app.listen(port, 'localhost', function(err){
	if(err){
		console.log(err);
		return;
	}
	console.log("Listening at http://localhost:" + port)
})

