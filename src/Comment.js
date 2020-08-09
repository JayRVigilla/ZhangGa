import React from "react";
import { deleteCommentFromAPI } from "./actionCreators";
import { useDispatch } from "react-redux";

/** Comment: Component that renders each comment component
 *    - Holds props of idToPost, postId, deleteComment
 *    - Used in PostDetail component
 *    - Uses Comment component
 */

function Comment({ id, text, postId}) {
  const dispatch = useDispatch();

  const handleDelete = (evt) => {
    async function deleteComment() {
      await (dispatch(deleteCommentFromAPI(id, postId)));
    }
    deleteComment();
  }

  return (

    <div className="Comment" id={id}>
    <button className="Comment-button btn btn-danger py-0 px-2" onClick={handleDelete}><b>x</b></button>
    <li className="Comment-list-item">{text}</li>
  </div>
  );
}

export default Comment;