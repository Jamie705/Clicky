import React from "react";
import "./style.css";

function BeerCard(props) {
  return (
    <div>
      < img className="cards" alt = {
        props.name
      }
      src = {
        props.image
      }
      width = "200px"
      height = "215px"
      value = {
        props.id
      }
      onClick = {
        () =>
        props.clickedBeer(props.id)
      }
      />
    </div>
  );
}

export default BeerCard;
