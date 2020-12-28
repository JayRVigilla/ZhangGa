import React from 'react';
import {
  Switch,
  Route,
  Redirect
} from 'react-router-dom';
import PostList from './posting/PostList';
// import PostForm from './PostForm';
import Post from './posting/Post';
import NewPost from './posting/NewPost';
import Home from './Home'


/** Routes: Component that performs client-side routing for Jobly
 *    - Used in App
 *    - Uses PostList, NewPostForm, PostDetail */

function Routes({ addPost, updatePost, idToPost, deletePost, addComment, deleteComment }) {
  return (
    <Switch>
      <Route exact path="/">
        <Home/>
        <PostList idToPost={idToPost} />
      </Route>

      <Route exact path="/new">
        <NewPost addPost={addPost} idToPost={idToPost}/>

      </Route>

      <Route exact path="/:id">
        <Post
          // idToPost={idToPost}
          updatePost={updatePost}
          deletePost={deletePost}
          deleteComment={deleteComment}
          addComment={addComment}
        />
      </Route>

      <Redirect to="/" />
    </Switch>

  );
}
export default Routes;
