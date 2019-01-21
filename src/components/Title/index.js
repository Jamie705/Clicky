import React from "react";
import "./style.css";

function Title(props) {
  return <div className="title">
          <h1>Click on any beer when read! You loose if you pick the same beer twice.</h1>
            <p id="winner">{
              props.children
            }
            </p>
          </div>;
}

export default Title;
