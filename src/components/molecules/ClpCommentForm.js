import React from "react";
import ClpIcon from "../atoms/ClpIcon";
import "../../assets/styles/ClpCommentForm.css";

class ClpCommentForm extends React.Component {
  render() {
    return (
      <div className="ClpCommentForm">
      <h2 className="sub-title">相手</h2>
        <div className="user">
          <div>
            <ClpIcon uid={this.props.toUser.id}></ClpIcon>
            <select name="name" onChange={this.props.handleToUserChange}>
              {this.props.options}
            </select>
          </div>
          <form className="comment-form" onSubmit={this.props.handleSubmit}>
            <textarea
              value={this.props.toUser.text}
              onChange={this.props.handleInputChange}
              placeholder="あなたの気持ち相手に伝えよう！"
            />
            <button type="submit" className="submit-button">投稿</button>
          </form>
        </div>
      </div>
    );
  }
}

export default ClpCommentForm;
