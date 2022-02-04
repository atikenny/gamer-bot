const path = require('path');

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
        test: /\.html?$/u,
        use: {
          loader: 'html-loader'
        }
      },
      {
        test: /\.jsx?$/u,
        exclude: /node_modules/u,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-react']
          }
        }
      },
      {
        test: /\.scss?$/u,
        use: [{ loader: 'style-loader' }, { loader: 'css-loader' }, { loader: 'sass-loader' }]
      }
    ]
  },
  resolve: {
    extensions: ['.html', '.jsx', '.js', '.scss']
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
