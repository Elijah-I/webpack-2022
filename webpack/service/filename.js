import { isDev } from "./env.js"

export const filename = (folder, ext) => folder + (isDev ? `[name]${ext}` : `[name].[contenthash]${ext}`)
