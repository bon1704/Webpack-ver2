const merge = require('webpack-merge')
const common = require('./webpack.common.js')
const CopyPlugin = require('copy-webpack-plugin')
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const postcss = require('postcss')
const cssnano = require('cssnano')
const autoprefixer = require('autoprefixer')
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin')

module.exports = merge(common, {
  mode: 'production',
  devtool: 'source-map',
  module: {
    rules: [{
      test: /\.scss$/,
      use: [
        MiniCssExtractPlugin.loader,
        "css-loader",
        "sass-loader"
      ]
    }]
  },
  optimization: {
    minimizer: [
      new OptimizeCssAssetsPlugin({
        cssProcessor: postcss([autoprefixer(), cssnano()]),
      }),
    ]
  },
  plugins: [
    new CopyPlugin([{
      from: './src/public',
      to: 'public',
    }, ]),
    new MiniCssExtractPlugin({
      filename: 'css/[name].css',
      chunkFilename: 'css/[id].css',
    }),
  ],

})