import React from "react";
import Comment from './Comment';

/** CommentsList: Component that renders each comment component
 *    - Holds props of idToPost, postId, deleteComment
 *    - Used in PostDetail component
 *    - Uses Comment component
 */

function CommentsList({ comments, deleteComment }) {
  const commentComponents = comments.map(({ id, text }) => (
    <Comment key={id} id={id} text={text} deleteComment={deleteComment} />
))

  return (
    <div>
      <ul>{commentComponents}</ul>
    </div>
  );
}

export default CommentsList;