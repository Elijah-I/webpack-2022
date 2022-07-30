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

  optimization
}

// prettier-ignore
if (Plugin.optimg)
  config.plugins.push(Plugin.optimg)

// prettier-ignore
if (Dev.tool)
  config.devtool = Dev.tool

// prettier-ignore
if (Dev.server)
  config.devServer = Dev.server

export default config
