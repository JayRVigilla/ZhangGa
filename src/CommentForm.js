import React, { useState } from 'react';
import './CommentForm.css';
import { useDispatch } from 'react-redux';
import { createCommentToAPI } from './actionCreators';
// import { v4 as uuid } from "uuid";

/** CommentForm: Component that renders the form to add a comment to a post
 *    - Holds state of formdata
 *    - Holds props of postId and addComment
 *    - Used in PostDetail component
 */

function CommentForm({ postId, addComment }) {

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
    console.log('*****\n\n Value of newFormData in ', newFormData, '\n\n *****')
    async function addCommentFromForm() {
      // await dispatch(addComment(newFormData, postId));
      await dispatch(createCommentToAPI(newFormData, postId));
    }
    addCommentFromForm();
    console.log('*****\n\n Passed addCommentFromForm from CommentForm \n\n *****')
    setFormData({ ...INITIAL_STATE });
  }


  return (
    <div className="CommentForm">
      <form onSubmit={handleSubmit}>

        <label className="CommentForm-label" htmlFor="text">Comment</label>
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
