import React from "react";

export default class Yoda extends React.Component {
  state = {
    name: "Yoda",
  };

  render() {
    return <BabyYoda name={this.state.name} />;
  }
}

// This is a child (stateless) component WHICH HAS NO STATE!
class BabyYoda extends React.Component {
  // This child component will render information which was given to it by A PARENT COMPONENT
  render() {
    return <h1>{this.props.name}, I am.</h1>;
  }
}
