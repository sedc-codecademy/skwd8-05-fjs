import React, { Component } from "react";

export const MoviesContext = React.createContext();

class MoviesContextProvider extends Component {
  //   constructor(props) {
  //     super(props);
  //     this.state = {
  //       movies: [
  //         {
  //           title: "Titanic",
  //           rating: 3,
  //           duration: 126,
  //         },
  //         {
  //           title: "Avengers",
  //           rating: 4,
  //           duration: 180,
  //         },
  //       ],
  //       title: "MOVIE TITLE:",
  //     };
  //   }

  render() {
    // we can add value from component where we use the provider
    return (
      <MoviesContext.Provider value={this.props.retrievedValues}>
        {this.props.children}
      </MoviesContext.Provider>
    );
  }
}

export default MoviesContextProvider;

// Higher order component that accepts Component as parametar get all data from context and returns new component with
// added context data as props
export const MoviesContextConsumer = Component => prop => {
  console.log(prop);
  return (
    <MoviesContext.Consumer>
      {context => <Component {...prop} {...context} />}
    </MoviesContext.Consumer>
  );
};
