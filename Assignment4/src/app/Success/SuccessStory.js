import React, { Component } from "react";

const SuccessStory = (props) => {


  const setValue = () => {
    props.setValueInParent(100);
  }

  return (
    <>
      <h2>Success Story</h2>
      <button type="button" className="btn btn-primary" onClick={setValue}>Click to set value</button>
    </>
  );
};

export default SuccessStory;
