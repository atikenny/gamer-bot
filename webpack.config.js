const path = require('path');

const paths = {
    output: path.resolve(__dirname, 'dist'),
    game2048: path.resolve(__dirname, 'games/2048'),
    bots: {
        adam: path.resolve(__dirname, 'bots/adam')
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
                test: /\.html?$/,
                use: {
                    loader: 'html-loader'
                }
            },
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['react']
                    }
                }    
            },
            {
                test: /\.scss?$/,
                use: [
                    { loader: 'style-loader' },
                    { loader: 'css-loader' },
                    { loader: 'sass-loader' }
                ]
            }
        ]
    },
    resolve: {
        alias: {
            game2048: paths.game2048,
            botAdam: paths.bots.adam
        },
        extensions: ['.html', '.jsx', '.js', '.scss']
    },
    devServer: {
        compress: true,
        port: 9000,
        overlay: true
    }
};
