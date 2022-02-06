const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './games/2048/index.jsx',
  devtool: 'source-map',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/u,
        exclude: /node_modules/u,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.scss?$/u,
        use: [{ loader: 'style-loader' }, { loader: 'css-loader' }, { loader: 'sass-loader' }]
      }
    ]
  },
  plugins: [new HtmlWebpackPlugin()],
  resolve: {
    extensions: ['.jsx', '.js', '.scss']
  },
  devServer: {
    compress: true,
    port: 9000,
    client: {
      overlay: {
        errors: true,
        warnings: true
      }
    }
  }
};
