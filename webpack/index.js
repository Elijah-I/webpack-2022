import { Path } from "./service/path.js"
import { filename } from "./service/filename.js"

const BaseConfig = {
  context: Path("src"),

  mode: process.env.NODE_ENV,

  entry: {
    app: Path("src/js/app.tsx"),
    hot: "webpack/hot/dev-server.js",
    client: "webpack-dev-server/client/index.js?hot=true&live-reload=true"
  },

  output: {
    path: Path("build"),
    filename: filename("js/", ".js"),
    assetModuleFilename: "[file]"
  },

  resolve: {
    extensions: [".ts", ".tsx", ".js", ".jsx", ".scss"]
  }
}

export default BaseConfig
