import React from "react";

/** CommentsList: Component that renders each comment component
 *    - Holds props of idToPost, postId, deleteComment
 *    - Used in PostDetail component
 *    - Uses Comment component
 */

function CommentsList({comments, handleRemove }) {
  const commentComponents = comments.map(c => (
    <div className="Comment" key={c.id}>
    <button className="Comment-button btn btn-danger py-0 px-2" onClick={handleRemove}><b>x</b></button>
    <li className="Comment-list-item">{c.text}</li>
  </div>
  ));

  return (
    <div>
      <ul>{commentComponents}</ul>
    </div>
  );
}

export default CommentsList;