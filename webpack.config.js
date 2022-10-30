module.exports = {
  mode: 'development',
  devtool: false,
  resolve: {
    extensions: ['.js']
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          // without additional settings, this will reference .babelrc
          loader: 'babel-loader',
          options: {
            presets: [
              "@babel/preset-env",
            ]
          }
        }
      },
      {
        test: /\.(s[ac]|c)ss$/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      }
    ]
  },
  devServer: {
    static: {
      directory: './dist'
    }
  },
}
