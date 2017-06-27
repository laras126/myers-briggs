const webpack = require('webpack');
const BrowserSyncPlugin = require('browser-sync-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const path = require('path');

const config = {
  context: path.resolve(__dirname, 'src'), // Start from this folder
  entry: { // Look in these files
    app: './app.js',
  },
  watch: true,

  // module: {
  //   loaders: [
  //     {
  //       test: /\.css$/,
  //       use: ExtractTextPlugin.extract({
  //         use: [
  //           {
  //             loader: 'css-loader',
  //             options: { importLoaders: 1 },
  //           },
  //           'postcss-loader',
  //         ],
  //       }),
  //     },
  //   ],
  // },

  module: {
    rules: [
      {
        test: /\.js$/,
        include: path.resolve(__dirname, 'src'),
        use: [{
          loader: 'babel-loader',
          options: {
            presets: [
              ['es2015', { modules: false }]
            ]
          }
        }],
      }
    ]
  },

  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
        // use:  ExtractTextPlugin.extract({
        //   use: [{
        //     loader: 'css-loader',
        //     options: { importLoaders: 1 },
        //   }],
        // }),
      }
    ],
  },

  // module: {
  //   rules: [
  //     {
  //       test: /\.(sass|scss)$/,
  //       use: [
  //         'style-loader',
  //         'css-loader',
  //         'sass-loader',
  //       ]
  //     }
  //     // …
  //   ],
  // },

  output: { // Output everything into this folder
    path: path.resolve(__dirname, 'dist/assets/js'),
    filename: '[name].bundle.js',
  },

  plugins: [
    new BrowserSyncPlugin({
      proxy: 'http://localhost/projects/myers-briggs/dist',
      host: 'localhost',
      open: 'external',
    }),
    new ExtractTextPlugin({
      filename: '[name].bundle.css'
    }),
  ]
};

module.exports = config;
