import React, { Component } from "react";
import {
  Header,
  Segment,
  Image,
  Label,
  Card,
  Progress,
  Container,
  Button
} from "semantic-ui-react";
import SentimentGraph from "./SentimentGraph";

export default class UserDisplay extends Component {
  constructor(props) {
    super(props);
    this.state = {
      resp: "hello",
      happy: false,
      sad: false,
      anger: false
    };
  }

  componentWillMount() {
    console.log("WillMount");

   // fetch("http://10.245.174.143:5000/api/emotions", {
    //  fetch("http://localhost:5000/getTweets/emotions/hello", {
        fetch("http://10.247.140.115:5000/getTweets/emotions/realDonaldTrump", {
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
      <Container textAlign="center" style={{ width: "50%" }}>
        <Card centered fluid>
          {/*<Label size='medium' color='blue' horizontal image>*/}
          {/*<Image size='medium' src={require("../resources/realDT.jpg")} inline />*/}
          {/*@RealDonaldTrump*/}
          {/*</Label>*/}
          <Label size="large" color="blue" horizontal>
            @RealDonaldTrump{" "}
          </Label>

          <Image
            floated="left"
            size="tiny"
            src={require("../resources/realDT.jpg")}
            inline
          />
          <Button
            onClick={() => {
              this.setState({ happy: !this.state.happy, anger: false, sad: false });
            }}
          >
              <Label>Happiness</Label>
              <Progress percent={11} color="green" />

          </Button>
          <Button
            onClick={() => {
              this.setState({ sad: !this.state.sad, anger: false, happy: false });
            }}
          >
              <Label>Sad</Label>

              <Progress percent={33} color="blue" />

          </Button>
          <Button
            onClick={() => {
              this.setState({ anger: !this.state.anger, sad: false, happy: false });
            }}
          >
              <Label>Anger</Label>

              <Progress percent={45} color="red" />
          </Button>
          {this.state.happy === true ? <SentimentGraph /> : ""}
          {this.state.sad === true ? <SentimentGraph /> : ""}
          {this.state.anger === true ? <SentimentGraph /> : ""}
        </Card>
      </Container>
    );
  }
}
