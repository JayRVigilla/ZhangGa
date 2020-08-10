import React from "react";
import PostForm from './PostForm';



function NewPost({ addPost, idToPost}) {
  return (
    <PostForm addPost={addPost}
      idToPost={idToPost}/>
  )
}


export default NewPost

