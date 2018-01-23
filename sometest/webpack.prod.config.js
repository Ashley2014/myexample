const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const webpack = require('webpack');

module.exports = {
  entry: {
    app: './src/index.js',
  },
  // devtool: 'inline-source-map',
  // devServer: {
  //   contentBase: './dist',
  //   historyApiFallback: true,
  //   hot: true,
  //   open: true
  // },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader:require.resolve('babel-loader'),
          options: {
            // cacheDirectory: true,
            presets: [
              ["env",{ "modules": false }],
            ],
            // "plugins": ["transform-runtime"],
            plugins: ["transform-object-rest-spread","syntax-dynamic-import"]
          }
        }
      }
    ]
  },
  plugins: [
    // new CopyWebpackPlugin([
    //     { from: 'src/assets', to: 'assets' },
    //   ],
    // ),
    // new HtmlWebpackPlugin({
    //   title: 'Hot Module Replacement',
    //   filename: 'index.html',
    //   template: path.join(__dirname,'./','src/index.html'),
    // }),
    // new webpack.HotModuleReplacementPlugin()
  ],
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    // publicPath: "/",
  }
};
