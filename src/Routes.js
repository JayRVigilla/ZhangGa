import React from 'react';
import {
  Switch,
  Route,
  Redirect
} from 'react-router-dom';
import PostList from './PostList';
// import PostForm from './PostForm';
import Post from './Post';
import NewPost from './NewPost';


/** Routes: Component that performs client-side routing for Jobly
 *    - Used in App
 *    - Uses PostList, NewPostForm, PostDetail */

function Routes({ addPost, updatePost, idToPost, deletePost, addComment, deleteComment }) {
  return (
    <Switch>
      <Route exact path="/">
        <PostList />
      </Route>

      <Route exact path="/new">
        <NewPost/>
        
      </Route>

      <Route exact path="/:id">
        <Post />
      </Route>

      <Redirect to="/" />
    </Switch>
    
  );
}
export default Routes;
