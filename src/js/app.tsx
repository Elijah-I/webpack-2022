import * as React from "react"
import * as ReactDOM from "react-dom/client"

import App from "./modules/index"

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement)

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)

if (process.env.NODE_ENV === "development" && module && module.hot) module.hot.accept()
