import React from "react";

const Description = props => {
  const { description } = props;
  return (
    <div>
      <h2>{description}</h2>
      <p> This is some additional info from Body component ......</p>
    </div>
  );
};

export default Description;
