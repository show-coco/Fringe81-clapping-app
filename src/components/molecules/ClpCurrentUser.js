import React from "react";
import ClpIcon from "../atoms/ClpIcon";
import "../../assets/styles/ClpCurrentUser.css";
/* eslint no-unused-expressions: "off" */

class ClpCurrentUser extends React.Component {
  render() {
    return (
      <div className="ClpCurrentUser">
        <h1>Hello React</h1>
        <div className="user">
          <div>
            <ClpIcon uid={this.props.id}></ClpIcon>
            <select name="name" onChange={this.props.handleFromUserChange}>
              {this.props.options}
            </select>
          </div>
          <div className="user-info">
            拍手できる: {this.props.users[this.props.id].canClapNum}　
            拍手された: {this.props.users[this.props.id].clappedNum}
          </div>
        </div>
      </div>
    );
  }
}

export default ClpCurrentUser;
