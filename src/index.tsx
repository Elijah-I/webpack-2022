import * as React from "react"
import * as ReactDOM from "react-dom/client"

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <h1>halloo</h1>
  </React.StrictMode>
)

if (process.env.NODE_ENV === "development" && module && module.hot)
  module.hot.accept()
