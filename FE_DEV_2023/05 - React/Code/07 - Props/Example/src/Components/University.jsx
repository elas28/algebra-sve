import React from "react";

export default class University extends React.Component {
  render() {
    const { rank } = this.props; // Defining rank as a props
    return (
      <div className="university-data">
        <p>University name: {this.props.name}</p>
        <p>University location: {this.props.location}</p>
        <p>University rank: {rank}</p>
      </div>
    );
  }
}
