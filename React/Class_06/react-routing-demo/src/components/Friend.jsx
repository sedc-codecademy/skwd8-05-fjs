import React from "react";

const Friend = props => {
  console.log(props);
  return (
    <div>
      {props.children}
      <button onClick={() => props.onDelete(props.url)}> X </button>
    </div>
  );
};

export default Friend;
