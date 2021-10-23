import { getPost, usersApi } from "../../api/Api";

const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS";
const TOGGLE_IS_FETCHING = "TOGGLE_IS_FETCHING";
const CHANGE_CURRENT_PAGE = "CHANGE_CURRENT_PAGE";
const SET_USER_PROFILE = "SET_USER_PROFILE";
const SET_POSTS_OF_USER = "SET_POSTS_OF_USER";
const SEND_MESSAGE = "SEND_MESSAGE";

let initialState = {
  users: [],
  pageSize: 6,
  totalUsersCount: 12,
  currentPage: 1,
  isFetching: null,
  profile: null,
  posts: [],
  followedList: [],
  sendMessage: [],
};

export const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case FOLLOW:
      return {
        ...state,
        followedList: state.followedList.concat(
          state.users.filter((user) => {
            if (user.id === action.userId) {
              return user;
            }
          })
        ),
      };

    case UNFOLLOW:
      return {
        ...state,
        followedList: state.followedList.filter((user) => {
          if (user.id !== action.userId) {
            return user;
          }
        }),
      };
    case SET_USERS:
      return {
        ...state,
        users: action.users,
      };
    case TOGGLE_IS_FETCHING:
      return {
        ...state,
        isFetching: action.isFetching,
      };
    case CHANGE_CURRENT_PAGE:
      return {
        ...state,
        currentPage: action.currentPage,
      };

    case SET_USER_PROFILE:
      return {
        ...state,
        profile: action.profile,
      };
    case SET_POSTS_OF_USER:
      return {
        ...state,
        posts: action.posts,
      };
    case SEND_MESSAGE:
      return {
        ...state,
        sendMessage: state.sendMessage.concat(
          state.users.filter((user) => {
            if (user.id === action.userId) {
              return user;
            }
          })
        ),
      };
    default:
      return state;
  }
};

export const sendMessageAC = (userId) => {
  return {
    type: SEND_MESSAGE,
    userId,
  };
};
export const followSuccess = (userId) => {
  return {
    type: FOLLOW,
    userId,
  };
};

export const unfollowSuccess = (userId) => {
  return {
    type: UNFOLLOW,
    userId,
  };
};

export const setUsersAC = (users) => {
  return {
    type: SET_USERS,
    users,
  };
};
export const toggleIsFetchingAC = (isFetching) => {
  return {
    type: TOGGLE_IS_FETCHING,
    isFetching,
  };
};
export const changeCurrentPageAC = (currentPage) => {
  return {
    type: CHANGE_CURRENT_PAGE,
    currentPage,
  };
};

export const setUserProfileAC = (profile) => {
  return {
    type: SET_USER_PROFILE,
    profile,
  };
};
export const setPostsOfUserAC = (posts, userId) => {
  return {
    type: SET_POSTS_OF_USER,
    posts,
    userId,
  };
};

export const getPosts = (userId) => {
  return (dispatch) => {
    getPost(userId).then((data) => {
      dispatch(setPostsOfUserAC(data));
    });
  };
};

export const getUser = (userId) => {
  return (dispatch) => {
    usersApi.getUser(userId).then((data) => {
      dispatch(setUserProfileAC(data.data));
    });
  };
};
export const getUsers = (currentPage) => {
  return (dispatch) => {
    dispatch(changeCurrentPageAC(currentPage));
    dispatch(toggleIsFetchingAC(true));
    usersApi.getUsers(currentPage).then((data) => {
      dispatch(toggleIsFetchingAC(false));
      dispatch(setUsersAC(data.data));
    });
  };
};
