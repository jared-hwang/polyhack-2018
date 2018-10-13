import React, { Component } from "react";
import {
  Header,
  Segment,
  Image,
  Label,
  Card,
  Progress,
  Container,
  Button,
  Grid,
  Divider
} from "semantic-ui-react";
import { tweetsD, tweetsM } from "./Tweetsjs";
import { TwitterTweetEmbed } from "react-twitter-embed";

let LineChart = require("react-chartjs").Line;

export default class UserDisplay extends Component {
  constructor(props) {
    super(props);
    this.state = {
      respD: tweetsD,
      respM: tweetsM,
      happy: false,
      sad: false,
      angry: false,
      showinput: false,
      id: 0,
      tweeted: false,
        rerender: false,
    };
  }

  // componentWillMount() {
  //
  //   // fetch("http://10.245.174.143:5000/api/emotions", {
  //   //  fetch("http://localhost:5000/getTweets/emotions/hello", {
  //   fetch(
  //     "http://10.247.140.115:5000/getTweets/emotions/0xmchow?timeScale=2018-10-08",
  //     {
  //       method: "GET",
  //       headers: {
  //         "Content-Type": "application/json"
  //       }
  //     }
  //   )
  //     .then(function(resp) {
  //       return resp.json();
  //     })
  //     .then(response => {
  // //       console.log(response);
  //       let resp = JSON.parse(response);
  //       this.setState({ respM: resp });
  // //       console.log(response);
  //     })
  //     .catch(err => {
  // //       console.log("err" + err);
  //     });
  //
  // }

  getRandomInt = max => {
    return Math.floor(Math.random() * Math.floor(max));
  };

     sleep = (milliseconds) => {
        return new Promise(resolve => setTimeout(resolve, milliseconds))
    };

  rerender = () =>{
      this.setState({tweeted: !this.state.tweeted});
      this.sleep(5).then(() => {
          this.setState({tweeted: !this.state.tweeted});
      })
  };

