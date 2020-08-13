import React from "react";
import "./Comment.css";
import { ListGroupItem } from "reactstrap";

/** Comment: Component that renders each list item comment inside CommentsList component
 *    - Holds props of comment, deleteComment, postId, and commentId
 */

function Comment({ comment, deleteComment, postId, commentId }) {
  function handleRemove() {
    deleteComment(postId, commentId);
  }

  return (
    <ListGroupItem>
    <div className="Comment">
      {comment}
      <button className="Comment-button btn btn-danger py-0 px-2"onClick={handleRemove}><b>x</b></button>
      </div>
      </ListGroupItem>
  );
}

export default Comment;
