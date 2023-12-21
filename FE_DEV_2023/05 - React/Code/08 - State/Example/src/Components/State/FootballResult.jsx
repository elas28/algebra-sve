import React from "react";

// Stateful component - THIS IS A PARENT
export default class FootballResult extends React.Component {
  state = {
    hajduk: 0,
    dinamo: 0,
  };

  changeHajdukResult = () => {
    this.setState({ hajduk: this.state.hajduk + 1 });
  };

  changeDinamoResult = () => {
    this.setState({ dinamo: this.state.dinamo + 1 });
  };

  render() {
    return (
      <ShowResult
        hajduk={this.state.hajduk}
        dinamo={this.state.dinamo}
        dinamoScored={this.changeDinamoResult}
        hajdukScored={this.changeHajdukResult}
      />
    );
  }
}

// Stateless Component - THIS IS A CHILD COMPONENT
function ShowResult({ dinamo, hajduk, dinamoScored, hajdukScored }) {
  return (
    <>
      <p>
        Current result of the game is: {dinamo} (Dinamo) - {hajduk} (Hajduk)
      </p>
      <button onClick={dinamoScored}>Dinamo Scored</button>
      <button onClick={hajdukScored}>Hajduk Scored</button>
    </>
  );
}
