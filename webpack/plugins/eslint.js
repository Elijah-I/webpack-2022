import ESLintPlugin from "eslint-webpack-plugin"

export const eslint = new ESLintPlugin({
  extensions: "ts",
  fix: true
})
