import React from "react";

function ClpIcon(props) {
  return (
    <div>
      <img src={require(`../../assets/images/icon${props.uid}.png`)} alt="icon" />
    </div>
  );
}

export default ClpIcon;