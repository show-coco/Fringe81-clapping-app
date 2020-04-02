import React from "react";
import ClpIcon from "../atoms/ClpIcon";
import ClpClapIcon from "../atoms/ClpClapIcon";
import "../../assets/styles/ClpPost.css";

class ClpPost extends React.Component {
  render() {
    return (
      <div className="ClpPost">
        <ClpIcon uid={this.props.fromUserId}></ClpIcon>
        <ClpIcon uid={this.props.toUserId}></ClpIcon>
        {this.props.text}
        <ClpClapIcon
          id={this.props.id}
          handleClickClapIcon={this.props.handleClickClapIcon}
        ></ClpClapIcon>
        {this.props.clappedNum}
      </div>
    );
  }
}

export default ClpPost;
