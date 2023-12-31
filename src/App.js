import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Email from "./components/Email";
import Tab from "./components/Tab";

function App() {
  const tabEmailPairs = Array.from({ length: 50 }, (_, index) => (
    <div className="tab-index" key={index}>
      <Tab />
    </div>
  ));

  return <div className="App">{tabEmailPairs}</div>;
}

export default App;
