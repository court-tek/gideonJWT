var webpack = require('webpack');
var path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const VENDOR_LIBS = [
  'react', 'lodash', 'redux', 'react-redux', 'react-dom', 'react-input-range', 'redux-form', 'redux-thunk', 'faker'
];

module.exports = {
  entry: {
    bundle: './assets/js/index.js',
    vendor: VENDOR_LIBS
  },
  output: {
    path: path.join(__dirname, 'public/assets'),
    filename: '[name].[chunkhash].js',
    publicPath: '/'
  },
  module: {
    rules: [
      {
        use: 'babel-loader',
        test: /\.js$/,
        exclude: /node_modules/
      },
      {
        loader: ExtractTextPlugin.extract({
          loader: 'css-loader'
        }),
        test: /\.css$/
      }
    ]
  },
  devServer: {
    historyApiFallback: true,
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
        name: 'vendor',
        minChunks: function (module) {
           // this assumes your vendor imports exist in the node_modules directory
           return module.context && module.context.indexOf('node_modules') !== -1;
        }
    }),
    new ExtractTextPlugin('main.css'),
    new HtmlWebpackPlugin({
      template: 'public/index.html'
    })
  ]
};
