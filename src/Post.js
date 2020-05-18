import React, { useState, useEffect } from "react";
import PostDetail from "./PostDetail";
import CommentsList from './CommentsList';
import CommentForm from './CommentForm';
import PostForm from './PostForm';
import { useParams, useHistory } from "react-router-dom";
import {
  fetchPostFromAPI,
  deletePostFromAPI,
  createCommentToAPI,
  deleteCommentFromAPI,
  updatePostToAPI
} from './actionCreators';
import { useSelector, useDispatch, shallowEqual } from 'react-redux';


/** */


/**"dispatch to 
 * updatePost,
deletePost,
addComment,
deleteComment (in handleRemove)**/


function Post() {
  const { id } = useParams();
  const postId = Number(id);

  const post = useSelector(st => st.idToPost[postId], shallowEqual);
  const error = useSelector(st => st.error);

  const dispatch = useDispatch();
  const history = useHistory();

  const [isEditing, setIsEditing] = useState(false);
  

  /** Grab the post object from the API if we don't have it in store already */

  useEffect(function loadPostIfNotInStore() {
    async function getPost() {
      dispatch(fetchPostFromAPI(postId));
    }
    if (!post) {
      getPost();
    }
  }, [dispatch, postId, post]);


/** Toggle isEditing  */
  function toggleIsEditting() { 
    setIsEditing(isEditing => !isEditing);
  }

  /** Handle post editing  */
  // this is where we would invoke toggle edit
  function updatePost(postData, postId) { 
    dispatch(updatePostToAPI(postData, postId));
    toggleIsEditting();
  }

/** Handle post deletion */
  function deletePost(postId){
    dispatch(deletePostFromAPI(postId));
    history.push('/');
  }

  /** Handle comment adding */
  function addComment(newComment, postId) { 
    dispatch(createCommentToAPI(newComment, postId));
  }

/** Handle comment deletion */
  function deleteComment(commentId, postId) { 
    dispatch(deleteCommentFromAPI(commentId, postId));
  }

  if (error) {
    // inspect? and then redirect to home and once home, render any error.message then clear error state
    return <h1>There was an error handling your request. Please try again later...</h1>;
  }

  // use this destructuring inside the handling functions above
  // const { title, description, body } = post;


  // TODO: we can make a function higher up that 
  // uses the postId where we have access and then pass down
  // function handleRemove() {
  //   deleteCommentFromAPI(commentId, postId);
  // }

  if (!post) {
    return <h1>Loading...</h1>
   }

    if (isEditing) {
    return <PostForm post={post} updatePost={updatePost} />
  }
  
  return (
    <div>
      
      <PostDetail
        post={post}
        deletePost={deletePost}
        updatePost={updatePost}
        setIsEditing={setIsEditing} />
      <CommentsList idToComment={post.idToComment} post={post} deleteComment={deleteComment} />
      <CommentForm addComment={addComment} />
    </div>
  )
}

export default Post;