import React from "react";
import ClpIcon from "../atoms/ClpIcon";
import "../../assets/styles/ClpCommentForm.css";

class ClpCommentForm extends React.Component {
  render() {
    return (
      <div className="ClpCommentForm">
        <div className="user">
          <div>
            <ClpIcon uid={this.props.id}></ClpIcon>
            <select name="name" onChange={this.props.handleToUserChange}>
              {this.props.options}
            </select>
          </div>
          <form className="comment-form" onSubmit={this.props.handleSubmit}>
            <textarea
              value={this.props.text}
              onChange={this.props.handleInputChange}
              placeholder="あなたの気持ち相手に伝えよう！"
            />
            <input type="submit" value="投稿" />
          </form>
        </div>
      </div>
    );
  }
}

export default ClpCommentForm;
