import React from "react";
import Title from "./Title";

const Movie = props => {
  const { title, rating, duration } = props;
  return (
    <div>
      <Title movieTitle={title} />
      <div>
        <p>RATING: {rating}*</p>
        <p>DURATION: {duration} minutes</p>
      </div>
    </div>
  );
};

export default Movie;
