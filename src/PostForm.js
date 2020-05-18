import React, { useState } from 'react';
import './PostForm.css';
import { useParams, Link, useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { createPostToAPI, updatePostToAPI } from './actionCreators';


/** PostForm: Component that renders a form to add or update a post 
 * (based on existance of a valid id from params)
 *    - Holds state of formdata
 *    - Holds props of addPost, idToPost, and updatePost
 *    - Used in PostDetail and Routes components
 */

function PostForm({post}) {
  const dispatch = useDispatch();
  const history = useHistory();
  let INITIAL_STATE = { title: "", description: "", body: "" };

  const { id } = useParams();

  // if post already exists, grab existing values from the post to pre-populate the form
  if (id) {
    const { title, description, body } = post;
    INITIAL_STATE = { title, description, body };
  }

  const [formData, setFormData] = useState({...INITIAL_STATE });  

  const handleChange = evt => {
    const { name, value } = evt.target;
    setFormData(fData => ({
      ...fData,
      [name]: value
    }));
  }

  // handles the submit differently if this form is for an existing post
  const handleSubmit = evt => {
    evt.preventDefault();
    const newFormData = {
      ...formData,
      idToComment: id ? {...post.idToComment} : {}
    }

    if (id) {
      dispatch(updatePostToAPI(newFormData))  /**updatePost(newFormData, id) */;
    } else {
      dispatch(createPostToAPI(newFormData));
      //addPost(/** newFormData.postId,*/ newFormData); // kept in case new post fails...
    }

    setFormData({ ...INITIAL_STATE });
    history.push('/');
  }


  return (
    <div className="PostForm">
      <form onSubmit={handleSubmit}>

        <div className="form-group">
          <label className="PostForm-label" htmlFor="title">Title</label>
          <input className="PostForm-input" name="title"
            value={formData.title}
            onChange={handleChange}
            cols="45">
          </input>
        </div>

        <div className="form-group">
          <label className="PostForm-label" htmlFor="description">Description</label>
          <input className="PostForm-input" name="description"
            value={formData.description}
            onChange={handleChange}
            cols="45">
          </input>
        </div>

        <div className="form-group">
          <label className="PostForm-label-body" htmlFor="body">Body</label>
          <textarea name="body"
            value={formData.body}
            onChange={handleChange}
            rows="6"
            cols="45">
          </textarea>
        </div>
        <button type="submit" className="Postform-button btn btn-primary">Save</button>
        <Link to='/'><button className="Postform-button btn btn-danger">Cancel</button></Link>
      </form>
    </div>
  );
}

export default PostForm;
