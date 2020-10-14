import React from "react";
import { Switch, Route } from "react-router-dom";

import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import Github from "./pages/Github";
import Twitter from "./pages/Twitter";
import Youtube from "./pages/Youtube";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/youtube">
          <Youtube />
        </Route>
        <Route path="/github">
          <Github />
        </Route>
        <Route path="/twitter">
          <Twitter />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
