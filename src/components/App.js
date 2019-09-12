import React from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";
import Header from "./common/Header";
import HomePage from "../components/home/HomePage.js";

function App() {
  return (
    <>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
      </Switch>
    </>
  );
}

export default App;
