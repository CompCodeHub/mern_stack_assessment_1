import React from "react";

const SuccessChild = (props) => {
  return (
    <>
      <h2>Success Child Component</h2>
      <p>Name: {props.name}</p>
      <p>Address: {props.address}</p>
    </>
  );
};

export default SuccessChild;
