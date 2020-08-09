import React, { useState } from 'react';
import './PostForm.css';
import { v4 as uuid } from "uuid";
import { useParams, Link, useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { createPostToAPI, updatePostToAPI } from './actionCreators';


/** PostForm: Component that renders a form to add or update a post
 * (based on existance of a valid id from params)
 *    - Holds state of formdata
 *    - Holds props of addPost, post, and updatePost
 *    - Used in PostDetail and Routes components
 */

function PostForm(/** {addPost, updatePost } */) {
  let INITIAL_STATE = { title: "", description: "", body: "" };
  const post = useSelector(store => store.post);
  const dispatch = useDispatch();
  const history = useHistory();
  const { id } = useParams();

  // if post already exists, grab values from the post to populate the form
  if (id) {
    console.log('*****\n\n Value of post in postForm', post, '\n\n *****')
    const { title, description, body } = post;
    INITIAL_STATE = { title, description, body };
  }

  const [formData, setFormData] = useState({ ...INITIAL_STATE });

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

      // rename this to id or commentId vs. postId to be more explicit throughout
      postId: id ? id : uuid(),
      // comments: id ? {...post[id].comments} : {}
    }

    async function updatePost() {
      await dispatch(updatePostToAPI(newFormData, id));
    }
    async function addPost() {
      await dispatch(createPostToAPI(newFormData));
    }

    if (id) {
      // updatePost(id, newFormData);
      updatePost();
    } else {
      // addPost(newFormData.postId, newFormData);
      addPost();
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
