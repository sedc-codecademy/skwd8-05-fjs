import React, { Component } from "react";
import axios from "axios";
import PeopleList from "./components/PeopleList";
import PersonComponent from "./components/PersonComponent";
import "./App.css";

class App extends Component {
  // constructor is called first
  constructor(props) {
    super(props);

    this.state = {
      people: [],
      date: new Date().toLocaleString(),
      selectedPerson: null,
    };
  }

  // called after render method
  componentDidMount() {
    // used from external library "axios" for making http requests
    // needs to be instralled and imported in the file where its used
    axios.get("https//local/product/akshfklas").then(res => {
      if (res.status === 200) {
        this.setState({
          people: res.data.results,
        });
      }
    });
    this.updateTimeInteval = setInterval(this.updateTime, 10000);
  }
  // called when some props or state are changed
  // decides if component should update
  shouldComponentUpdate(prevProps, prevState) {
    if (prevState.date !== this.state.date) {
      return false;
    }
    return true;
  }

  // called after component is updated
  componentDidUpdate(prevProps, prevState) {
    if (prevState.date !== this.state.date) {
      alert(`Date changed. `);
    }
    if (
      prevState.selectedPerson &&
      prevState.selectedPerson.name !== this.state.selectedPerson.name
    ) {
      alert("selected person changed");
    }
  }
  updateTime = () => {
    this.setState({
      date: new Date().toLocaleString(),
    });
  };

  // called just before component unmounts
  componentWillUnmount() {
    clearInterval(this.updateTimeInteval);
  }

  handlePersonClick = url => {
    axios.get(url).then(res => {
      if (res.status === 200) {
        this.setState({
          selectedPerson: res.data,
        });
      }
    });
  };

  render() {
    return (
      <div className="App">
        <div>{this.state.date}</div>
        <div>
          <PeopleList
            onUserClick={this.handlePersonClick}
            people={this.state.people}
          />
        </div>
        <h2>Selected Person: </h2>
        {this.state.selectedPerson ? (
          <div>
            <PersonComponent
              onUserClick={this.handlePersonClick}
              {...this.state.selectedPerson}
            />
          </div>
        ) : (
          <div> No selected user!</div>
        )}
      </div>
    );
  }
}

export default App;
