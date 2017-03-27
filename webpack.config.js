var webpack = require('webpack');

var isDev = process.env.NODE_ENV != 'production';

var plugins = [
    new webpack.DefinePlugin({
        '__isClient__': true
    })
];

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
        './react-src/entry.js'
    ],
    output: {
        path: './public/dist',
        filename: 'bundle.js'
    },
    module: {
        loaders: [{
            test: /\.jsx?$/,
            loaders: ['babel-loader?presets[]=es2015,presets[]=react']
        }, {
            test: /\.(less|css)$/,
            loader: 'style!css!less'
        }, {
            test: /\.(png|jpg)$/,
            loader: 'url-loader?limit=8192&name=./img/[hash].[ext]'
        }, {
            test: /\.(woff|woff2|svg|eot|ttf)\??.*$/,
            loader: 'file?name=./fonts/[name].[ext]'
        }]
    },
    plugins: plugins
}
