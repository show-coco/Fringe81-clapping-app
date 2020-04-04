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
    this.toOptions = [];
    this.state = {
      fromUser: {
        id: this.props.users[0].id,
        name: this.props.users[0].name,
        canClapNum: this.props.users[0].canClapNum,
        clappedNum: this.props.users[0].clappedNum
      },
      toUser: {
        id: this.props.users[1].id,
        name: this.props.users[1].name,
        text: ""
      },
      posts: this.props.posts,
      users: this.props.users
    };
  }

  handleFromUserChange(event) {
    const newFromUser = Object.assign({}, this.state.fromUser);
    const newToUser = Object.assign({}, this.state.toUser);
    newFromUser.id = event.target.value;
    newFromUser.name = this.state.users[event.target.value].name;
    this.setState({
      fromUser: newFromUser
    });

    const users = this.props.users;
    if (newFromUser.id != 0) {
      newToUser.id = users[0].id;
      newToUser.name = users[0].name;
    } else {
      newToUser.id = users[1].id;
      newToUser.name = users[1].name;
    }
    this.setState({ toUser: newToUser });
  }

  handleToUserChange(event) {
    const newToUser = Object.assign({}, this.state.toUser);
    newToUser.id = event.target.value;
    newToUser.name = this.state.users[event.target.value].name;
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
    if(this.state.toUser.text.length < 5){
      event.preventDefault();
      return
    }

    let posts = JSON.parse(localStorage.getItem("posts"));
    const date = new Date();
    const year = date.getFullYear();
    const month = ("0" + (date.getMonth() + 1)).slice(-2);
    const day = ("0" + date.getDate()).slice(-2);
    const hours = ("0" + date.getHours()).slice(-2);
    const minutes = ("0" + date.getMinutes()).slice(-2);
    const now = `${year}/${month}/${day} ${hours}:${minutes}`;
    const prevId = posts.length - 1;

    const post = {
      id: prevId + 1,
      toUserId: this.state.toUser.id,
      fromUserId: this.state.fromUser.id,
      text: this.state.toUser.text,
      clappedNum: 0,
      createdAt: now,
      clapUsers: []
    };
    posts.push(post);
    localStorage.setItem("posts", JSON.stringify(posts));
    // event.preventDefault();
  }

  handleClickClapIcon(event) {
    let newUsers = Object.assign({}, this.state.users);
    let newPosts = Object.assign({}, this.state.posts);
    let post = newPosts[event.currentTarget.value];
    const currentUserId = this.state.fromUser.id;
    const fromUserId = post.fromUserId;
    const toUserId = post.toUserId;

    if (currentUserId == toUserId || currentUserId == fromUserId || newUsers[currentUserId].canClapNum < 2) {
      return;
    }

    const fromUserIds = post.clapUsers.map(clapUser => clapUser.currentUserId);
    const index = fromUserIds.indexOf(currentUserId);
    if (index === -1) {
      post.clapUsers.push({ currentUserId, count: 1 });
    } else if (post.clapUsers[index].count < 15) {
      post.clapUsers[index].count++;
    } else {
      return;
    }

    newUsers[currentUserId].canClapNum -= 2;
    newUsers[toUserId].clappedNum++;
    post.clappedNum++;

    this.setState(newUsers);
    this.setState(newPosts);
    localStorage.setItem("posts", JSON.stringify(this.state.posts));
    localStorage.setItem("users", JSON.stringify(this.state.users));
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
    this.toOptions = []
    this.props.users.forEach(user => {
      if (user.id != this.state.fromUser.id) {
        this.toOptions.push(
          <option value={user.id} key={user.id}>
            {user.name}
          </option>
        );
      }
    });

    return (
      <div>
        <ClpPostForm
          options={options}
          toOptions={this.toOptions}
          handleFromUserChange={this.handleFromUserChange}
          handleToUserChange={this.handleToUserChange}
          handleInputChange={this.handleInputChange}
          handleSubmit={this.handleSubmit}
          fromUser={this.state.fromUser}
          toUser={this.state.toUser}
          users={users}
        ></ClpPostForm>
        <ClpPosts
          handleClickClapIcon={this.handleClickClapIcon}
          posts={this.state.posts}
          users={this.state.users}
          canClapNum={this.state.fromUser.canClapNum}
        ></ClpPosts>
      </div>
    );
  }
}

export default ClpHome;
