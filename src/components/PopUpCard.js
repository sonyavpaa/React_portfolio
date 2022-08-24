import React from "react";
import "../style/PopUpCard.css";

const PopUpCard = (props) => {
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

export default PopUpCard;
