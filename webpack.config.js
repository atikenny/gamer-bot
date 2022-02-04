const path = require('path');

const paths = {
  output: path.resolve(__dirname, 'dist'),
  game2048: path.resolve(__dirname, 'games/2048'),
  bots: {
    adam: path.resolve(__dirname, 'bots/adam'),
    bruce: path.resolve(__dirname, 'bots/bruce')
  }
};

module.exports = {
  entry: './games/2048/index.js',
  devtool: 'source-map',
  output: {
    path: paths.output,
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
    alias: {
      game2048: paths.game2048,
      botAdam: paths.bots.adam,
      botBruce: paths.bots.bruce
    },
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
