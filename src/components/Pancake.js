import React from "react";
import PopUpCard from "./PopUpCard";
import { AdvancedImage } from "@cloudinary/react";

const Pancake = (props) => {
  return (
    <div
      id={props.id}
      className={`pancakes pancakeContainer${props.id}`}
      onMouseEnter={props.onMouseEnter}
      onMouseLeave={props.onMouseLeave}
      onClick={props.click}
    >
      <AdvancedImage
        className={`pancake${props.id}`}
        alt="pancake"
        cldImg={props.img}
      />

      {/* <img
        className={`pancake${props.id}`}
        src={require("../assets/img/pancake_01.jpg")}
        alt="pancakes"
      /> */}

      <div className={`pancaketext pancaketext${props.idRoman}`}>
        <p className="pancakeP">PANCAKE {props.idRoman}</p>
      </div>

      <PopUpCard
        active={props.popUpHidden}
        url={props.url}
        text={props.popUpCardText}
      />
    </div>
  );
};

export default Pancake;
