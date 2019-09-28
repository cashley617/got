import React from "react";
import "./Characters.css";

const Characters = props => (
  <div className="card col-sm-6 col-lg-3" onClick={props.clickCard}>
    <div className="img-container">
      <img id={props.name} alt={props.name} src={props.image} />
    </div>
  </div>
);

export default Characters;
