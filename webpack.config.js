var path = require("path")
var webpack = require('webpack');

module.exports = {
    entry: {
        app: [
            './src/index.js'
        ]
    },
    output: {
        path: path.resolve(__dirname + '/dist'),
        filename: '[name].js',
    },
    module: {
        rules: [
            {
                test:    /\.html$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name].[ext]'
                        }
                    }
                ],
            },
            {
                test:    /\.elm$/,
                exclude: [/elm-stuff/, /node_modules/],
                use:  [
                    {
                        loader: 'elm-webpack-loader',
                        options: {
                            debug: true
                        }
                    }
                ],
            },
        ],
        noParse: /\.elm$/
    },
    plugins: [
        new webpack.DefinePlugin({}),
    ],
    devServer: {
        inline: true,
        stats: { colors: true },
    },
};
