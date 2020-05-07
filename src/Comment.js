import React from "react";
import './Comment.css';

/** Comment: Component that renders each list item comment inside CommentsList component
 *    - Holds props of comment, deleteComment, postId, and commentId
 */

function Comment({comment, deleteComment, postId, commentId}) {

  // TODO: we can make a function higher up that uses the postId where we have access and then pass down
  // function handleRemove(){
  //   deleteComment(postId, commentId);
  // }

  return (
    <div className="Comment">
      <button className="Comment-button btn btn-danger py-0 px-2" onClick={handleRemove}><b>x</b></button>
      <li className="Comment-list-item">{comment}</li>
    </div>
  );
}

export default Comment;
