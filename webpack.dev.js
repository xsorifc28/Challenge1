const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const pkg = require('./package.json');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
  mode: 'development', 
  entry: './src/index.js',
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, `dist/`),
  },
  devtool: 'source-map',
  devServer: {
    contentBase: path.join(__dirname, `dist/`),
    compress: true,
    port: 8081,
    hot: true,
    writeToDisk: true
  },  
  module: {
    rules: [
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          'file-loader'
        ]
      }
    ]
  },
  plugins: [
    new webpack.BannerPlugin({
      banner: `version ${pkg.version}`
    }),
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      inject: 'body',
      template: 'index.html',
      version: `version ${pkg.version}`
    }),
    new CopyPlugin([
      { from: 'static/', to: 'static' },
    ]),
  ]
}
