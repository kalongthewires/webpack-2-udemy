const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const config = {
  entry: './src/index',
  output: {
    path: path.resolve(__dirname, 'dist'), // constant __dirname = current working dir
    filename: 'bundle.js',
    publicPath: 'dist/'
  },
  module: { // webpack 2 module & rule, not loaders
    // pre-processing stespt to take on all files in bundle
    rules: [
      { // only apply Babel to JS files
        use: 'babel-loader',
        test: /\.js$/,
      },
      { // loaders are for pre-processing
        // plugins have ability to keep files from ending up in bundle
        loader: ExtractTextPlugin.extract({
          loader: 'css-loader',
        }),
        test: /\.css$/
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/,
        use: [
          {
            loader: 'url-loader',
            options: { limit: 40000 },
          },
          'image-webpack-loader', // this will be applied first to the given file
        ],
      },
    ],
  },
  plugins: [
    new ExtractTextPlugin('style.css'),
  ],
};

module.exports = config;
