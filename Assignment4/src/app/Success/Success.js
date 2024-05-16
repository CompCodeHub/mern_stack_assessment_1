import React, { Component } from "react";
import SuccessChild from "./Children/SuccessChild";
import SuccessStory from "./SuccessStory";

export default class Success extends Component {
  constructor(props) {
    super(props);

    this.randomVal = 0;
  }

  setValue = (value) => {
    console.log("Random value was: ", this.randomVal);
    this.randomVal = value;
    console.log("Random value is: ", this.randomVal);
  };

  render() {
    return (
      <>
        <h1>Some Success Quotes</h1>
        <blockquote className="blockquote">
          <p>
            Success is walking from failure to failure with no loss of
            enthusiasm.
          </p>
          <footer className="blockquote-footer">Winston Churchill</footer>
        </blockquote>
        <blockquote className="blockquote">
          <p>
            There are two types of people who will tell you that you cannot make
            a difference in this world: those who are afraid to try and those
            who are afraid you will succeed.
          </p>
          <footer className="blockquote-footer">Ray Goforth</footer>
        </blockquote>
        <blockquote className="blockquote">
          <p>
            Success is not the key to happiness. Happiness is the key to
            success. If you love what you are doing, you will be successful.
          </p>
          <footer className="blockquote-footer">Albert Schweitzer</footer>
        </blockquote>
        <blockquote className="blockquote">
          <p className="">
            When I thought I couldn’t go on, I forced myself to keep going. My
            success is based on persistence, not luck.
          </p>
          <footer className="blockquote-footer">Estee Lauder</footer>
        </blockquote>
        <hr />
        <SuccessChild
          name={"Suyash"}
          address={"House no. 1, Fake Street, Pune, Maharashtra, India"}
          storyComponent={SuccessStory}
        />
        <SuccessStory setValueInParent={this.setValue} />
      </>
    );
  }
}
