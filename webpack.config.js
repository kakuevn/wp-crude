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
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['babel-preset-es2015']
                    }
                }
            },

            {
                test: /\.(eot|svg|ttf|woff|woff2)$/,
                loader: 'file-loader?name=assets/fonts/[name].[ext]'
            }
        ]
    },
    resolve: {
        alias: {
            'vue$': 'vue/dist/vue.esm.js' // 'vue/dist/vue.common.js' for webpack 1
        }
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