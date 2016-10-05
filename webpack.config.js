const webpack = require('webpack')

module.exports = {
   entry: './src/main.js',
   output: {
     path: './dist',
     filename: 'javascript-text-truncate.min.js'
   },
   module: {
      rules: [
         {
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel',
         }
      ]
   },
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: true
      }
    })
  ]
}
