//var webpack = require("webpack");

var config = {
   entry: __dirname + '\\main.js',
	
   output: {
    publicPath: "/assets/",
    filename: 'bundle.js',
    path: __dirname + '/assets'
  },

   // output: {
   //    path: __dirname + './',
   //    filename: 'bundle.js',
   // },

    devtool: '#inline-source-map',

   devServer: {
      inline: true,
      port: 8080
   },
	
   module: {
      loaders: [
         {
            test: /\.jsx?$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
				
            query: {
               presets: ['es2015', 'react']
            }
         }
      ]
   }
}

module.exports = config;