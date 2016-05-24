var path = require('path');
var express = require('express');
var app = express();
var webpack = require('webpack');
var webpackConfig = require('./webpack.config.js');

var somePath=path.resolve(__dirname, 'app', 'index.js')

var compiler = webpack(webpackConfig);

var port = 8000

app.use(require('webpack-dev-middleware')(compiler, {
	noInfo: true,
	publicPath: webpackConfig.output.publicPath
}));

app.use(require('webpack-hot-middleware')(compiler));

app.get('*', function(req, res){
	// res.sendFile(path.join(__dirname, 'index.html'));
	res.sendFile(somePath);
});

app.listen(port, 'localhost', function(err){
	if(err){
		console.log(err);
		return;
	}
	console.log("Listening at http://localhost:" + port)
})

