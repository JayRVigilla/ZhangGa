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
    // TODO: spread and delete the id key from formdata
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

    // QUESTION: Would it be better to have a separate object that holds keys of postId and values of the comments object?
    // Also, would it be better practice to assume comments would be smaller and more manageable, meaning we should use an array so we can ensure the order is maintained? For that, it would need to be an array of objects so that we could find the specific comment by id

    // easier to update if we do separate these out

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