  render() {

    // // console.log("state", this.state.resp);
    let sentiments = ["happy", "sad", "angry"];
    let avgObjD = { angry: 0, happy: 0, sad: 0 };
    let avgObjM = { angry: 0, happy: 0, sad: 0 };

    // console.log(this.state.respD);
    this.state.respD.forEach(elem => {
      // // console.log(elem);
      sentiments.forEach(sent => {
        avgObjD[sent] += elem[sent];
      });
    });
    this.state.respM.forEach(elem => {
      // // console.log(elem);
      sentiments.forEach(sent => {
        avgObjM[sent] += elem[sent];
      });
    });
    // console.log(avgObjD);
    // console.log(avgObjM);

    let lenD = this.state.respD.length;
    let happyAvgD = (avgObjD["happy"] / lenD) * 100;
    let sadAvgD = (avgObjD["sad"] / lenD) * 100;
    let angryAvgD = (avgObjD["angry"] / lenD) * 100;
    let lenM = this.state.respM.length;
    let happyAvgM = (avgObjM["happy"] / lenM) * 100;
    let sadAvgM = (avgObjM["sad"] / lenM) * 100;
    let angryAvgM = (avgObjM["angry"] / lenM) * 100;
    // let happyAvgM = 0;
    // let sadAvgM = 0;
    // let angryAvgM = 0;

    let tweetsD = [
      "1051132013535797248",
      "1051131894748864512",
      "1051122475134803968",
      "1051122235740708864",
      "1051122093927088128",
      "1051121451250720774",
      "1051121103928795136",
      "1051120943752507393",
      "1051120667871965189",
      "1051120070867472389",
        "1051120806795862019"
    ];

    let tweetsM = [
        "1051150313430888448",
        "1051149643273445378",
        "1051150207445024768",
        "1051148946398171137",
        "1051148433174740992",
        "1051143872288579584",
        "1051152343209861121",
        "1051152030243442690",
        "1051152644293693440",
        "1051153385569865728",
        "1051152974850994177",


    ];

    const MyComponent = resp => {
      {
        let colors = { happy: "#00ff00", angry: "#ff0000", sad: "#0000ff" };
        // console.log(resp);
        let yaxis = []; // sentiment
        let xaxis = []; // dates

        resp.resp.forEach(function(element) {
          xaxis.push(element["date"]);
          yaxis.push(element[resp.sentiment]);
        });
        xaxis.reverse();
        yaxis.reverse();

        // var ctx = $("#line-chartcanvas");
        //   console.log(colors[resp.sentiment]);
        let data = {
          labels: xaxis,
          datasets: [
            {
              data: yaxis,
              backgroundColor: "#ff00ff",
              borderColor: "#ff00ff",
              hoverBorderColor: "#000fff",
              hoverBackgroundColor: "#000fff",
              fill: false
            }
          ]
        };

        return <LineChart data={data} width="600" height="250" />;
      }
    };

    let hello = this.state.rerender ? "" : "";

    return (
      <Container textAlign="center" style={{ width: "90%" }}>
        <Grid columns={2}>
          <Grid.Column>
            <Card centered fluid>
              {/*<Label size='medium' color='blue' horizontal image>*/}
              {/*<Image size='medium' src={require("../resources/realDT.jpg")} inline />*/}
              {/*@RealDonaldTrump*/}
              {/*</Label>*/}
              <Card.Header>
                <Image
                  floated="left"
                  size="tiny"
                  src={require("../resources/realDT.jpg")}
                  inline
                />
                <Header>
                  {" "}
                  Donald Trump{" "}
                  <Label size="large" color="blue" horizontal>
                    @RealDonaldTrump{" "}
                  </Label>
                  <Button
                      color='twitter'
                    onClick={() => {
                      fetch(
                        "http://10.247.140.115:5000/getTweets/emotions/hello",
                        {
                          method: "GET",
                          headers: {
                            "Content-Type": "application/json"
                          }
                        }
                      )
                        .then(function(resp) {
                          console.log(resp + typeof resp);
                          return resp.json();
                        })
                        .then(response => {
                          // console.log(response);
                          let resp = JSON.parse(response);
                          console.log(resp);
                          // let id = "";
                          // id = id.concat(String(resp));
                          // console.log(id);
                          let index = this.getRandomInt(tweetsD.length);
                          let id = tweetsD[index];
                          // let id = "1051122475134804000";
                          // let id = "1051117589227851777";
                          this.setState({ id: id, tweeted: true });
                          this.rerender();
                        })
                        .catch(err => {
                          // console.log("err" + err);
                        });
                    }}
                  >
                    Random Shit Trump Says
                  </Button>
                </Header>
              </Card.Header>

              <Button
                onClick={() => {
                  this.setState({
                    happy: !this.state.happy,
                    angry: false,
                    sad: false
                  });
                }}
              >
                <Label>Happiness</Label>
                <Progress
                  percent={happyAvgD}
                  progress
                  precision={happyAvgD < 10 ? 0 : 1}
                  color="green"
                />
              </Button>
              <Button
                onClick={() => {
                  this.setState({
                    sad: !this.state.sad,
                    angry: false,
                    happy: false
                  });
                }}
              >
                <Label>Sad</Label>

                <Progress
                  percent={sadAvgD}
                  progress
                  precision={sadAvgD < 10 ? 0 : 1}
                  color="blue"
                />
              </Button>
              <Button
                onClick={() => {
                  this.setState({
                    angry: !this.state.angry,
                    sad: false,
                    happy: false
                  });
                }}
              >
                <Label>Angry</Label>

                <Progress
                  percent={angryAvgD}
                  progress
                  precision={angryAvgD < 10 ? 0 : 1}
                  color="red"
                />
              </Button>
              {this.state.happy === true ? (
                <MyComponent sentiment={"happy"} resp={this.state.respD} />
              ) : (
                ""
              )}
              {this.state.sad === true ? (
                <MyComponent sentiment={"sad"} resp={this.state.respD} />
              ) : (
                ""
              )}
              {this.state.angry === true ? (
                <MyComponent sentiment={"angry"} resp={this.state.respD} />
              ) : (
                ""
              )}
            </Card>
          </Grid.Column>
          <Grid.Column>
            <Card centered fluid>
              {/*<Label size='medium' color='blue' horizontal image>*/}
              {/*<Image size='medium' src={require("../resources/realDT.jpg")} inline />*/}
              {/*@RealMonaldTrump*/}
              {/*</Label>*/}
              <Card.Header>
                <Image
                  floated="left"
                  circular
                  size="tiny"
                  src={require("../resources/ming.jpg")}
                  inline
                />
                <Header>
                  {" "}
                  Ming Chow{" "}
                  <Label size="large" color="blue" horizontal>
                    @0xmchow{" "}
                  </Label>
                  <Button
                      color='twitter'

                      onClick={() => {
                      fetch(
                        "http://10.247.140.115:5000/getTweets/emotions/hello",
                        {
                          method: "GET",
                          headers: {
                            "Content-Type": "application/json"
                          }
                        }
                      )
                        .then(function(resp) {
                          console.log(resp + typeof resp);
                          return resp.json();
                        })
                        .then(response => {
                          // console.log(response);
                          let resp = JSON.parse(response);
                          console.log(resp);
                          // let id = "1051122475134804000";
                          // let id = "1051117589227851777";
                            let index = this.getRandomInt(tweetsM.length);
                            let id = tweetsM[index];
                          this.setState({ id: id, tweeted: true });
                            this.rerender();

                        })
                        .catch(err => {
                          // console.log("err" + err);
                        });
                    }}
                  >
                    Random Shit Ming Says
                  </Button>
                </Header>
              </Card.Header>
              <Button
                onClick={() => {
                  this.setState({
                    happy: !this.state.happy,
                    angry: false,
                    sad: false
                  });
                }}
              >
                <Label>Happiness</Label>
                <Progress
                  percent={happyAvgM}
                  progress
                  precision={happyAvgM < 10 ? 0 : 1}
                  color="green"
                />
              </Button>
              <Button
                onClick={() => {
                  this.setState({
                    sad: !this.state.sad,
                    angry: false,
                    happy: false
                  });
                }}
              >
                <Label>Sad</Label>

                <Progress
                  percent={sadAvgM}
                  progress
                  precision={sadAvgM < 10 ? 0 : 1}
                  color="blue"
                />
              </Button>
              <Button
                onClick={() => {
                  this.setState({
                    angry: !this.state.angry,
                    sad: false,
                    happy: false
                  });
                }}
              >
                <Label>Angry</Label>

                <Progress
                  percent={angryAvgM}
                  progress
                  precision={angryAvgM < 10 ? 0 : 1}
                  color="red"
                />
              </Button>
              {this.state.happy === true ? (
                <MyComponent sentiment={"happy"} resp={this.state.respM} />
              ) : (
                ""
              )}
              {this.state.sad === true ? (
                <MyComponent sentiment={"sad"} resp={this.state.respM} />
              ) : (
                ""
              )}
              {this.state.angry === true ? (
                <MyComponent sentiment={"angry"} resp={this.state.respM} />
              ) : (
                ""
              )}
            </Card>
          </Grid.Column>
        </Grid>
        <Segment basic />
        <Button
          circular
          size="large"
          icon="plus"
          onClick={() => {
            this.setState({ showinput: true });
          }}
        />
        {this.state.showinput ? (
          <input
            placeholder={"@accountName"}
            type="text"
            name="addaccount"
            value={"@accountName"}
          />
        ) : (
          ""
        )}
        <Divider />

        {this.state.tweeted ? (
          <div style={{ display: "flex", justifyContent: "center" }}>
            <TwitterTweetEmbed tweetId={this.state.id} />
          </div>
        ) : (
          ""
        )}
      </Container>
    );
  }
}
