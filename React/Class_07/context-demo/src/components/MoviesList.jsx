import React from "react";
import Movie from "./Movie";
import { MoviesContextConsumer } from "../MoviesContext";

const MoviesList = props => {
  console.log(props);
  const { movies } = props;
  return (
    <div>
      {movies.map(movie => (
        <Movie {...movie} />
      ))}
    </div>
  );
};

// using the HOC MoviesContextConsumer
export default MoviesContextConsumer(MoviesList);
