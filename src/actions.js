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

export function fetchTitles(titles) {
  return {
    type: FETCH_TITLES,
    titles
  };
}

export function fetchPostComments(comments) {
  return {
    type: FETCH_COMMENTS,
    comments
  };
}

export function fetchPost(post) {
  return {
    type: FETCH_POST,
    post
  };
}

export function handleError(error) {
  return {
    type: ERROR,
    error
  };
}

export function addPost(newPost) {
  return {
    type: ADD_POST,
    newPost
  };
}

export function updatePost(updatedPost, postId) {
  return {
    type: UPDATE_POST,
    updatedPost,
    postId
  }
}


export function deletePost(postId) {
  return {
    type: DELETE_POST,
    postId
  }
}

export function addComment(newComment, postId) {
  return {
    type: ADD_COMMENT,
    newComment,
    postId
  }
}

export function deleteComment(commentId, postId) {
  return {
    type: DELETE_COMMENT,
    commentId,
    postId
  }
}

