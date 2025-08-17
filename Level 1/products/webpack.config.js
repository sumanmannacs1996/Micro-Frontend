const HtmlPlugins = require("html-webpack-plugin");
module.exports = {
  mode: "development",
  devServer: {
    port: 8081,
  },
  plugins: [
    new HtmlPlugins({
      template: "./public/index.html",
    }),
  ],
};
