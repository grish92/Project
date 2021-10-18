import { createStore,combineReducers, applyMiddleware } from "redux";
import { dialogsReducer } from "./Reducer/dialogsReducer";
import {profileReducer} from './Reducer/profileReducer'
import { sideBarReducer } from "./Reducer/sideBarReducer";
import { usersReducer } from "./Reducer/usersReducer";
import thunkMiddleware from 'redux-thunk';

let reducers= combineReducers({
    dialogs:dialogsReducer,
    profile:profileReducer,
    sideBar:sideBarReducer,
    usersList:usersReducer,
})
let store =createStore(reducers,applyMiddleware(thunkMiddleware))

export default store