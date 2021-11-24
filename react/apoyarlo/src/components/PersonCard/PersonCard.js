import React, { Component } from "react";

class Personcard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      age: this.props.age,
    };
  }

  happyBirthday = () => {
    this.setState({ age: this.state.age + 1 });
  };

  render() {
    const { firstName, lastName, hairColor } = this.props;
    return (
      <div>
        <h1>
          {lastName}, {firstName}
        </h1>
        <div>Age: {this.state.age}</div>
        <div>Hair color: {hairColor}</div>
        <button onClick={this.happyBirthday}>
          Happy birthday for {firstName}!
        </button>
      </div>
    );
  }
}

export default Personcard;
