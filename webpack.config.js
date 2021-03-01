const path = require('path');
const HtmlWebPackPlugin = require("html-webpack-plugin");
const WorkboxPlugin = require('workbox-webpack-plugin');

const htmlPlugin = new HtmlWebPackPlugin({
  template: './public/index.html',
  filename: './index.html',
});

module.exports = {
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
    ],
  },
  plugins: [
    htmlPlugin
    // ,
    // new HtmlWebpackPlugin({
    //   title: 'Progressive Web Application',
    //  }),
    // new WorkboxPlugin.GenerateSW({
    //   // this will encourage the ServiceWorkers to work fast and not allow old SWs
    //   clientsClaim: true,
    //   skipWaiting: true,
    // }),
  ],
  resolve: {
    extensions: ['.js', '.jsx'],
  },
};
