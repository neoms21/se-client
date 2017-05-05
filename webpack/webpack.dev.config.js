const webpack = require('webpack');
const path = require('path');
const autoprefixer = require('autoprefixer');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const BUILD_DIR = path.resolve(__dirname, '../build');
const APP_DIR = path.resolve(__dirname, '../src/app');
const SRC_DIR = path.resolve(__dirname, '../src');
const ROOT_DIR = path.resolve(__dirname, '..');
const NODE_MODULES = path.resolve(__dirname, '../node_modules');

//noinspection WebpackConfigHighlighting
const config = {
  context: SRC_DIR,
  entry: './app/index.jsx',
  output: {
    path: BUILD_DIR,
    filename: 'bundle.js'
  },
  devtool: 'source-map',
  target: 'web',
  //watch: true,
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: NODE_MODULES,
        loader: 'babel-loader',
        include: APP_DIR
      }, {
        test: /\.scss$/,
        exclude: NODE_MODULES,
        include: SRC_DIR,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          //resolve-url-loader may be chained before sass-loader if necessary
          use: ['css-loader', 'sass-loader']
        })
      }, {
        test: /\.css$/,
        loader: "style-loader!css-loader"
      }, {
        test: /\.svg$/,
        include: SRC_DIR,
        exclude: NODE_MODULES,
        loader: 'url-loader?limit=65000&mimetype=image/svg+xml&name=build/fonts/[name].[ext]'
      }, {
        test: /\.woff$/,
        include: SRC_DIR,
        exclude: NODE_MODULES,
        loader: 'url-loader?limit=65000&mimetype=application/font-woff&name=build/fonts/[name].[ext]'
      }, {
        test: /\.woff2$/,
        include: SRC_DIR,
        exclude: NODE_MODULES,
        loader: 'url-loader?limit=165000&mimetype=application/font-woff2&name=build/fonts/[name].[ext]'
      }, {
        test: /\.[ot]tf$/,
        include: SRC_DIR,
        exclude: NODE_MODULES,
        loader: 'url-loader?limit=65000&mimetype=application/octet-stream&name=build/fonts/[name].[ext]'
      }, {
        test: /\.eot$/,
        include: SRC_DIR,
        exclude: NODE_MODULES,
        loader: 'url-loader?limit=65000&mimetype=application/vnd.ms-fontobject&name=build/fonts/[name].[ext]'
      }, {
        test: /\.(jpg|png)$/,
        loader: "url-loader?limit=25000",
        exclude: NODE_MODULES,
        //loader: 'file?name=[path][name].[ext]',
        include: SRC_DIR
      }, {
        test: /\.json$/,
        include: SRC_DIR,
        loader: 'json-loader'
      }
    ]
  },
  // postcss: [autoprefixer],
  resolve: {
    extensions: [
      '.js', '.jsx', '.json'
    ],
    modules: [
      path.resolve(__dirname, "src"),
      "node_modules"
    ]
  },
  // node: {
  //     console: true,
  //     fs: 'empty',
  //     net: 'empty',
  //     tls: 'empty'
  // },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new ExtractTextPlugin('bundle.css'),
    new HtmlWebpackPlugin({
      appMountId: 'app',
      template: path.resolve(__dirname, '../src/index_template.html')
    }),
    new webpack.DefinePlugin({'process.env.NODE_ENV': JSON.stringify('development')}),
    // new CopyWebpackPlugin([
    //   {
    //     from: 'src/assets/images/'
    //   }, {
    //     from: './src/favicon.ico'
    //   }
    // ])
  ],
  devServer: {
    proxy: { // proxy URLs to backend development server
      '/api': 'http://localhost:3000'
    },
    //contentBase: path.join(__dirname, '../build'), // boolean | string | array, static file location
    compress: false, // enable gzip compression
    historyApiFallback: true, // true for index.html upon 404, object for multiple paths
    hot: true, // hot module replacement. Depends on HotModuleReplacementPlugin
    https: false, // true for self-signed, object for cert authority
    noInfo: false, // only errors & warns on hot reload
    stats: 'normal'
  }
};

module.exports = config;
