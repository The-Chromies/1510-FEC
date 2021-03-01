// const path = require('path');

// const SRC_DIR = path.join(__dirname, 'client', 'src');
// const OUT_DIR = path.join(__dirname, 'public');

const HtmlWebPackPlugin = require("html-webpack-plugin");

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
  plugins: [htmlPlugin],
  // resolve: {
  //   extensions: ['.js', '.jsx']
  // }
};
