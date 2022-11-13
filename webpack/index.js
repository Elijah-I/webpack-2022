import { Path } from "./service/path.js"
import { isDev } from "./service/env.js"
import { filename } from "./service/filename.js"

const BaseConfig = {
  context: Path("src"),

  mode: process.env.NODE_ENV,

  entry: {
    app: "./index.tsx"
  },

  output: {
    path: Path("build"),
    filename: filename("js/", ".js"),
    assetModuleFilename: "[file]"
  },

  resolve: {
    extensions: [".ts", ".tsx", ".js", ".jsx", ".scss"],
    modules: [Path("src"), Path("node_modules")]
  }
}

if (isDev) {
  BaseConfig.entry.hot = "webpack/hot/dev-server.js"
  BaseConfig.entry.client =
    "webpack-dev-server/client/index.js?hot=true&live-reload=true"
  BaseConfig.output.publicPath = "/"
}

export default BaseConfig
