import React from "react";
import ClpIcon from "../atoms/ClpIcon";
import ClpClapIcon from "../atoms/ClpClapIcon";

import "../../assets/styles/ClpPost.css";

class ClpPost extends React.Component {
  constructor(props) {
    super(props);
    this.handleOnClick = this.handleOnClick.bind(this);
  }

  handleOnClick() {
    
  }

  render() {
    return (
      <div className="ClpPost">
        <ClpIcon uid={this.props.fromUserId}></ClpIcon>
        <ClpIcon uid={this.props.toUserId}></ClpIcon>
        {this.props.text}
        <ClpClapIcon></ClpClapIcon>
        {this.props.clappedNum}
      </div>
    );
  }
}

export default ClpPost;
