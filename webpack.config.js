var path = require('path');
const fs = require('fs-extra');
const HtmlWebpackPlugin = require("html-webpack-plugin");



module.exports = {
  devServer: {
    contentBase: path.join(__dirname, 'src'),
    compress: true,
    port: 9002,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, PATCH, OPTIONS",
      "Access-Control-Allow-Headers": "X-Requested-With, content-type, Authorization"
    },
  },
  entry: fs.readdirSync("./src/app-danfe/static/").filter(file => file.split('.').pop().match(/js/)).map(s => "./src/app-danfe/static/"+ s),
  output: {
    filename: "[name].[hash].bundle.js",
    path: path.resolve(__dirname, "dist")
  },
  devtool: "inline-source-map",
};