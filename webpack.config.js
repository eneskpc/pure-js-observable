const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpack = require("webpack"); //to access built-in plugins

module.exports = {
  mode: "development",
  entry: ["./src/index.js", "./src/input.js", "./src/result.js"],
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist"),
  },
  plugins: [new HtmlWebpackPlugin({ template: "./src/index.html" })],
};
