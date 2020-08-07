import React from "react";

/** Comment: Component that renders each comment component
 *    - Holds props of idToPost, postId, deleteComment
 *    - Used in PostDetail component
 *    - Uses Comment component
 */

function Comment({ id, text, deleteComment}) {
  return (

    <div className="Comment" id={id}>
    <button className="Comment-button btn btn-danger py-0 px-2" onClick={deleteComment}><b>x</b></button>
    <li className="Comment-list-item">{text}</li>
  </div>
  );
}

export default Comment;