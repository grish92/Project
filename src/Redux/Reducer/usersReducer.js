import { usersApi } from "../../api/Api";

const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS";
const TOGGLE_IS_FETCHING = "TOGGLE_IS_FETCHING";
const CHANGE_CURRENT_PAGE = "CHANGE_CURRENT_PAGE";
const TOGGLE_IS_FOLLOWING_PROGRESS = "TOGGLE_IS_FOLLOWING_PROGRESS";

let initialState = {
  users: [],
  pageSize: 6,
  totalUsersCount: 12,
  currentPage: 1,
  isFetching: null,
  followingInProgress: [],
};

export const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case FOLLOW:
      return {
        ...state,
        users: state.users.map((u) => {
          if (u.id === action.userId) {
            return { ...u, followed: true };
          }
          return u;
        }),
      };

    case UNFOLLOW:
      return {
        ...state,
        users: state.users.map((u) => {
          if (u.id === action.userId) {
            return { ...u, followed: false };
          }
          return u;
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
    case TOGGLE_IS_FOLLOWING_PROGRESS:
      return {
        ...state,
        followingInProgress: action.isFetching
          ? [...state.followingInProgress, action.isFetching]
          : state.followingInProgress.filter((id) => id !== action.userId),
      };

    default:
      return state;
  }
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
export const toggleFollowingAC = (isFetching, userId) => {
  return {
    type: TOGGLE_IS_FOLLOWING_PROGRESS,
    isFetching,
    userId,
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
export const follow = (userId) => {
  return (dispatch) => {
    dispatch(toggleFollowingAC(false, userId));
    dispatch(unfollowSuccess(userId));
    dispatch(toggleFollowingAC(true, userId));
  };
};
export const unfollow = (userId) => {
  return (dispatch) => {
    dispatch(toggleFollowingAC(false, userId));
    dispatch(follow(userId));
    dispatch(toggleFollowingAC(true, userId));
  };
};
