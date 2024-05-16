import React, { Component } from "react";

export default class Random extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
  }

  // Runs only once at first when component mounts
  componentDidMount() {
    console.log("Random Component mounted!");
  }

  // Runs at end before component unmounts
  componentWillUnmount() {
    console.log("Random Component Unmounted!");
  }

  // Runs after a component is re-rendered (updated)
  componentDidUpdate(prevProps, prevState) {
    console.log("Random Component has been updated!");
  }

  // Gets previous state and props before component is about to re-render
  getSnapshotBeforeUpdate(prevState, prevProps) {
    console.log("Random Component is about to update!");
    return {
      prevState,
      prevProps,
    };
  }

  // Returns a boolean to decide whether to re-render the component upon state change
  shouldComponentUpdate(nextProps, nextState) {
    // Only re-render if count is updated
    if (nextState.count != this.state.count) {
      return true;
    } else {
      return false;
    }
  }

  incrementCounter = () => {
    this.setState((prevState) => ({
      count: prevState.count + 1,
    }));
  };

  render() {
    console.log("Random component is rendering");
    return (
      <>
        <h2>Random Component</h2>
        <h3>Counter: </h3>
        <h4>{this.state.count}</h4>
        <button
          type="button"
          className="btn btn-primary"
          onClick={this.incrementCounter}
        >
          Increment
        </button>
      </>
    );
  }
}
