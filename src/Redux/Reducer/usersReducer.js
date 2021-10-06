const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = 'SET_USERS'

let initialState = {
  users: [
    {
      id: 1,
      photo:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsm56ieYOuTZe84DQ0mG-uTe4YIXtsyJITsg&usqp=CAU',
      followed: true,
      status: "status1",
      name: "name1",
      surname: "surname1",
      country: "country1",
      city: "city1",
    },
    {
      id: 2,
      photo:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHooEHD0fJJfD6mFb6a1poFaqazKv7wppdWA&usqp=CAU',
      followed: false,
      status: "status2",
      name: "name2",
      surname: "surname2",
      country: "country2",
      city: "city2",
    },
    {
      id: 3,
      photo:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0IYzhnJHmslRnQDdYHGVIDw5YWiumvbqr6w&usqp=CAU',
      followed: true,
      status: "status3",
      name: "name3",
      surname: "surname3",
      country: "country3",
      city: "city3",
    },
    {
      id: 4,
      photo:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSU-60u4W6v7DQLp3GcjWT8xPV-hLo_fHqzxQ&usqp=CAU',
      followed: false,
      status: "status4",
      name: "name4",
      surname: "surname4",
      country: "country4",
      city: "city4",
    },
  ],
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
        return{
          state
        }

    default:
      return state;
  }
};

export const followAC = (userId) => {
  return {
    type: FOLLOW,
    userId
  };
};

export const unfollowAC = (userId) => {
  return {
    type: UNFOLLOW,
    userId
  };
};

export const setUsersAC = (users)=>{
  return {
    type:SET_USERS,
    users
  }
}
