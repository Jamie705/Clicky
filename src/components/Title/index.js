import React from "react";
import "./style.css";

function Title(props) {
  return <div className="title">
          <h1>To Start, click on a beer when ready! Win the game by drinking all the beers, but only drink them once.
             You loose if you drink the same beer twice. Have fun.</h1>
            <p id="winner">{
              props.children
            }
            </p>
          </div>;
}

export default Title;
