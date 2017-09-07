const ExtractTextPlugin = require("extract-text-webpack-plugin");
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const path = require('path');

module.exports = {
    entry: './assets/src/js/main.js',
    output: {
        path: path.resolve(__dirname, 'assets/bundles'),
        filename: '[name].min.js',
        publicPath: '/assets/bundles/',
    },

    module: {
        rules: [{
            test: /\.scss$/,
            use: ExtractTextPlugin.extract({
                fallback: 'style-loader',
                use: [{
                    loader: 'css-loader',
                    options: {
                        minimize: true,
                        url: true
                    }
                },
                {
                    loader: 'sass-loader'
                }
                ]
            })
        },

        {
            test: /\.(eot|svg|ttf|woff|woff2)$/,
            loader: 'file-loader?name=assets/fonts/[name].[ext]'
        }
        ]
    },

    devServer: {
        contentBase: path.join(__dirname, "/"),
        compress: true,
        port: 4000
    },

    plugins: [
        new ExtractTextPlugin({
            filename: '[name].min.css',
            disable: false
        }),

        // new UglifyJSPlugin({

        //     uglifyOptions: {
        //         ecma: 8,
        //         compress: {
        //             warnings: false
        //         },
        //         warnings: false
        //     }
        // })
    ]
};