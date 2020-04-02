import React from "react";
import ClpIcon from "../atoms/ClpIcon";
import ClpClapIcon from "../atoms/ClpClapIcon";
import "../../assets/styles/ClpPost.css";

class ClpPost extends React.Component {
  render() {
    return (
      <div className="ClpPost">
        <div>
          <div className="from-user">
            <div className="from-user-icon">
              <ClpIcon uid={this.props.fromUserId}></ClpIcon>
            </div>
            <div className="from-user-name">Mayuko</div>
          </div>
          <div className="text">{this.props.text}</div>
          <ClpClapIcon
            id={this.props.id}
            handleClickClapIcon={this.props.handleClickClapIcon}
          ></ClpClapIcon>
          {this.props.clappedNum}
        </div>
        <div className="arrow"><i className="material-icons">send</i></div>
        <div>
          <div className="to-user-icon">
            <ClpIcon
              className="to-user-icon"
              uid={this.props.toUserId}
            ></ClpIcon>
          </div>
        </div>
      </div>
    );
  }
}

export default ClpPost;
