import React from "react";
import ClpIcon from "../atoms/ClpIcon";

class ClpCommentForm extends React.Component {
  constructor(props) {
    super(props);
    this.handleSelectChange = this.handleSelectChange.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.users = props.users;
    this.state = {
      id: this.users[0].id,
      name: this.users[0].name,
      text: ""
    };
  }

  handleSelectChange(event) {
    this.setState({
      id: event.target.value,
      name: this.users[event.target.value].name
    });
  }

  handleInputChange(event) {
    this.setState({
      text: event.target.value
    });
  }

  handleSubmit(event) {
    alert(`${this.state.name}に${this.state.text}と賞賛しました`);
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
        <ClpIcon uid={this.state.id}></ClpIcon>
        <select name="name" onChange={this.handleSelectChange}>
          {options}
        </select>
        <form onSubmit={this.handleSubmit}>
          <textarea value={this.state.text} onChange={this.handleInputChange} />
          <input type="submit" value="投稿" />
        </form>
      </div>
    );
  }
}

export default ClpCommentForm;
