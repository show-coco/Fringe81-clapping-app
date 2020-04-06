import React from "react";
import ClpIcon from "../atoms/ClpIcon";
import ClpClapIcon from "../atoms/ClpClapIcon";
import "../../assets/styles/ClpPost.css";
/* eslint no-unused-expressions: "off" */

class ClpPost extends React.Component {
  constructor(props) {
    super(props);
    this.handleOnMouseOver = this.handleOnMouseOver.bind(this);
    this.handleOnMouseOut = this.handleOnMouseOut.bind(this);
    this.clapUsers = React.createRef();
  }

  handleOnMouseOver() {
    this.clapUsers.current.className = "clap-users";
  }

  handleOnMouseOut() {
    this.clapUsers.current.className = "closed";
  }

  render() {
    const list = this.props.post.clapUsers.map(user => {
      console.log(user.clapUserId)
      return (
        <li key={user.clapUserId}>
          {this.props.users[user.clapUserId].name} {user.count}
        </li>
      );
    });

    return (
      <div className="ClpPost">
        <div className="inner">
          <div className="from-user">
            <div className="from-user-icon">
              <ClpIcon uid={this.props.post.fromUserId}></ClpIcon>
            </div>
            <div className="from-user-name">Mayuko</div>
          </div>
          <div className="text">{this.props.post.text}</div>
          <ClpClapIcon
            id={this.props.id}
            handleClickClapIcon={this.props.handleClickClapIcon}
            canClapNum={this.props.post.canClapNum}
          ></ClpClapIcon>
          <span
            onMouseOver={this.handleOnMouseOver}
            onMouseOut={this.handleOnMouseOut}
          >
            {this.props.post.clappedNum}
          </span>
          <span ref={this.clapUsers} className="closed">
            <ul>{list}</ul>
          </span>
          <span className="created-at">{this.props.post.createdAt}</span>
        </div>
        <div className="arrow">
          <i className="material-icons">send</i>
        </div>
        <div>
          <div className="to-user-icon">
            <ClpIcon
              className="to-user-icon"
              uid={this.props.post.toUserId}
            ></ClpIcon>
          </div>
        </div>
      </div>
    );
  }
}

export default ClpPost;
