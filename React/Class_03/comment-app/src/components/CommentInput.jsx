import React, { Component } from "react";
import PropTypes from "prop-types";

class CommentInput extends Component {
  constructor(props) {
    super(props);

    // How we create refs in REACT (always in constructor/cant be used in functional components - if we are not taking in consideration hooks)
    this.inputSenderRef = React.createRef();
    this.inputMessageRef = React.createRef();
  }

  //Lyfecycle method (to be discussed next class)
  componentDidMount() {
    // How we access the DOM node of the element on which is used the ref (keyword: current)
    this.inputSenderRef.current.focus();
    console.log(this.inputSenderRef.current);
  }

  //Lyfecycle method (to be discussed next class)
  componentDidUpdate() {
    console.log(this.inputSenderRef.current.value);
    console.log(this.inputMessageRef.current.value);
  }
  render() {
    // note form is used from bootstrap and applied its styling
    return (
      <div className="comment-input">
        <form onSubmit={this.props.onSubmitForm}>
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Sender</label>
            <input
              type="text"
              // how we bind the ref with the component (in this case input element)
              ref={this.inputSenderRef}
              name="sender"
              className="form-control"
              id="exampleInputEmail1"
              value={this.props.sender}
              onChange={this.props.handleInputChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputPassword1">Message</label>
            <input
              type="text"
              name="message"
              // how we bind the ref with the component (in this case input element)
              ref={this.inputMessageRef}
              className="form-control"
              id="exampleInputPassword1"
              value={this.props.message}
              onChange={this.props.handleInputChange}
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Send
          </button>
        </form>
      </div>
    );
  }
}

// PropTypes for checking if all props recieved are in correct format
// can used .isRequired at the end if its not optional
// will show warning message in console if one of the props is not in correct format or its set as required but has no value
CommentInput.propTypes = {
  sender: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
  handleInputChange: PropTypes.func.isRequired,
  onSubmitForm: PropTypes.func.isRequired,
};

export default CommentInput;
