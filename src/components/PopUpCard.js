import React from "react";
import "../style/PopUpCard.css";

const PopUpCard = (props) => {
  return (
    <div className={props.active} onClick={props.onclick}>
      <div className="singleCardMain">
        <p>{props.text}</p>
        <p className="cardLink">{props.url}</p>

        <p className="cardSrcLink">{props.src}</p>
      </div>
    </div>
  );
};

export default PopUpCard;
