import { isDev } from "../service/env.js";
import { Path } from "../service/path.js";
import FaviconsWebpackPlugin from "favicons-webpack-plugin";

const logo = Path("src/assets/favicon/favicon.svg");

const settings = isDev
  ? { logo, prefix: "" }
  : {
      logo,
      inject: true,
      mode: "light",
      prefix: "assets/favicon/",
      outputPath: Path("build/assets/favicon/"),

      favicons: {
        background: "#ddd",
        theme_color: "#333"
      }
    };

export const favicon = new FaviconsWebpackPlugin(settings);
