// Run webpack in the terminal with "webpack"
// If you want webpack to keep watching for changes run "webpack -w"
// If you are shipping to production you can run "webpack -p"

// Require the webpack plugin
// Set the directory and template you will be targeting
// Where specifically are you injecting this file
var HtmlWebpackPlugin = require('html-webpack-plugin');
var HTMLWebpackPluginConfig = new HtmlWebpackPlugin({
	template: __dirname + '/app/index.html',
	filename: 'index.html',
	inject: 'body'
});

module.exports = {
// Tell object where to enter. This is the root JS file
	entry: [
		'./app/index.js'
	],
	// add a module property to be aware of modules such as transforming jsx to js with babel?
	module:{
		// Loaders have three things
			// 1 - Which file type to run the specific transformation on
			// 2 - Which directories to include or exclude from transforming(exclude node modules)
			// 3 - The specific loader we want to run
		loaders: [
		// The babel loader can be used because we set the preset to "react" in a .babelrc file
			{test:/\.js$/, exclude: /node_modules/, loader: "babel-loader"}
		]
	},
	// Where should webpack output the new transformed code
		// filename = name of the newly created file
		// path = the current directory and then some
	output: {
		path: __dirname + '/dist',
		filename: "index_bundle.js"
	},
	// plugins takes the config at the top. Will inject the transformed code into the body of the html
	plugins: [HTMLWebpackPluginConfig]
};


