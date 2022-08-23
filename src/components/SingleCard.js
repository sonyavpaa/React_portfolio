import React, { useState } from "react";
import "../style/SingleCard.css";

const SingleCard = (props) => {
  return (
    <div className={props.active} onClick={props.onclick}>
      <div className="singleCardMain">
        {" "}
        <p>{props.text}</p>
        <p className="cardLink">{props.url}</p>
      </div>
    </div>
  );
};

export default SingleCard;
