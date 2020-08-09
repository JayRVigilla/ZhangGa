import React from "react";
import Comment from './Comment';
import { fetchPostCommentsFromAPI } from "./actionCreators";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { useState } from "react";
import Loading from './Loading';

/** CommentsList: Component that renders each comment component
 *    - Holds props of idToPost, postId, deleteComment
 *    - Used in PostDetail component
 *    - Uses Comment component
 */

function CommentsList() {
  const postId = useSelector(store => store.post.id);
  const [isLoading, setIsLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(function () {
    async function fetchComments() {
      await dispatch(fetchPostCommentsFromAPI(postId));
      setIsLoading(false);
    }
    if(isLoading) fetchComments();
  }, [dispatch, isLoading, postId])

  const comments = useSelector(store => store.comments)
  const commentComponents = comments.map(({ id, text }) => (
    <Comment key={id} id={id} text={text} postId={postId} />
  ))

  return (
    <div>
      {comments
        ? <ul>{commentComponents}</ul>
        : <Loading />
      }
    </div>
  );
}

export default CommentsList;