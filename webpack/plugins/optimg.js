import { isDev } from "../service/env.js"
import ImageMinimizerPlugin from "image-minimizer-webpack-plugin"

const svgHandler = {
  name: "preset-default",
  params: {
    overrides: {
      removeViewBox: false,
      addAttributesToSVGElement: {
        attributes: [{ xmlns: "http://www.w3.org/2000/svg" }]
      }
    }
  }
}

export const optimg = isDev
  ? false
  : new ImageMinimizerPlugin({
      minimizer: {
        implementation: ImageMinimizerPlugin.imageminMinify,
        options: {
          plugins: [
            ["gifsicle", { interlaced: true }],
            ["jpegtran", { progressive: true }],
            ["mozjpeg", { quality: 90 }],
            ["optipng", { optimizationLevel: 6 }],
            ["pngquant", { quality: [0.9, 1] }],
            ["svgo", svgHandler]
          ]
        }
      },

      loader: false
    })
