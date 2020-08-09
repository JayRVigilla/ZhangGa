import React, { useState } from 'react';
import './App.css';
import Routes from "./Routes";
import Nav from './Nav';
import { useHistory } from 'react-router-dom';


/** App: Component that renders Nav and Routes
 *    - Holds state of idToPost, an object of post objects,
 *      each of which have a key of comments, an object of comment objects
 *    - Used in Index component
 */

function App() {
  const [idToPost, setIdToPost] = useState({});
  const history = useHistory();

  const addPost = (id, post) => {
    let idToPostCopy = { ...idToPost, [id]: post };
    setIdToPost(idToPostCopy);
    history.push('/');
  }

  const updatePost = (id, updatedPost) => {
    let idToPostCopy = { ...idToPost, [id]: updatedPost }
    setIdToPost(idToPostCopy);
    history.push('/');
  }

  const deletePost = (id) => {
    let idToPostCopy = { ...idToPost };
    delete idToPostCopy[id];
    setIdToPost(idToPostCopy);
    history.push('/');
  }


  const addComment = (postId, comment) => {
    let idToPostCopy = {
      ...idToPost, [postId]:
      {
        ...idToPost[postId],
        comments: {
          ...idToPost[postId].comments,
          [comment.key]: comment.comment
        }
      }
    };

    setIdToPost(idToPostCopy);
  }

  const deleteComment = (postId, commentId) => {

    let idToPostCopy = {
      ...idToPost, [postId]:
      {
        ...idToPost[postId],
        comments: {
          ...idToPost[postId].comments
        }
      }
    }

    delete idToPostCopy[postId].comments[commentId];
    setIdToPost(idToPostCopy);
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
