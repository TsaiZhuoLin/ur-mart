// react / components
import React from "react"
import ReactDOM from "react-dom"
import App from "./components/app/App"

// redux
import store from "./redux/store"
import { Provider as ReduxProvider } from "react-redux"

// css
import "./index.css"

ReactDOM.render(
  <React.StrictMode>
    <ReduxProvider store={store}>
      <App />
    </ReduxProvider>
  </React.StrictMode>,
  document.getElementById("root"),
)
