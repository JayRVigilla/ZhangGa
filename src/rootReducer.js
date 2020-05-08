import { } from "./actionTypes"
import {
  FETCH_POST,
  FETCH_TITLES,
  // FETCH_COMMENTS,
  ERROR,
  ADD_POST,
  UPDATE_POST,
  DELETE_POST,
  ADD_COMMENT,
  DELETE_COMMENT
} from './actionTypes';

const DEFAULT_STATE = {
  idToPost: {},
  // idToComment: {},
  titles: []
}


// TODO: destructure variables from action

function rootReducer(state = DEFAULT_STATE, action) {
  switch (action.type) {
    case FETCH_TITLES:
      return { ...state, titles: action.titles }

    // case FETCH_COMMENTS:
    //   return { ...state, idToComment: action.idToComment }

    case FETCH_POST:
      return {
        ...state, idToPost:
        {
          ...state.idToPost,
          [action.post.id]: action.post
        }
      }

    case 'ERROR':
      return { ...state, error: true };

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

    case ADD_COMMENT:

      return {
        ...state, idToPost:
        {
          ...state.idToPost, [action.postId]:
          {
            ...state.idToPost[action.postId],
            idToComment: {
              ...state.idToPost[action.postId].idToComment,
              [action.newComment.id]: action.newComment.text
            }
          }
        }
      };

    case DELETE_COMMENT:
      let postCommentsCopy = { ...state.idToPost[action.postId].idToComment };
      delete postCommentsCopy[action.commentId];
      // to return to see if we need to spread out everything or just directly change this one thing
      return { ...state, [state.idToPost[action.postId].idToComment]: postCommentsCopy };

    default:
      return state
  }
}



export default rootReducer;