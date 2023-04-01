const path = require("path");
const htmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  entry: {
    bundle1: path.resolve(__dirname, "src/index.js"),
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].[contenthash].js",
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        test: /\.scss$/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
    ],
  },
  plugins: [
    new htmlWebpackPlugin({
      title: " Webpack Learning",
      filename: "index.html",
      template: "src/templates/first.html",
    }),
  ],
};
