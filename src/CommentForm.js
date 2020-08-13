import React, { useState } from 'react';
import './CommentForm.css';
import { v4 as uuid } from "uuid";

/** CommentForm: Component that renders the form to add a comment to a post
 *    - Holds state of formdata
 *    - Holds props of postId and addComment
 *    - Used in PostDetail component
 */

function CommentForm({ postId, addComment }) {

  let INITIAL_STATE = ({ comment: "" });

  const [formData, setFormData] = useState({ ...INITIAL_STATE });

  const handleChange = evt => {
    const { name, value } = evt.target;
    setFormData(fData => ({
      ...fData,
      [name]: value
    }));
  }
  const handleSubmit = evt => {
    evt.preventDefault();
    const newFormData = {
      ...formData,
      key: uuid()
    }

    addComment(postId, newFormData);

    setFormData({ ...INITIAL_STATE });
  }


  return (
    <div className="CommentForm">
      <form onSubmit={handleSubmit}>

        <label className="CommentForm-label" htmlFor="comment"></label>
        <input name="comment"
          value={formData.comment}
          onChange={handleChange}>
        </input>

        <button className="CommentForm-button btn btn-primary py-1">add</button>
      </form>
    </div>
  );
}

export default CommentForm;
