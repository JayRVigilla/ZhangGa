import React from "react";
import Comment from "./Comment";
import './CommentsList.css';

/** CommentsList: Component that renders each comment component
 *    - Holds props of idToPost, postId, deleteComment
 *    - Used in PostDetail component
 *    - Uses Comment component
 */

function CommentsList({ idToPost, postId, deleteComment }) {

  const idToComment = idToPost[postId].comments;
  const commentIds = Object.keys(idToComment);

  const commentComponents = commentIds.map(id => (
    <Comment
      postId={postId}
      key={id}
      commentId={id}
      comment={idToComment[id]}
      deleteComment={deleteComment}
    />
  ));

  return (
    <div>
      <ul>{commentComponents}</ul>
    </div>
  );
}

export default CommentsList;