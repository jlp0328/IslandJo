const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry:{
    bundle: './index.js',
    vendor: ['angular-material', 'angular-aria', 'angular-animate', '@uirouter/angularjs']
  },

  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist')
  },

  // This section desribes the transformations we will perform
  module: {
    rules: [{
          loaders: [
      {
        test: /\.js$/,
        exclude: [/node_modules/],
        use:[{
          loader: 'babel-loader',
              options: {
          // These are the specific transformations we'll be using.
          presets: ["es2015"]
        }

        }]

      }
    ]
    }]
  },

  // This lets us debug our react code in chrome dev tools. Errors will have lines and file names
  // Without this the console says all errors are coming from just coming from bundle.js
  devtool: "eval-source-map"
};
