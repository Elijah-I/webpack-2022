import { Path } from "./service/path.js"
import { filename } from "./service/filename.js"

const BaseConfig = {
  context: Path("src"),

  mode: process.env.NODE_ENV,

  entry: { app: Path("src/js/app.tsx") },

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
