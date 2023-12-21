import React from "react";

export default class City extends React.Component {
  state = {
    city: "Zagreb",
    country: "Hrvatska",
  };

  changeState = () => {
    const newCity = this.state.city === "Zagreb" ? "Osijek" : "Zagreb";
    this.setState({ city: newCity });
  };

  render() {
    return (
      <div>
        <h1>City: {this.state.city}</h1>
        <h1>Country: {this.state.country}</h1>
        <button onClick={this.changeState}>Change city</button>
      </div>
    );
  }
}
