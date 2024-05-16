import React, { Component } from "react";

export default class UserSignIn extends Component {
  constructor(props) {
    super(props);

    this.emailRef = React.createRef();
    this.passRef = React.createRef();
  }

  loginHandler = (evt) => {
    evt.preventDefault();
    console.log("Email is: ", this.emailRef.current.value);
    console.log("Password is: ", this.passRef.current.value);
  }

  render() {
    return (
      <>
        <form onSubmit={this.loginHandler}>
          <div className="mb-3">
            <label className="form-label">Email address</label>
            <input type="email" className="form-control" ref={this.emailRef} />
          </div>
          <div className="mb-3">
            <label className="form-label">Password</label>
            <input
              type="password"
              className="form-control"
              ref={this.passRef}
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Log In
          </button>
        </form>
      </>
    );
  }
}
