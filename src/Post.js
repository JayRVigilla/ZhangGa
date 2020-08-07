import React, { useState } from "react";
import PostDetail from "./PostDetail";
// import CommentsList from './CommentsList';
// import CommentForm from './CommentForm';
import PostForm from './PostForm';
import { /**Redirect,**/ useParams } from "react-router-dom";
import { useEffect } from "react";
import { fetchPostFromAPI } from "./actionCreators";
import { useSelector, useDispatch } from "react-redux";

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
  const [isLoading, setIsLoading] = useState(true);
  const post = useSelector(store => store.post)

  useEffect(function () {
    async function getPostData() {
      await dispatch(fetchPostFromAPI(id));
      setIsLoading(false);
    }
    if (isLoading) getPostData();
  }, [isLoading, dispatch, id])

  const loading = () => {
    return (
      <div>
        <h2>Loading...</h2>
      </div>
    )
  }

  if (isEditing) {
    return <PostForm idToPost={idToPost} updatePost={updatePost} />
  }

  return (
    <div>
      {isLoading
        ? loading()
        : <PostDetail
          post={post}
          deletePost={deletePost}
          updatePost={updatePost}
          isEditing={isEditing}
          setIsEditing={setIsEditing}
          deleteComment={deleteComment}
          addComment={addComment}
        />
      }
    </div>
  )
}

export default Post;