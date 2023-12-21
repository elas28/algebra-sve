import React from "react";

export default class Simpsons extends React.Component {
  state = {
    name: "Lisa",
    bestFriend: "Janey Powell",
    lovesSchool: true,
    image: "https://upload.wikimedia.org/wikipedia/en/e/ec/Lisa_Simpson.png",
  };

  changeCharacter = () => {
    this.state.name === "Lisa"
      ? this.setState({
          name: "Bart",
          bestFriend: "Milhouse",
          lovesSchool: false,
          image:
            "https://upload.wikimedia.org/wikipedia/en/a/aa/Bart_Simpson_200px.png",
        })
      : this.setState({
          name: "Lisa",
          bestFriend: "Janey Powell",
          lovesSchool: true,
          image:
            "https://upload.wikimedia.org/wikipedia/en/e/ec/Lisa_Simpson.png",
        });
  };

  render() {
    return (
      <Child
        name={this.state.name}
        bestFriend={this.state.bestFriend}
        lovesSchool={this.state.lovesSchool}
        buttonClick={this.changeCharacter}
        image={this.state.image}
      />
    );
  }
}

class Child extends React.Component {
  render() {
    return (
      <div className={this.props.name === "Lisa" ? "bart" : "lisa"}>
        <img src={this.props.image} alt={this.props.name} />
        <p>
          Hi, my name is {this.props.name}. My best friend is{" "}
          {this.props.bestFriend} and my mother is Marge Simpson. I really,
          really{" "}
          {this.props.lovesSchool ? "do love school." : "don't love school."}
        </p>
        <button onClick={this.props.buttonClick}>Change character</button>
      </div>
    );
  }
}
