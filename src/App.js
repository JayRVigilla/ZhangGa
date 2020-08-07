import React/** , { useState }*/ from 'react';
import './App.css';
import Routes from "./Routes";
import Nav from './Nav';
import { useHistory } from 'react-router-dom';
import {
  createPostToAPI,
  updatePostToAPI,
  deletePostFromAPI,
  createCommentToAPI,
  deleteCommentFromAPI
} from './actionCreators'
import { useSelector } from "react-redux";

/** App: Component that renders Nav and Routes
 *    - Holds state of idToPost, an object of post objects,
 *      each of which have a key of comments, an object of comment objects
 *    - Used in Index component
 */

function App() {
  const idToPost = useSelector(store => store.idToPost);
  const history = useHistory();

  const addPost = (postData) => {
    createPostToAPI(postData);
    history.push('/');
  }

  const updatePost = (updatedPost, id) => {
    updatePostToAPI(updatedPost, id);
    history.push('/');
  }

  const deletePost = (id) => {
    deletePostFromAPI(id);
    history.push('/');
  }

  const addComment = (commentData, postId) => {
    createCommentToAPI(commentData, postId);
  }

  const deleteComment = (commentId, postId) => {
    deletePostFromAPI(commentId, postId);
  }

  return (
    <div className="App">
      <Nav />
      <Routes
        idToPost={idToPost}
        addPost={addPost}
        updatePost={updatePost}
        deletePost={deletePost}
        addComment={addComment}
        deleteComment={deleteComment}
      />
    </div>
  );
}

export default App;
