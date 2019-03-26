const path = require("path")
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack')
module.exports = {
  entry: {
    app: './src/js/index.js',
    lib: './src/js/lib.js'
  },
  output: {
    filename: './js/[name].bundle.js',
    path: path.resolve(__dirname, "dist")
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: 'IronMan',
      favicon: './src/favicon.ico',
      template: './src/index.html'
    }),
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery'
    })
  ],
  module: {
    rules: [{
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
        }
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [{
          loader: 'file-loader'
        }]
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
    ]
  }
}