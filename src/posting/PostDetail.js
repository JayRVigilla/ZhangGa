import React/**, { useState } */ from 'react';
import './PostDetail.css';
import { useParams, Redirect, useHistory } from 'react-router-dom';
import PostForm from './PostForm';
import CommentsList from '../commenting/CommentsList';
import { deletePostFromAPI } from '../actions/actionCreators';
import { useDispatch } from 'react-redux';


/** PostDetail: Component that renders the detailed page for each post, including the title, description, body
 *  as well as any comments for that post, and a form to add new posts
 *    - Holds props of idToPost, deletePost, updatePost, addComment, deletePost
 *    - Used in Routes components
 *    - Uses PostForm, CommentsList, and CommentForm components
 */

function PostDetail({ post, updatePost, addComment, isEditing, setIsEditing }) {
  const dispatch = useDispatch();
  const history = useHistory();
  const { id } = useParams();

  if (!post) return <Redirect to="/" />

  if (isEditing) return <PostForm post={post} updatePost={updatePost} />

  const { title, description, body, img } = post;

  const handleDelete = (evt) => {
    async function deletePost() {
      await (dispatch(deletePostFromAPI(id)));
    }
    deletePost();
    history.push('/');
  }

  return (
    <div className="PostDetail">
      <img src={`${img}`} alt={`${title} pic`}/>
      <h2>{title}</h2>
      <h6><i>{description}</i></h6>
      <button className="PostDetail-button btn btn-primary py-0 px-1" onClick={(evt) => setIsEditing(true)}><i className="fas fa-edit"> Edit</i></button>
      <button className="PostDetail-button btn btn-danger py-0 px-1" onClick={handleDelete}> <i className="fas fa-trash-alt fa-sm"> Delete</i></button>
      <p className="PostDetail-body border-bottom">{body}</p>
      <CommentsList addComment={addComment} />
    </div>
  );
}

export default PostDetail;
