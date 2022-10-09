module.exports = {
  mode: 'development',
  devtool: false,
  resolve: {
    extensions: ['.ts', '.js']
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        exclude: /node_modules/,
        use: {
          loader: 'ts-loader'
        }
      }
    ]
  },
  devServer: {
    static: {
      directory: './dist'
    }
  }
}
