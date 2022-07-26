import { filename } from "../service/filename.js"
import MiniCssExtractPlugin from "mini-css-extract-plugin"

export const scss = new MiniCssExtractPlugin({
  filename: filename("css/", ".css")
})
