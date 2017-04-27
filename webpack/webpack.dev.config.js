const webpack = require('webpack');
const path = require('path');
const autoprefixer = require('autoprefixer');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const BUILD_DIR = path.resolve(__dirname, '../build');
const APP_DIR = path.resolve(__dirname, '../src/app');

//noinspection WebpackConfigHighlighting
const config = {
    entry: APP_DIR + '/index.jsx',
    output: {
        path: BUILD_DIR,
        filename: 'bundle.js'
    },
    devtool: 'source-map',
    target: 'web',
    watch: true,
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel-loader',
                include: APP_DIR,
                query: {}
            },
            {
                test: /\.scss$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    //resolve-url-loader may be chained before sass-loader if necessary
                    use: ['css-loader', 'sass-loader']
                })
            },
            {
                test: /\.svg$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'url-loader?limit=65000&mimetype=image/svg+xml&name=dist/fonts/[name].[ext]'
            },
            {
                test: /\.woff$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'url-loader?limit=65000&mimetype=application/font-woff&name=dist/fonts/[name].[ext]'
            },
            {
                test: /\.woff2$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'url-loader?limit=65000&mimetype=application/font-woff2&name=dist/fonts/[name].[ext]'
            },
            {
                test: /\.[ot]tf$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'url-loader?limit=65000&mimetype=application/octet-stream&name=dist/fonts/[name].[ext]'
            },
            {
                test: /\.eot$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'url-loader?limit=65000&mimetype=application/vnd.ms-fontobject&name=dist/fonts/[name].[ext]'
            },
            {
                test: /\.(jpg|png)$/,
                loader: "url-loader?limit=25000",
                //loader: 'file?name=[path][name].[ext]',
                include: APP_DIR
            },
            {test: /\.json$/, loader: 'json-loader'}
        ]
    },
    // postcss: [autoprefixer],
    resolve: {
        extensions: ['.scss', '.css', '.js', '.jsx', '.json', '.woff', 'woff2', 'png', 'jpg'],
        modules: [
            'node_modules',
            path.resolve(APP_DIR, './node_modules')
        ]
    },
    node: {
        console: true,
        fs: 'empty',
        net: 'empty',
        tls: 'empty'
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new ExtractTextPlugin('bundle.css'),
        new HtmlWebpackPlugin({
            appMountId: 'app',
            template: 'src/index_template.html'
        }),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('development')
        }),
        new CopyWebpackPlugin([
            {from: 'src/assets/images/'}, {from: 'src/favicon.ico'}
        ])
    ],
    devServer: {
        proxy: { // proxy URLs to backend development server
            '/api': 'http://localhost:3000'
        },
        contentBase: path.join(__dirname, '../build'), // boolean | string | array, static file location
        compress: false, // enable gzip compression
        historyApiFallback: true, // true for index.html upon 404, object for multiple paths
        hot: true, // hot module replacement. Depends on HotModuleReplacementPlugin
        https: false, // true for self-signed, object for cert authority
        noInfo: true, // only errors & warns on hot reload
        // ...
    },
};


module.exports = config;