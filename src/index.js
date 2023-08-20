import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

//let itemNumber = 23;

//function Hi(props) {
 // return (
 //   <div>
  //    Hello <strong> {props.name} </strong>
  //    <h1>This is My First React App</h1>
  //    <ul className="myList" id="23">
  //      <li>Item Number 1</li>
  //      <li>Item Number 2</li>
   //     <li>Item Number 3</li>
   //     <li>Item Number 4</li>
   //     <li>Item Number {5 + 10}</li>
   //     <li>Item Number {++itemNumber}</li>
   //   </ul>
   // </div>
  //);
//}

//ReactDOM.render(<Hi name="Raza"/>, document.querySelector("#root"));

function Post(props) {
  return (
    <div ClassName="facebookpost">
      <h3>{props.name}</h3>
      <span>3 july</span>
      <p>{props.text}</p>
      <img width={200} src={props.imgUrl}alt=""></img>
      <br></br>
      <button>Like</button>
      <button>Comment</button>
      <button>Share</button>
    </div>
  );
}

ReactDOM.render(
<div>
  <Post imgUrl={"https://www.puzzel.com/wp-content/uploads/2022/05/open24h.png"} text={"a well-organized and reputed organization where I can utilize all my efforts"} name={"Saleem"} />
  <Post imgUrl={"https://fivonc.tech/wp-content/uploads/2021/08/friendly-chatbot.jpg"} text={"growing abilities and creativity in such that causes the economic growth"} name={"Salman"} />
  <Post imgUrl={"https://static.vecteezy.com/system/resources/previews/004/996/790/original/robot-chatbot-icon-sign-free-vector.jpg"} text={" Rapidly progress and that provide the expansion and solidity to the firm"} name={"Nabeel"} />
  <Post imgUrl={"https://www.esds.co.in/home-images/AI/chatbotesds.jpg"} text={"I can implement my ideas in the modern business world to enjoy the challenging environment"} name={"Kashif"} />
</div>, document.querySelector("#root"));