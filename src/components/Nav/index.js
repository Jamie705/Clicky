import React from "react";
import "./style.css";

function Nav (props) {
  return   <header>
              <nav className="navbar navbar-collapse fixed-top">
                <p>{
                  props.children
                  }
                </p>
              </nav>
            </header>
}

export default Nav;
