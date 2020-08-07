import React/**, { useState } */ from 'react';
import './PostDetail.css';
import { useParams, Redirect } from 'react-router-dom';
import PostForm from './PostForm';
import CommentsList from './CommentsList';
import CommentForm from './CommentForm';


/** PostDetail: Component that renders the detailed page for each post, including the title, description, body
 *  as well as any comments for that post, and a form to add new posts
 *    - Holds props of idToPost, deletePost, updatePost, addComment, deleteComment
 *    - Used in Routes components
 *    - Uses PostForm, CommentsList, and CommentForm components
 */

function PostDetail({post, updatePost, addComment, deleteComment, deletePost, isEditing, setIsEditing }) {

  const { id } = useParams();

  if (!post) {
    return <Redirect to="/" />
  }

  if (isEditing) {
    // return <PostForm idToPost={idToPost} updatePost={updatePost}/>
    return <PostForm post={post} updatePost={updatePost} />
  }

  const { title, description, body } = post;

  return (
    <div className="PostDetail">
      <button className="PostDetail-button btn btn-primary py-0 px-1" onClick={() => setIsEditing(true)}><i className="fas fa-external-link-alt fa-sm"></i></button>
      <button className="PostDetail-button btn btn-danger py-0 px-1" onClick={() => deletePost(id)}> <i className="fas fa-trash-alt fa-sm"></i></button>
      <h2>{title}</h2>
      <h6><i>{description}</i></h6>
      <p className="PostDetail-body border-bottom">{body}</p>
      <CommentsList comments={post.comments} deleteComment={deleteComment}/>
      <CommentForm postId={id} addComment={addComment}/>
    </div>
  );
}

export default PostDetail;
