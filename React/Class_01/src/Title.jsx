import React, { Component } from "react";

class Title extends Component {
  state = {
    heading: "FIRST TITLE",
    age: 23,
    group: "G8",
  };
  render() {
    const name = "From variable title";
    // const { title, description } = this.props;
    const title = this.props.title;
    // const description = this.props.description;
    return <h1>{title}</h1>;
  }
}

export default Title;
