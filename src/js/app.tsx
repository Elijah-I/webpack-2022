import React from "react"
import ReactDOM from "react-dom/client"

import App from "./modules/index"

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)

if (process.env.NODE_ENV === "development" && module && module.hot) module.hot.accept()
