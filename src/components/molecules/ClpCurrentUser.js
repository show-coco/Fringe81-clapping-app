import React from "react";
import ClpIcon from "../atoms/ClpIcon";

class ClpCurrentUser extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      canClapNum: null,
      clappedNum: null
    };
  }
  render() {
    return (
      <div>
        <h1>Hello React</h1>
        <select name="name">
          <option value="Nakata">Nakata</option>
          <option value="Rachel">Rachel</option>
          <option value="Kiyoshi">Kiyoshi</option>
          <option value="Takada">Takada</option>
        </select>
        <ClpIcon uid={1}></ClpIcon>
      </div>
    );
  }
}

export default ClpCurrentUser;
