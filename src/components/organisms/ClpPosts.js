import React from "react";
import ClpPost from "../molecules/ClpPost";
/* eslint no-unused-expressions: "off" */

function ClpPosts(props) {
  const posts = props.posts;
  const ClpPosts = posts.map(post => {
    return (
      <ClpPost
        post={post}
        canClapNum={props.canClapNum}
        id={post.id}
        key={post.id}
        handleClickClapIcon={props.handleClickClapIcon}
      ></ClpPost>
    );
  });

  return <div>{ClpPosts}</div>;
}

export default ClpPosts;
