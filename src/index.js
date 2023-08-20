import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

let itemNumber = 23;

function Hi(props) {
  return (
    <div>
      Hello <strong> {props.name} </strong>
      <h1>This is My First React App</h1>
      <ul className="myList" id="23">
        <li>Item Number 1</li>
        <li>Item Number 2</li>
        <li>Item Number 3</li>
        <li>Item Number 4</li>
        <li>Item Number {5 + 10}</li>
        <li>Item Number {++itemNumber}</li>
      </ul>
    </div>
  );
}

ReactDOM.render(<Hi name="Raza"/>, document.querySelector("#root"));