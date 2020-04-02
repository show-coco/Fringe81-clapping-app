import React from "react";
import ClpPost from "../molecules/ClpPost";
/* eslint no-unused-expressions: "off" */

class ClpPosts extends React.Component {
  render() {
    const posts = JSON.parse(localStorage.getItem("posts"));
    const ClpPosts = posts.map(post => {
      return (
        <ClpPost
          text={post.text}
          fromUserId={post.fromUserId}
          toUserId={post.toUserId}
          clappedNum={post.clappedNum}
          id={post.id}
          key={post.id}
          handleClickClapIcon={this.props.handleClickClapIcon}
        ></ClpPost>
      );
    });

    return <div>{ClpPosts}</div>;
  }
}

export default ClpPosts;
