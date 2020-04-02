import React from "react";
import "../../assets/styles/ClpIcon.css"

function ClpIcon(props) {
  return (
    <div className="ClpIcon">
      <img
        src={require(`../../assets/images/icon${props.uid}.png`)}
        alt="icon"
        className="icon"
      />
    </div>
  );
}

export default ClpIcon;
