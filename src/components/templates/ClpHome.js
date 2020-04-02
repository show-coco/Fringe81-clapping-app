import React from "react";
import ClpPostForm from "../organisms/ClpPostForm";
import ClpPosts from "../organisms/ClpPosts";

class ClpHome extends React.Component {
  constructor(props) {
    super(props);
    this.handleFromUserChange = this.handleFromUserChange.bind(this);
    this.handleToUserChange = this.handleToUserChange.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleClickClapIcon = this.handleClickClapIcon.bind(this);
    this.users = this.props.users;
    this.posts = this.props.posts;
    this.state = {
      fromUser: {
        id: this.users[0].id,
        name: this.users[0].name
      },
      toUser: {
        id: this.users[0].id,
        name: this.users[0].name,
        text: ""
      }
    };
  }

  handleFromUserChange(event) {
    const newFromUser = Object.assign({}, this.state.fromUser);
    newFromUser.id = event.target.value;
    newFromUser.name = this.users[event.target.value].name;
    this.setState({
      fromUser: newFromUser
    });
  }

  handleToUserChange(event) {
    const newToUser = Object.assign({}, this.state.toUser);
    newToUser.id = event.target.value;
    newToUser.name = this.users[event.target.value].name;
    this.setState({
      toUser: newToUser
    });
  }

  handleInputChange(event) {
    const newToUser = Object.assign({}, this.state.toUser);
    newToUser.text = event.target.value;
    this.setState({
      toUser: newToUser
    });
  }

  handleSubmit(event) {
    let posts = JSON.parse(localStorage.getItem("posts"));
    const prevId = posts.length - 1;
    const post = {
      id: prevId + 1,
      toUserId: this.state.toUser.id,
      fromUserId: this.state.fromUser.id,
      text: this.state.toUser.text,
      clappedNum: 0
    };
    posts.push(post);
    localStorage.setItem("posts", JSON.stringify(posts));
    // event.preventDefault();
  }

  handleClickClapIcon(event) {
    console.log(this.users)
    this.users[this.state.fromUser.id].canClapNum--;
    let post = this.posts[event.currentTarget.value];
    this.users[post.toUserId].clappedNum++;
    post.clappedNum++;
    localStorage.setItem("posts", JSON.stringify(this.posts));
    localStorage.setItem("users", JSON.stringify(this.users));
    event.preventDefault();
  }

  render() {
    const users = this.props.users;
    const options = users.map(user => {
      return (
        <option value={user.id} key={user.id}>
          {user.name}
        </option>
      );
    });

    return (
      <div>
        <ClpPostForm
          options={options}
          handleFromUserChange={this.handleFromUserChange}
          handleToUserChange={this.handleToUserChange}
          handleInputChange={this.handleInputChange}
          handleSubmit={this.handleSubmit}
          fromUser={this.state.fromUser}
          toUser={this.state.toUser}
          users={users}
        ></ClpPostForm>
        <ClpPosts handleClickClapIcon={this.handleClickClapIcon}></ClpPosts>
      </div>
    );
  }
}

export default ClpHome;
