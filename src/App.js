import React, { Component } from "react";
import Search from "./Components/Search";
import Results from "./Components/Results";

import "./App.css";

export default class App extends Component {
  state = {
    results: {},
    repos: [],
  };

  resultsHandler = (dataUser, dataRepo) => {
    this.setState({ results: dataUser, repos: dataRepo });
  };

  resetApp = () => {
    this.setState({ results: "", repos: "" });
  };

  render() {
    return (
      <div className="App">
        <h1>Find a GitHub user</h1>
        <Search onResult={this.resultsHandler} />
        <Results dataUser={this.state.results} dataRepo={this.state.repos} />
        <br />
        <button onClick={this.resetApp}>Reset</button>
      </div>
    );
  }
}
