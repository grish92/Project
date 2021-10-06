import { connect } from "react-redux"
import { followAC,setUsersAC,unfollowAC } from "../../Redux/Reducer/usersReducer"
import { Users } from "./Users"

let mapStateToProps=(state)=>{
    console.log('users',state)
    return{
       users: state.usersList.users

    }
}
let mapDispatchToProps=(dispatch)=>{
    return{
        follow:(userId)=>{
            dispatch(followAC(userId))
        },
        unFollow:(userId)=>{
            dispatch(unfollowAC(userId))
        },
        setUser:(users)=>{
            dispatch(setUsersAC(users))
        }
    }
}


export const UsersContainer=connect(mapStateToProps,mapDispatchToProps)(Users)