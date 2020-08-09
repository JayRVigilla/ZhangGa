import axios from 'axios';
import {
  FETCH_POST,
  FETCH_TITLES,
  ERROR,
  ADD_POST,
  UPDATE_POST,
  FETCH_COMMENTS,
  DELETE_POST,
  ADD_COMMENT,
  DELETE_COMMENT
} from './actionTypes';

const API_BASE_URL = 'http://localhost:5000/api/posts';

// // helper function from Medium to convert Arrays of Objects into an Object
// // https://medium.com/dailyjs/rewriting-javascript-converting-an-array-of-objects-to-an-object-ec579cafbfc7
// const arrayToObject = (array) =>
//   array.reduce((obj, item) => {
//     obj[item.id] = item;
//     delete obj[item.id].id; // deletes id key from api data to remove redundancies
//     return obj
//   }, {})

function fetchTitles(titles) {
  return {
    type: FETCH_TITLES,
    titles
  };
}

function fetchPostComments(comments) {
  return {
    type: FETCH_COMMENTS,
    comments
  };
}

function fetchPost(post) {
  // function fetchPost(postId){
  return {
    type: FETCH_POST,
    post
  };
}

function handleError(error) {
  return {
    type: ERROR,
    error
  };
}

function addPost(newPost) {
  return {
    type: ADD_POST,
    newPost
  };
}

function updatePost(updatedPost, postId) {
  return {
    type: UPDATE_POST,
    updatedPost,
    postId
  }
}


function deletePost(postId) {
  return {
    type: DELETE_POST,
    postId
  }
}

function addComment(newComment, postId) {
  console.log('addComment action called');
  return {
    type: ADD_COMMENT,
    newComment,
    postId
  }
}

function deleteComment(commentId, postId) {
  return {
    type: DELETE_COMMENT,
    commentId,
    postId
  }
}


/** Retrieve & dispatch all posts titles data. */

export function fetchTitlesFromAPI() {
  return async function (dispatch) {
    try {
      let titles = await axios.get(`${API_BASE_URL}/`);
      dispatch(fetchTitles(titles.data));
    } catch (error) {
      dispatch(handleError(error.response.data));
    }
  };
}

export function fetchPostCommentsFromAPI(postId) {
  return async function (dispatch) {
    try {
      let comments = await axios.get(`${API_BASE_URL}/${postId}/comments/`);
      dispatch(fetchPostComments(comments.data));
    } catch (error) {
      dispatch(handleError(error.response.data));
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
      dispatch(handleError(error.response.data));
    }
  };
}

export function createPostToAPI(postData) {
  return async function (dispatch) {
    try {
      let newPost = await axios.post(`${API_BASE_URL}`, postData);
      dispatch(addPost(newPost.data));
    } catch (error) {
      dispatch(handleError(error.response.data));
    }
  }
}

export function updatePostToAPI(postData, postId) {
  return async function (dispatch) {
    try {
      let updatedPost = await axios.put(`${API_BASE_URL}/${postId}`, postData);
      dispatch(updatePost(updatedPost.data));
    } catch (error) {
      dispatch(handleError(error.response.data));
    }
  }
}

export function deletePostFromAPI(postId) {
  return async function (dispatch) {
    try {
      await axios.delete(`${API_BASE_URL}/${postId}`);
      dispatch(deletePost(postId));
    } catch (error) {
      dispatch(handleError(error.response.data));
    }
  };
}

export function createCommentToAPI(commentData, postId) {
  return async function (dispatch) {
    try {
      let newComment = await axios.post(`${API_BASE_URL}/${postId}/comments`, commentData);
      dispatch(addComment(newComment.data));
    } catch (error) {
      dispatch(handleError(error.response.data));
    }
  }
}

export function deleteCommentFromAPI(commentId, postId) {

  return async function (dispatch) {
    try {
      await axios.delete(`${API_BASE_URL}/${postId}/comments/${commentId}`);
      dispatch(deleteComment(commentId, postId));
    } catch (error) {
      dispatch(handleError(error.response.data))
    }
  }
}