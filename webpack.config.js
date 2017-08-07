let path = require("path");
let webpack = require("webpack");
module.exports = {
  entry: {
  	main:path.resolve(__dirname, './src/main.js')
  },
  output: {
    path: path.resolve(__dirname, './public'),
    filename: '[name].js'
  },
  module:{
  	loaders: [
            { test: /\.js$/, loader: 'babel-loader', query: { presets: ['es2015', 'react'] }, exclude: /node_modules/ },
            // { test: /\.less$/, loader: ExtractTextPlugin.extract("style-loader", "css-loader!less-loader") },
            { test: /\.css$/, loader: 'style-loader!css-loader' },
            { test: /\.(png|jpg|gif|svg)$/, loader: 'url-loader?limit=8192' }
        ]
  }
};