import React from "react";
import "./FriendCard.css";

const FriendCard = props => (
  <div className="card col-sm-6 col-lg-3" onClick={props.characterClick}>
    <div className="img-container">
      <img id={props.name} alt={props.name} src={props.image} />
    </div>
  </div>
);

export default FriendCard;
