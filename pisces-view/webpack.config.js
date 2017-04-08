var path = require('path');
var webpack = require('webpack');
var CommonsChunkPlugin = require("webpack/lib/optimize/CommonsChunkPlugin");

module.exports = {
	// plugins
	plugins : [ 
	    new CommonsChunkPlugin('commons'),
	    new CommonsChunkPlugin('commons'),
	],

	// entry config
	entry : {
		core : [
			'./src/main/js/core/Core.js',
			'./src/main/js/core/Class.js',    
			'./src/main/js/core/Class.Extras.js',
			'./src/main/js/core/Class.Thenable.js',
		    './src/main/js/core/Function.js',
		    './src/main/js/core/Array.js',
		    './src/main/js/core/Browser.js',
		    './src/main/js/core/Number.js',
		    './src/main/js/core/Object.js',
		    './src/main/js/core/String.js'
		],
		api : [
		    './src/main/js/base.js',
		    './src/main/js/main.js',
		    './src/main/js/view.js'
		]
	},
	// output config
	output : {
		path : path.join(__dirname, 'src/main/webapp/js'),
		filename : '[name].js'
	},
	
	externals:{
		'jquery':'jQuery'
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