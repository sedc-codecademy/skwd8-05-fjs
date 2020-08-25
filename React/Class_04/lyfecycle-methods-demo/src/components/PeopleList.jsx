import React, { Component } from "react";
import PersonComponent from "./PersonComponent";

export default class PeopleList extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        {this.props.people.map(person => (
          <PersonComponent onUserClick={this.props.onUserClick} {...person} />
        ))}
      </div>
    );
  }
}
