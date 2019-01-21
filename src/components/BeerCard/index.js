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
      {/* <div className="card-body">
        <p className="card-text">
          <strong>Name:</strong> {
            props.name
            }
        </p>
      </div> */}
    </div>
  );
}

export default BeerCard;
