import React, { Component } from "react";
import logo from "../logo.svg";
import "../App.css";
import { Header } from "semantic-ui-react";
import UserDisplay from "./UserDisplay"

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Header>Trump Happiness Analysis</Header>
          <img src={logo} className="App-logo" alt="logo" />
          <UserDisplay/>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
