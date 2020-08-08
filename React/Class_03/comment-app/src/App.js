import React, { Component } from "react";
import "./App.css";
import CommentInput from "./components/CommentInput";
import { Message } from "./models/Message";
import MessageComponent from "./components/MessageComponent";

class App extends Component {
  constructor(props) {
    super(props);

    // set initial values
    this.state = {
      sender: "",
      message: "",
      messages: [],
    };

    // if we didnt use arrow functions
    //this.handleSender = this.handleSender.bind(this);
  }

  handleOnChangeInput = e => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  onSubmitCommentForm = e => {
    e.preventDefault();
    this.setState({
      sender: "",
      message: "",
      // syntax for adding new element in array and keep all the rest elements
      messages: [
        ...this.state.messages,
        new Message(this.state.sender, this.state.message),
      ],
    });
  };
  render() {
    // with {...message} we are extracting everything that Message model has and pass it to the MessageComponent as props
    return (
      <div className="App">
        <CommentInput
          sender={this.state.sender}
          message={this.state.message}
          handleInputChange={this.handleOnChangeInput}
          onSubmitForm={this.onSubmitCommentForm}
        />
        {this.state.messages.map(message => (
          <MessageComponent {...message} />
        ))}
      </div>
    );
  }
}

export default App;
