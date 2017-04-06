const path = require('path');
const webpack = require('webpack');

module.exports = {
  context: path.resolve(__dirname, 'src'),
  entry: './javascript-text-truncate',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'javascript-text-truncate.min.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        include: /src/,
        loader: 'babel-loader',
      }
    ]
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin
  ]
};
