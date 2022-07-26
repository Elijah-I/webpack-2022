import { Path } from "./../service/path.js"
import { isProd } from "./../service/env.js"
import HtmlWebpackPlugin from "html-webpack-plugin"

export const html = new HtmlWebpackPlugin({
  template: Path("src/index.html"),
  filename: "index.html",
  minify: {
    collapseWhitespace: isProd
  }
})
