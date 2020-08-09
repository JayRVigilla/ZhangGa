import {
  FETCH_POST,
  FETCH_TITLES,
  FETCH_COMMENTS,
  ERROR,
  ADD_POST,
  UPDATE_POST,
  DELETE_POST,
  ADD_COMMENT,
  DELETE_COMMENT
} from './actionTypes';

const DEFAULT_STATE = {
  post: {},
  titles: [],
  comments: []
}


// TODO: destructure variables from action

function rootReducer(state = DEFAULT_STATE, action) {
  switch (action.type) {
    case FETCH_TITLES:
      return { ...state, titles: action.titles }

    case FETCH_POST:
      return {
        ...state,
        post: action.post,
      }

    case ERROR:
      return {}

    case ADD_POST:
      let reformattedNewPost = { ...action.newPost };
      delete reformattedNewPost.id;

      let title = { ...action.newPost };
      delete title.body;

      return {
        ...state, idToPost:
        {
          ...state.idToPost,
          [action.newPost.id]: reformattedNewPost
        },
        titles: [...state.titles, title]
      }

    case UPDATE_POST:
      let idToCommentsCopy = { ...state.idToPost[action.updatedPost.id].idToComment };
      let reformattedUpdatedPost = { ...action.updatedPost };
      reformattedUpdatedPost.idToComment = idToCommentsCopy;
      delete reformattedUpdatedPost.id;

      let updatedTitle = { ...action.updatedPost }
      delete title.body;

      return {
        ...state, idToPost:
        {
          ...state.idToPost,
          [action.updatedPost.id]: reformattedUpdatedPost
        },
        titles: [...state.titles, updatedTitle]
      }

    case DELETE_POST:
      let idToPostCopy = { ...state.idToPost }
      delete idToPostCopy[action.postId];

      let titlesCopy = [...state.titles].filter(title => title.id !== action.postId);

      return {
        ...state, idToPost:
          { ...idToPostCopy },
        titles: titlesCopy
      };

    case FETCH_COMMENTS:
      return {
        ...state,
        comments: action.comments
      };

    case ADD_COMMENT:
      return {
        ...state,
        comments: [...state.comments, action.newComment],
      };

    case DELETE_COMMENT:
      let postCommentsCopy = state.comments.filter( c => c.id !== action.commentId);
      return {
        ...state,
          comments: postCommentsCopy,
      };

    default:
      return state
  }
}



export default rootReducer;