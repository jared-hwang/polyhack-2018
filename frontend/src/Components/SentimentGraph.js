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

export default class SentimentGraph extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }


    render() {
        return (
            <Image src={require("../resources/graph.jpg")}/>
        );
    }
}
