module.exports = {
   entry: "./src/javascript-text-truncate.js",
   output: {
      filename: "dist/javascript-text-truncate.js"
   },
   module: {
      loaders: [
         {
            test: /\.js$/,
            exclude: /node_modules/,
            loader: "babel",
         }
      ]
   }
};