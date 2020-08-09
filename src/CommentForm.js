import React, { useState } from 'react';
import './CommentForm.css';
import { useDispatch } from 'react-redux';
import { createCommentToAPI } from './actionCreators';

/** CommentForm: Component that renders the form to add a comment to a post
 *    - Holds state of formdata
 *    - Holds props of postId and addComment
 *    - Used in PostDetail component
 */

function CommentForm({ postId }) {

  const INITIAL_STATE = ({ text: "" });
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({ ...INITIAL_STATE });

  const handleChange = evt => {
    const { name, value } = evt.target;
    setFormData(fData => ({
      ...fData,
      [name]: value
    }));
  }

  const handleSubmit = (evt) => {
    evt.preventDefault();
    const newFormData = {
      ...formData,
    }
    async function addCommentFromForm() {
      await dispatch(createCommentToAPI(newFormData, postId));
    }
    addCommentFromForm();
    setFormData({ ...INITIAL_STATE });
  }


  return (
    <div className="CommentForm">
      <form onSubmit={handleSubmit}>

        <label className="CommentForm-label" htmlFor="text">Add Comment</label>
        <input name="text"
          value={formData.text}
          onChange={handleChange}>
        </input>

        <button className="CommentForm-button btn btn-primary py-1">add</button>
      </form>
    </div>
  );
}

export default CommentForm;
