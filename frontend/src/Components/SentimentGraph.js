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
let LineChart = require("react-chartjs").Line;

export default class SentimentGraph extends Component {
  constructor(props) {
    super(props);
    this.state = {
        jsondata: this.props.jsonData
    };
  }

  render() {
    console.log("1" + typeof this.props);
    let jsonData = this.state.jsondata;

    console.log("2" + jsonData);
    let yaxis = []; // sentiment
    let xaxis = []; // dates

    jsonData.forEach(function(element) {
      xaxis.push(element["date"]);
      yaxis.push(element[this.props.sentiment]);
    });

    // var ctx = $("#line-chartcanvas");
    let data = {
      labels: xaxis,
      datasets: [
        {
          data: yaxis
        }
      ]
    };

    let MyComponent = React.createClass({
      render: function() {
        return <LineChart data={data} width="600" height="250" />;
      }
    });

    // let lineChart = new Chart(ctx, {
    //     type: "line",
    //     data: {
    //         labels: xaxis,
    //         datasets: [
    //             {
    //                 data: yaxis
    //             },
    //         ]
    //     }
    // });

    return <MyComponent />;
  }
}
