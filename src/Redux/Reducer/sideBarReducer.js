let initialState= {
    sideBarPages: [
      { id: "1", name: "Profile", to: "/profile" },
      { id: "2", name: "Messages", to: "/dialogs" },
      { id: "3", name: "News", to: "/news" },
      { id: "4", name: "Music", to: "/music" },
      { id: "5", name: "Settings", to: "/settings" },
      { id: "6", name: "New Users", to: "/users" },
    ],
    friends: [
      { id: '01', name: "User1" },
      { id: '02', name: "User2" },
      { id: '03', name: "User3" },
    ],
  }

export const sideBarReducer = (state=initialState,action)=>{
 return state   
}