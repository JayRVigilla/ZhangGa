import React, { useState } from 'react';
import './PostForm.css';
import { v4 as uuid } from "uuid";
import { useParams, Link } from 'react-router-dom';


/** PostForm: Component that renders a form to add or update a post
 * (based on existence of a valid id from params)
 *    - Holds state of formdata
 *    - Holds props of addPost, idToPost, and updatePost
 *    - Used in PostDetail and Routes components
 */

function PostForm({ addPost, idToPost, updatePost }) {

  let INITIAL_STATE = { title: "", description: "", body: "" };

  const { id } = useParams();

  // if post already exists, grab values from the post to populate the form
  if (id) {
    const { title, description, body } = idToPost[id];
    INITIAL_STATE = { title, description, body };
  }

  const [formData, setFormData] = useState({...INITIAL_STATE });
  // QUESTION: heard spreading this OBJ is a good idea, what are the pros?
  // If that component gets unmounted and mounted again, we wouldn't get the same reference..

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
      key: id ? id : uuid(),
      comments: id ? {...idToPost[id].comments} : {}
    }

    if (id) {
      updatePost(id, newFormData);
    } else {
      addPost(newFormData.key, newFormData);
    }

    setFormData({ ...INITIAL_STATE });
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
