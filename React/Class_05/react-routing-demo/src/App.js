import React from "react";
import Nav from "./components/Nav";
import Home from "./components/Home";
import About from "./components/About";
import Friends from "./components/Friends";
import Welcome from "./components/Welcome";
import FriendComponent from "./components/FriendComponent";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Nav />
        <Switch>
          <Route path={"/"} exact component={Welcome} />
          <Route path={"/home"} component={Home} />
          <Route path={"/about"} component={About} />
          <Route path={"/friends"} component={Friends} />
          <Route path={"/friend/:id"} component={FriendComponent} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
