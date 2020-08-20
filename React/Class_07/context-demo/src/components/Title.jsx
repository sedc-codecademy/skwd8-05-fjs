import React from "react";
import { MoviesContext } from "../MoviesContext";

const Title = props => {
  const { movieTitle } = props;
  return (
    // Way we use context consumer to get all data
    <MoviesContext.Consumer>
      {context => {
        const { title } = context;
        return (
          <React.Fragment>
            <h1>{title}</h1>
            <h4>{movieTitle}</h4>
          </React.Fragment>
        );
      }}
    </MoviesContext.Consumer>
  );
};

export default Title;
