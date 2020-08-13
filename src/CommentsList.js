import React from "react";
import Comment from "./Comment";
import CommentForm from "./CommentForm";
import {ListGroup} from "reactstrap"
import './CommentsList.css';

/** CommentsList: Component that renders each comment component
 *    - Holds props of idToPost, postId, deleteComment
 *    - Used in PostDetail component
 *    - Uses Comment component
 */

function CommentsList({ idToPost, postId, deleteComment, addComment }) {

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
    <div className="comments-list">
      <div className="comments-header">
        <h6>Comments:</h6>
      <CommentForm postId={postId} addComment={addComment} />
      </div>
      {idToComment
        ? <ListGroup>{commentComponents}</ListGroup>
        // :
        : <p>Loading</p>
      }
    </div>
  );
}

export default CommentsList;