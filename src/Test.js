import React, { Component } from "react";

class Test extends Component {
  render() {
    // console.log("test render");
    return <div>{this.props.content}</div>;
  }
  componentWillReceiveProps() {
    console.log("componentWillReceiveProps");
  }
}

export default Test;
