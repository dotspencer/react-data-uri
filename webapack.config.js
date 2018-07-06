module.exports = {
  entry: '',
  modules: {
    rules: [
      test: /.js$/,
      exclude: /node_modules/,
      use: 'babel-loader',
    ],
  }
  output: {
    filename: 'bundle.js',
    path: __dirname + '/dist',
  },
  method: 'development',
};
