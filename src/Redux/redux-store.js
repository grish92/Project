import { createStore,combineReducers } from "redux";
import { dialogsReducer } from "./Reducer/dialogsReducer";
import {profileReducer} from './Reducer/profileReducer'
import { sideBarReducer } from "./Reducer/sideBarReducer";


let reducers= combineReducers({
    dialogs:dialogsReducer,
    profile:profileReducer,
    sideBar:sideBarReducer
})
let store =createStore(reducers)

export default store