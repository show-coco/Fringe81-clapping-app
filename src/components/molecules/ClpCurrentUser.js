import React from "react";
import ClpIcon from '../atoms/ClpIcon'

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
        <ClpIcon uid={1}></ClpIcon>
      </div>
    );
  }
}

export default ClpCurrentUser;
