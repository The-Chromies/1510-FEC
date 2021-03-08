const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');
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
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  plugins: [
    htmlPlugin,
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
  // potentially for react router
  devServer: {
    historyApiFallback: true,
  }
};

//bundle all files to serve all static files.. sends off to see in browser. babel is a compiler that trtanslats jsx to javascript for the browser to read.
