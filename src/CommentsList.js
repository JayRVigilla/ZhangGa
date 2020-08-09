import React from "react";
import Comment from './Comment';
import { fetchPostCommentsFromAPI } from "./actionCreators";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from 'react-router-dom'
import Loading from './Loading';
import { ListGroup } from 'reactstrap';
import './CommentsList.css';
import CommentForm from './CommentForm';


/** CommentsList: Component that renders each comment component
 *    - Holds props of idToPost, postId, deleteComment
 *    - Used in PostDetail component
 *    - Uses Comment component
 */

function CommentsList({ addComment }) {
  const postId = useSelector(store => store.post.id);
  const [isLoading, setIsLoading] = useState(true);
  const dispatch = useDispatch();
  const { id } = useParams();


  useEffect(function () {
    async function fetchComments() {
      await dispatch(fetchPostCommentsFromAPI(postId));
      setIsLoading(false);
    }
    if (isLoading) fetchComments();
  }, [dispatch, isLoading, postId])

  const comments = useSelector(store => store.comments)
  const commentComponents = comments.map(({ id, text }) => (
    <Comment key={id} id={id} text={text} postId={postId} />
  ))

  return (
    <div className="comments-list">
      <div className="comments-header">
        <h6>Comments:</h6>
      <CommentForm postId={id} addComment={addComment} />
      </div>
      {comments
        ? <ListGroup>{commentComponents}</ListGroup>
        : <Loading />
      }
    </div>
  );
}

export default CommentsList;