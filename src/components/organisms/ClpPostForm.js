import React from "react";
import ClpCurrentUser from "../molecules/ClpCurrentUser";
import ClpCommentForm from "../molecules/ClpCommentForm";

class ClpPostForm extends React.Component {
  render() {
    return (
      <div>
        <ClpCurrentUser
          handleFromUserChange={this.props.handleFromUserChange}
          options={this.props.options}
          id={this.props.fromUser.id}
          users={this.props.users}
        ></ClpCurrentUser>
        <ClpCommentForm
          options={this.props.toOptions}
          users={this.props.users}
          handleToUserChange={this.props.handleToUserChange}
          handleInputChange={this.props.handleInputChange}
          handleSubmit={this.props.handleSubmit}
          toUser={this.props.toUser}
        ></ClpCommentForm>
      </div>
    );
  }
}

export default ClpPostForm;
