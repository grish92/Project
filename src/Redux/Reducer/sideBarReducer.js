let initialState= {
    sideBarPages: [
      { id: "1", name: "Profile", to: "profile" },
      { id: "1", name: "Messages", to: "dialogs" },
      { id: "1", name: "News", to: "news" },
      { id: "1", name: "Music", to: "music" },
      { id: "1", name: "Settings", to: "settings" },
    ],
    friends: [
      { id: 1, name: "User1" },
      { id: 2, name: "User2" },
      { id: 3, name: "User3" },
    ],
  }

export const sideBarReducer = (state=initialState,action)=>{
 return state   
}