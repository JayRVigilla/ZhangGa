import React/**, { useState }**/ from "react";
import PostForm from './PostForm';



function NewPost({ addPost, idToPost}) {
  // dispatch addPost
  //useSelect(store) to send idToPost down from here
  return (
    <PostForm addPost={addPost}
      idToPost={idToPost}/>
  )
}


export default NewPost

