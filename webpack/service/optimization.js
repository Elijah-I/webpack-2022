import { isProd } from "./env.js"
import TerserPlugin from "terser-webpack-plugin"
import CssMinimizerPlugin from "css-minimizer-webpack-plugin"

const optimization = {
  splitChunks: {
    chunks: "all"
  }
}
// prettier-ignore
if (isProd) {
  optimization.minimizer = [
    new TerserPlugin(),
    new CssMinimizerPlugin(),
  ]

  optimization.minimize = true
}

export default optimization
