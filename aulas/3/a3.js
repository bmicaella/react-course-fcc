import React from "react";
import ReactDom from "react-dom";

function Greeting() {
  return (
    <div>
      <Person />
      <Lyrics />
    </div>
  );
}

const Person = () => <h1>doja cat, babe</h1>; //implicit return
const Lyrics = () => {
  //explicit return
  return <p>just like that, come my way</p>;
};

ReactDom.render(<Greeting />, document.getElementById("root"));
