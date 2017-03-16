var webpack = require('webpack');

var isDev = process.env.NODE_ENV != 'production';

var plugins = [];

if (!isDev) {
    plugins.push(new webpack.optimize.UglifyJsPlugin({
        beautify: true,
        mangle: {
            screw_ie8: true,
            keep_fnames: true
        },
        compress: {
            screw_ie8: true
        },
        comments: false
    }));
}

module.exports = {
    debug: isDev,
    devtool: isDev ? 'source-map' : false,
    watch: isDev,
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
	},
    plugins: plugins
}
