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
			{test:/\.coffee$/, exclude: /node_modules/, loader: "coffee-loader"}
		]
	},
	// Where should webpack output the new transformed code
		// filename = name of the newly created file
		// path = the current directory and then some
	output: {
		filename: "index_bundle.js",
		path: __dirname + '/dist'
	},
}


