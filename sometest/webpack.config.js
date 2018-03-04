const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const webpack = require('webpack');

module.exports = {
  entry: {
    app: './src/index.js',
  },
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './dist',
    historyApiFallback: true,
    hot: true,
    open: true
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader:require.resolve('babel-loader'),
          options: {
            // cacheDirectory: true,
            // presets: ['es2015',{ "modules": false }],
            // plugins: ['transform-runtime']
            presets: [
              ["env",{ "modules": false }],
            //   ["es2015"],
              "stage-2",
            ],
            // // "plugins": ["transform-runtime"],
            plugins: ["transform-decorators-legacy"]
          }
        }
      }
    ]
  },
  plugins: [
    new CopyWebpackPlugin([
        { from: 'src/assets', to: 'assets' },
      ],
    ),
    new HtmlWebpackPlugin({
      title: 'Hot Module Replacement',
      filename: 'index.html',
      template: path.join(__dirname,'./','src/index.html'),
    }),
    new webpack.HotModuleReplacementPlugin()
  ],
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: "/",
  }
};
