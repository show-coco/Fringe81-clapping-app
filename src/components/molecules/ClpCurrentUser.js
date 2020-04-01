import React from "react";
import ClpIcon from "../atoms/ClpIcon";
import "../../assets/styles/ClpCurrentUser.css";
/* eslint no-unused-expressions: "off" */

class ClpCurrentUser extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.users = props.users;
    this.state = {
      id: this.users[0].id,
      name: this.users[0].name
    };
  }

  handleChange(event) {
    this.setState({
      id: event.target.value,
      name: this.users[event.target.value].name
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
      <div className="ClpCurrentUser">
        <h1>Hello React</h1>
        <div className="user">
          <div>
            <ClpIcon uid={this.state.id}></ClpIcon>
            <select name="name" onChange={this.handleChange}>
              {options}
            </select>
          </div>
          <div className="user-info">
            拍手できる: {this.users[this.state.id].canClapNum}　 拍手された:
            {this.users[this.state.id].clappedNum}
          </div>
        </div>
      </div>
    );
  }
}

export default ClpCurrentUser;
