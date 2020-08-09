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
  titles: {},
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

      // let title = { ...action.newPost };
      // delete title.body;

      return {
        ...state,
        post:
        {
          ...state.post,
          [action.newPost.id]: reformattedNewPost
        },
        titles: { ...state.titles }
      }

    case UPDATE_POST:
      let reformattedUpdatedPost = { ...action.updatedPost };
      delete reformattedUpdatedPost.id;

      let updatedTitle = { ...action.updatedPost }
      delete updatedTitle.body;

      return {
        ...state,
        titles: {...state.titles}
      }

    case DELETE_POST:
      let titlesCopy = [...state.titles].filter(title => title.id !== action.postId);

      return {
        ...state,
        post: {},
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