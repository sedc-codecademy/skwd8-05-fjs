import React, { Component } from "react";
import { Link } from "react-router-dom";

class Friends extends Component {
  constructor(props) {
    super(props);
    this.state = {
      friends: [],
    };
  }
  componentDidMount() {
    this.fetchFriends();
  }

  fetchFriends = async () => {
    const data = await fetch("https://swapi.dev/api/people");
    const result = await data.json();
    this.setState({
      friends: result.results,
    });
  };
  render() {
    console.log(this.state.friends);
    const friendsStyle = {
      padding: "100px",
    };
    return (
      <div style={friendsStyle}>
        {this.state.friends.map((friend, index) => (
          <h1 key={index}>
            <Link to={`/friend/${index + 1}`}> {friend.name}</Link>
          </h1>
        ))}
      </div>
    );
  }
}

export default Friends;
