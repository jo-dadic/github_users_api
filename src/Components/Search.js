import React, { Component } from "react";
import { apiUrl } from "../common";

import PropTypes from "prop-types";

export default class Search extends Component {
  state = {
    input: "",
  };

  searchUser = (e) => {
    e.preventDefault();

    Promise.all([
      fetch(apiUrl + this.state.input).then((response) => response.json()),
      fetch(apiUrl + this.state.input + "/repos").then((response) =>
        response.json()
      ),
    ]).then(([dataUser, dataRepo]) => {
      this.props.onResult(dataUser, dataRepo);
      this.setState({ input: "" });
    });
  };

  inputChangeHandler = (e) => {
    this.setState({ input: e.target.value });
  };

  render() {
    return (
      <div>
        <h4>GitHub username:</h4>
        <form onSubmit={this.searchUser}>
          <input
            required
            type="text"
            placeholder="Type here"
            value={this.state.input}
            onChange={this.inputChangeHandler}
          />
          <button type="submit">Search</button>
        </form>
      </div>
    );
  }
}

Search.propTypes = {
  onResult: PropTypes.func,
};
