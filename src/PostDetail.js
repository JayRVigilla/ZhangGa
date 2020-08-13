import React, { useState } from 'react';
import './PostDetail.css';
import { useParams, Redirect } from 'react-router-dom';
import PostForm from './PostForm';
import CommentsList from './CommentsList';


/** PostDetail: Component that renders the detailed page for each post, including the title, description, body
 *  as well as any comments for that post, and a form to add new posts
 *    - Holds props of idToPost, deletePost, updatePost, addComment, deleteComment
 *    - Used in Routes components
 *    - Uses PostForm, CommentsList, and CommentForm components
 */

function PostDetail({ idToPost, deletePost, updatePost, addComment, deleteComment }) {

  const { id } = useParams();
  const [isEditing, setIsEditing] = useState(false);
  const post = idToPost[id];

  if (!post) {
    return <Redirect to="/" />
  }

  if (isEditing) {
    return <PostForm idToPost={idToPost} updatePost={updatePost}/>
  }

  const {title, description, body} = post;

  return (
    <div className="PostDetail">
 <h2>{title}</h2>
      <h6><i>{description}</i></h6>
      <button className="PostDetail-button btn btn-primary py-0 px-1" onClick={(evt) => setIsEditing(true)}><i className="fas fa-edit"> Edit</i></button>
      <button className="PostDetail-button btn btn-danger py-0 px-1" onClick={deletePost}> <i className="fas fa-trash-alt fa-sm"> Delete</i></button>
      <p className="PostDetail-body border-bottom">{body}</p>
      <CommentsList idToPost={idToPost} postId={id} deleteComment={deleteComment} addComment={addComment}/>
    </div>
  );
}

export default PostDetail;
