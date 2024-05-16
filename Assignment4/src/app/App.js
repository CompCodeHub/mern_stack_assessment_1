import React, { Component } from "react";
import Success from "./Success/Success";
import UserSignIn from "./User/UserSignIn";
import Random from "./Random/Random";

export default class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-6 mx-auto my-auto">
            <Success />
            <hr />
            <UserSignIn />
            <hr />
            <Random />
          </div>
        </div>
      </div>
    );
  }
}
