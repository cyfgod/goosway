var path = require('path');
var webpack = require('webpack');
var CommonsChunkPlugin = require("webpack/lib/optimize/CommonsChunkPlugin");

module.exports = {
	// plugins
	plugins : [ new CommonsChunkPlugin('commons') ],

	// entry config
	entry : {
		core : [
			'./src/main/js/lib/mootools/Core.js',
			'./src/main/js/lib/mootools/Class.js',    
			'./src/main/js/lib/mootools/Class.Extras.js',
			'./src/main/js/lib/mootools/Class.Thenable.js',
		    './src/main/js/lib/mootools/Function.js',
		    './src/main/js/lib/mootools/Array.js',
		    './src/main/js/lib/mootools/Browser.js',
		    './src/main/js/lib/mootools/Number.js',
		    './src/main/js/lib/mootools/Object.js',
		    './src/main/js/lib/mootools/String.js'
		],
		api : './src/main/js/main.js'
	},
	// output config
	output : {
		path : path.join(__dirname, 'src/main/webapp/js'),
		filename : '[name].js'
	},
	module : {
		// loader config
		loaders : [ {
			test : /\.css$/,
			loader : 'style-loader!css-loader'
		}, {
			test : /\.js$/,
			loader : 'jsx-loader?harmony'
		}, {
			test : /\.scss$/,
			loader : 'style!css!sass?sourceMap'
		}, {
			test : /\.(png|jpg)$/,
			loader : 'url-loader?limit=8192'
		} ]
	}
};