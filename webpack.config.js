var webpack = require('webpack');

module.exports = {
	entry: [
		'./components/entry.js'
	],	
	output: {
		path: './public/dist',
		filename: 'bundle.js'
	},
	module: {
		loaders: [{
			test: /\.jsx?$/,
			loaders: ['babel-loader?presets[]=es2015,presets[]=react']
		},{
			test: /\.less$/,
			loader: 'style!css!less'
		},{
    		test: /\.(png|jpg)$/,
    		loader: 'url-loader?limit=8192'
    	}]
	}
}