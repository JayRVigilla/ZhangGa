import axios from 'axios';
import {
  fetchPost,
fetchTitles,
  handleError,
  addPost,
  updatePost,
  fetchPostComments,
  deletePost,
  addComment,
  deleteComment
} from './actions';

const API_BASE_URL = process.env.REACT_APP_SERVER_URL ?? 'http://localhost:5000/api/posts';

// // helper function from Medium to convert Arrays of Objects into an Object
// // https://medium.com/dailyjs/rewriting-javascript-converting-an-array-of-objects-to-an-object-ec579cafbfc7
const arrayToObject = (array) =>
  array.reduce((obj, item) => {
    obj[item.id] = item;
    delete obj[item.id].id; // deletes id key from api data to remove redundancies
    return obj
  }, {})

/** Retrieve & dispatch all posts titles data. */

export function fetchTitlesFromAPI() {
  return async function (dispatch) {
    try {
      const titles = await axios.get(`${API_BASE_URL}/`);
      const titlesObj = arrayToObject(titles.data);
      dispatch(fetchTitles(titlesObj));
    } catch (error) {
      dispatch(handleError(error.response));
    }
  };
}

export function fetchPostCommentsFromAPI(postId) {
  return async function (dispatch) {
    try {
      let comments = await axios.get(`${API_BASE_URL}/${postId}/comments/`);
      dispatch(fetchPostComments(comments.data));
    } catch (error) {
      dispatch(handleError(error.response));
    }
  }
}

/** Retrieve & dispatch a single post's data. */

export function fetchPostFromAPI(postId) {
  return async function (dispatch) {
    try {
      let resp = await axios.get(`${API_BASE_URL}/${postId}`);
      let post = resp.data;
      dispatch(fetchPost(post));

    } catch (error) {
      dispatch(handleError(error.response));
    }
  };
}

export function createPostToAPI(postData) {
  return async function (dispatch) {
    try {
      let newPost = await axios.post(`${API_BASE_URL}`, postData);
      dispatch(addPost(newPost.data));
    } catch (error) {
      dispatch(handleError(error.response));
    }
  }
}

export function updatePostToAPI(postData, postId) {
  return async function (dispatch) {
    try {
      let updatedPost = await axios.put(`${API_BASE_URL}/${postId}`, postData);
      dispatch(updatePost(updatedPost, postId));
    } catch (error) {
      dispatch(handleError(error.response));
    }
  }
}

export function deletePostFromAPI(postId) {
  return async function (dispatch) {
    try {
      await axios.delete(`${API_BASE_URL}/${postId}`);
      dispatch(deletePost(postId));
    } catch (error) {
      dispatch(handleError(error.response));
    }
  };
}

export function createCommentToAPI(commentData, postId) {
  return async function (dispatch) {
    try {
      let newComment = await axios.post(`${API_BASE_URL}/${postId}/comments`, commentData);
      dispatch(addComment(newComment.data));
    } catch (error) {
      dispatch(handleError(error.response));
    }
  }
}

export function deleteCommentFromAPI(commentId, postId) {

  return async function (dispatch) {
    try {
      await axios.delete(`${API_BASE_URL}/${postId}/comments/${commentId}`);
      dispatch(deleteComment(commentId, postId));
    } catch (error) {
      dispatch(handleError(error.response))
    }
  }
}