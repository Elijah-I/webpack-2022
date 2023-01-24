import { fileURLToPath } from "url";
import path from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export const Path = (src) =>
  path.join(path.dirname(path.dirname(__dirname, "webpack")), src);
