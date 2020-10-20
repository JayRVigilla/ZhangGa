import React from "react";
import { deleteCommentFromAPI } from "../actions/actionCreators";
import { useDispatch } from "react-redux";
import { ListGroupItem } from 'reactstrap';
import './Comment.css';

/** Comment: Component that renders each comment component
 *    - Holds props of idToPost, postId, deleteComment
 *    - Used in PostDetail component
 *    - Uses Comment component
 */

function Comment({ id, text, postId }) {
  const dispatch = useDispatch();

  const handleDelete = (evt) => {
    async function deleteComment() {
      await (dispatch(deleteCommentFromAPI(id, postId)));
    }
    deleteComment();
  }

  return (
    <ListGroupItem>
      <div className="Comment" id={id}>
        <p>{text}</p>
        {/* <a classname="Comment-button btn btn-danger" href="#" onClick={handleDelete}><i class="fas fa-minus-circle"></i></a> */}
        {/* <button className="Comment-button btn btn-danger" onClick={handleDelete}>x</button> */}
        <div className="button holder">
          {/* <button className="btn btn-danger" onClick={handleDelete}> */}
            <i className="fas fa-backspace" onClick={handleDelete}></i>
          {/* </button> */}
        </div>
      </div>
    </ListGroupItem>
  );
}

export default Comment;