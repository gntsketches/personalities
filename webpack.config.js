// import ForkTsCheckerWebpackPlugin from 'fork-ts-checker-webpack-plugin';
  // "SyntaxError: Cannot use import statement outside a module..."
  // and yet...
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');

module.exports = {
  mode: 'development',
  devtool: false,
  resolve: {
    extensions: ['.ts', '.js']
  },
  module: {
    rules: [
      {
        test: /\.(j|t)s$/,
        exclude: /node_modules/,
        use: {
          // without additional settings, this will reference .babelrc
          loader: 'babel-loader',
          options: {
            presets: [
              "@babel/preset-env",
              "@babel/preset-typescript"
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
  plugins: [
    new ForkTsCheckerWebpackPlugin()
  ]
}
