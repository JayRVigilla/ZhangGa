import React, { useState } from "react";
import PostDetail from "./PostDetail";
import PostForm from './PostForm';
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { fetchPostFromAPI } from "../actions/actionCreators";
import { useSelector, useDispatch } from "react-redux";
import Loading from '../Loading';
/** */

function Post({ updatePost, deletePost, deleteComment, addComment }) {
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
  }, [isLoading, dispatch, id, post])

  if (isEditing) {
    return <PostForm />
  }

  return (
    <div>
      {isLoading
        ? <Loading />
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