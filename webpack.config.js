const path = require('path');

module.exports = {
  mode: 'development',
  entry: './index.js',
  //   converts code into single file
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'main.js',
  },

  target: 'web',
  devServer: {
    port: 3000,
    static: ['./public'],
    open: true,
    hot: true,
    liveReload: true,
  },

  resolve: {
    extensions: ['.js', '.jsx', '.json'],
  },
  //   rules for compiler
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
    ],
  },
};
