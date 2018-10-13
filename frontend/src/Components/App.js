import React, { Component } from "react";
import logo from "../logo.svg";
import "../App.css";
import { Header, Card, Segment } from "semantic-ui-react";
import UserDisplay from "./UserDisplay"

class App extends Component {
  render() {
    return (
        <div style={{ backgroundColor: '#282c34' }} className={'App'}>
            <Segment inverted>
            <Header>Trump Happiness Analysis</Header>
            </Segment>
            <UserDisplay/>
        </div>
    );
  }
}

export default App;
