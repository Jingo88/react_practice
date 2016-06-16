var path = require('path');
var webpack = require('webpack');

module.exports = {
	entry: './src/App.js',
	output: {
		path: path.join(__dirname, 'dist'),
		filename: 'bundle.js',
		publicPath: '/static/'
	},
	module: {
		loaders: [
			{
				test: /\.js$/,
				exclude: "/node_modules",
				loader: "babel",
				include: path.join(__dirname, 'src')
			},
		]
	}	
}