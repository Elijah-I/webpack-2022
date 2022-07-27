import BaseConfig from "./webpack/index.js"
import * as Dev from "./webpack/service/dev.js"
import * as Rule from "./webpack/rules/index.js"
import * as Plugin from "./webpack/plugins/index.js"
import optimization from "./webpack/service/optimization.js"

const config = {
  ...BaseConfig,

  // prettier-ignore
  plugins: [
    Plugin.scss,
    Plugin.html,
    Plugin.favicon,
    Plugin.cleaner,
    Plugin.hotReload
  ],

  // prettier-ignore
  module: {
    rules: [
      Rule.js,
      Rule.ts,
      Rule.html,
      Rule.scss,
      Rule.assets
    ]
  },

  optimization,

  devtool: Dev.tool,
  devServer: Dev.server
}

// prettier-ignore
if (Plugin.optimg)
  config.plugins.push(Plugin.optimg)

export default config
