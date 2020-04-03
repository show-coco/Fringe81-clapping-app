import React from "react";
import ClpPost from "../molecules/ClpPost";
/* eslint no-unused-expressions: "off" */

function ClpPosts(props)  {
    const posts = props.posts;
    const ClpPosts = posts.map(post => {
      return (
        <ClpPost
          text={post.text}
          fromUserId={post.fromUserId}
          toUserId={post.toUserId}
          clappedNum={post.clappedNum}
          createdAt={post.createdAt}
          id={post.id}
          key={post.id}
          handleClickClapIcon={props.handleClickClapIcon}
        ></ClpPost>
      );
    });

    return <div>{ClpPosts}</div>;
}

export default ClpPosts;
