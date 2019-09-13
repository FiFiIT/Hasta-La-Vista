import React from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";
import Header from "./common/Header";
import HomePage from "../components/home/HomePage.js";
import Squash from "./squash/Squash";
import Badminton from "./badminton/Badminton";

function App() {
  return (
    <>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/squash" component={Squash} />
        <Route path="/badminton" component={Badminton} />
      </Switch>
    </>
  );
}

export default App;
