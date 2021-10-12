import { connect } from "react-redux"
import { followAC,setUsersAC,toggleIsFetchingAC,unfollowAC } from "../../Redux/Reducer/usersReducer"
import { UsersApiComponent } from "./UsersApiComponent"


let mapStateToProps=(state)=>{
    console.log('users',state)
    return{
       users: state.usersList.users,
       isFetching:state.usersList.isFetching

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
        setUsers:(users)=>{
            dispatch(setUsersAC(users))
        },
        toggleIsFetching:(isFetching)=>{
            dispatch(toggleIsFetchingAC(isFetching))
        }
    }
}


export const UsersContainer = connect(mapStateToProps,mapDispatchToProps)(UsersApiComponent)