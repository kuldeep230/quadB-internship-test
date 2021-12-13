import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import ShowsActions from "./Context/ShowsContext/ShowsActions";
import { BrowserRouter as Router } from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <ShowsActions>
        <App />
      </ShowsActions>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
