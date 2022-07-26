import MiniCssExtractPlugin from "mini-css-extract-plugin"

export const scss = {
  test: /\.s[ac]ss$/i,
  use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"]
}
