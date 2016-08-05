var HtmlWebpackPlugin = require('html-webpack-plugin');
var HTMLWebpackPluginConfig = new HtmlWebpackPlugin({
	template: __dirname + '/src/index.html',
	filename: 'index.html',
	inject: 'body'
})

module.exports = {
	entry: [
		'./src/app.js'
	],
	output: {
		path: __dirname + '/dist',
		filename: 'index_bundle.js'
	},
	module: {
		loaders: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				loader: 'babel-loader'
			},
			{
				test:/\.css$/, 
				loader: 'style-loader!css-loader'
			}
		]
	},
	plugins: [HTMLWebpackPluginConfig]
}

// module.exports = {
// 	entry: [
// 		'./src/index.html'
// 	],
// 	output: {
// 		path: __dirname + '/dist',
// 		filename: "index_bundle.js"
// 	},
// 	module: {
// 		loaders: [
// 			{
// 				test: /\.js$/, 
// 				exclude: /node_modules/, 
// 				loader: "babel-loader",
// 				query: {presets: ['es2015', 'react']}
// 			}
// 		]
// 	},
// 	plugins: [HTMLWebpackPluginConfig]
// }

