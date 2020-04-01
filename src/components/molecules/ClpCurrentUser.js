import React from "react";
import ClpIcon from "../atoms/ClpIcon";
/* eslint no-unused-expressions: "off" */

class ClpCurrentUser extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.users = props.users;
    this.state = {
      id:  this.users[0].id,
      name: this.users[0].name
    };
  }

  handleChange(event) {
    this.setState({
        id: event.target.value,
        name: this.users[event.target.value].name,
    });
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
        <h1>Hello React</h1>
        <select name="name" onChange={this.handleChange}>
          {options}
        </select>
        <p>{this.state.name}</p>
        <p>{this.users[this.state.id].canClapNum}</p>
        <p>{this.users[this.state.id].clappedNum}</p>
        <ClpIcon uid={this.state.id}></ClpIcon>
      </div>
    );
  }
}

export default ClpCurrentUser;
