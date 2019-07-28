import React from "react";

import { Route } from "react-router-dom";
import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Home from "./pages/Home";

export default () => {
  return (
    <div className="App">
      <Route path="/" exact render={() => <Home />} />
    </div>
  );
};
