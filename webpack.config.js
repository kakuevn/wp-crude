const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const path = require('path')

module.exports = {
  entry: './assets/src/js/main.js',
  output: {
    path: path.resolve(__dirname, 'assets/bundles'),
    filename: '[name].min.js',
    publicPath: '/assets/bundles/',
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          { loader: MiniCssExtractPlugin.loader },
          { loader: "css-loader", },
          {
            loader: 'postcss-loader',
            options: {
              ident: 'postcss',
              plugins: [
                require('tailwindcss'),
                require('autoprefixer'),
                require('postcss-nested'),
              ],
            },
          }
        ]
      },
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "main.min.css"
    })
  ],
}
