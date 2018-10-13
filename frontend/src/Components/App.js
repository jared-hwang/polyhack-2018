import React, { Component } from "react";
import logo from "../logo.png";
import "../App.css";
import { Header, Card, Segment, Image } from "semantic-ui-react";
import UserDisplay from "./UserDisplay"

class App extends Component {
  render() {
    return (
        <div style={{ backgroundColor: '#282c34' }} className={'App'}>
            <Segment inverted>

            <Header as='h1'><Image size='tiny' src={require("../logo.png")}/>{" "}Tweetalyzer{" "}<Image size='tiny' src={require("../resources/twitter.png")}/></Header>
            </Segment>
            <UserDisplay/>
        </div>
    );
  }
}

export default App;
