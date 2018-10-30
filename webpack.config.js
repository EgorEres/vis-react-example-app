module.exports = {
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader'
        ]
      },
      { test: /\.jsx?$/, loader: 'babel-loader', exclude: [/node_modules/, /dist/] }
    ]
  },
  resolve: {
    extensions: ['*', '.js', '.jsx']
  },
  devServer: {
    contentBase: __dirname,
    historyApiFallback: true,
    port: 8080
  }
}
