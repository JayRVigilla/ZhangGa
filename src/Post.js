import React, { useState } from "react";
import PostDetail from "./PostDetail";
// import CommentsList from './CommentsList';
// import CommentForm from './CommentForm';
import PostForm from './PostForm';
import { /**Redirect,**/ useParams } from "react-router-dom";
import { useEffect } from "react";
import { fetchPostFromAPI } from "./actionCreators";
import { /**useSelector,**/ useDispatch } from "react-redux";

/** */


/**"dispatch to
 * updatePost,
deletePost,
addComment,
deleteComment (in handleRemove)**/

function Post({ idToPost, updatePost, deletePost, deleteComment, addComment }) {
  const dispatch = useDispatch();
  const { id } = useParams();
  const [isEditing, setIsEditing] = useState(false);
  // const post = idToPost[id];
  // const [post, setPost] = useState(undefined);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(function() {
    async function getPostData() {
      await dispatch(fetchPostFromAPI(id));
      setIsLoading(false);
    }
    if(isLoading) getPostData();
  }, [isLoading, dispatch, id])
  // if (!post) {
  //   return <Redirect to="/" />
  // }

  if (isEditing) {
    return <PostForm idToPost={idToPost} updatePost={updatePost} />
  }

  // const { title, description, body } = post;

  return (
    <div>
      <PostDetail
        idToPost={idToPost}
        deletePost={deletePost}
        updatePost={updatePost}
        isEditing={isEditing}
        setIsEditing={setIsEditing}
        deleteComment={deleteComment}
        addComment={addComment}
      />
      {/* <CommentsList idToPost={idToPost} postId={id} handleRemove={deleteComment} />
      <CommentForm postId={id} addComment={addComment} /> */}
    </div>
  )
}

export default Post;