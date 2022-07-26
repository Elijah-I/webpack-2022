import { Path } from "./path.js"
import { isDev, isProd } from "./env.js"

export const server = {
  hot: isDev,
  port: 3000,
  open: true,
  compress: true,
  historyApiFallback: true,
  static: {
    directory: Path("build")
  }
}

export const tool = isProd ? false : "source-map"
