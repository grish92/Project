let initialState= {
    sideBarPages: [
      { id: "1", name: "Profile", to: "/profile",src:"https://img.icons8.com/officel/16/000000/administrator-male.png"},
      { id: "2", name: "Messages", to: "/dialogs",src:"https://img.icons8.com/office/30/000000/chat.png" },
      { id: "3", name: "News", to: "/news",src:"https://img.icons8.com/officel/16/000000/news.png"},
      { id: "4", name: "Music", to: "/music",src:"https://img.icons8.com/officel/16/000000/musical.png" },
      { id: "5", name: "Settings", to: "/settings",src:"https://img.icons8.com/officel/16/000000/settings--v1.png" },
      { id: "6", name: "New Users", to: "/users",src:"https://img.icons8.com/officel/16/000000/add-user-male.png"},
    ],
    following: [
    
    ],
  }

export const sideBarReducer = (state=initialState,action)=>{
 return state   
}