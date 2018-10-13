import React, { Component } from "react";
import { Header } from "semantic-ui-react";

export default class UserDisplay extends Component {
  constructor(props) {
    super(props);
    this.state = {
      resp: "hello"
    };
  }

  componentWillMount() {
    console.log("WillMount");

    fetch("http://localhost:5000/api/emotions", {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(function(resp) {
        return resp.json();
      })
      .then(response => {
        console.log(response);
      })
      .catch(err => {
        console.log("err" + err);
      });
  }

  render() {
    return (
      <div>
        <p>
          {this.state.resp}
          Hello
        </p>
      </div>
    );
  }
}
