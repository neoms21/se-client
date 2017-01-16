const webpack = require('webpack');
const path = require('path');
const autoprefixer = require('autoprefixer');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const BUILD_DIR = path.resolve(__dirname, '../build');
const APP_DIR = path.resolve(__dirname, '../src/app');

const config = {
    entry: APP_DIR + '/index.jsx',
    output: {
        path: BUILD_DIR,
        filename: 'bundle.js'
    },

    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel',
                include: APP_DIR,
                query: {
                    presets: ['react', 'es2015', 'stage-2'],
                    plugins: ["transform-decorators-legacy", "transform-function-bind"]
                }
            },
            // {
            //     test: /(\.scss$|\.css$)/,
            //     include: /react-toolbox/,
            //     loader: ExtractTextPlugin.extract('style', 'css?sourceMap&modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!postcss!sass')
            // },
            {
                test: /(\.scss$|\.css$)/,
                exclude: /(node_modules|bower_components)/,
                loader: ExtractTextPlugin.extract('style', 'css?sourceMap&importLoaders=1!postcss!sass')
            },
            {
                test: /\.svg$/,
                exclude: /(node_modules|bower_components)/,
                includePaths: [APP_DIR],
                loader: 'url?limit=65000&mimetype=image/svg+xml&name=dist/fonts/[name].[ext]'
            },
            {
                test: /\.woff$/,
                exclude: /(node_modules|bower_components)/,
                includePaths: [APP_DIR],
                loader: 'url?limit=65000&mimetype=application/font-woff&name=dist/fonts/[name].[ext]'
            },
            {
                test: /\.woff2$/,
                exclude: /(node_modules|bower_components)/,
                includePaths: [APP_DIR],
                loader: 'url?limit=65000&mimetype=application/font-woff2&name=dist/fonts/[name].[ext]'
            },
            {
                test: /\.[ot]tf$/,
                exclude: /(node_modules|bower_components)/,
                includePaths: [APP_DIR],
                loader: 'url?limit=65000&mimetype=application/octet-stream&name=dist/fonts/[name].[ext]'
            },
            {
                test: /\.eot$/,
                exclude: /(node_modules|bower_components)/,
                includePaths: [APP_DIR],
                loader: 'url?limit=65000&mimetype=application/vnd.ms-fontobject&name=dist/fonts/[name].[ext]'
            },
            {
                test: /\.(jpg|png)$/,
                loader: "url-loader?limit=25000",
                //loader: 'file?name=[path][name].[ext]',
                include: APP_DIR
            }
        ]
    },
    postcss: [autoprefixer],
    resolve: {
        extensions: ['', '.scss', '.css', '.js', '.json', '.jsx', '.woff', 'woff2', 'png', 'jpg'],
        modulesDirectories: [
            'node_modules',
            path.resolve(APP_DIR, './node_modules')
        ]
    },
// sassLoader: {
//     data: '@import "theme/_config.scss";',
//     includePaths: [path.resolve(__dirname, './src/app')]
// },
    plugins: [
        new ExtractTextPlugin('bundle.css', {allChunks: true}),
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
    ]
};


module.exports = config;