import React, { useState } from "react"
import classes from "./ProfileInfo.module.css";


export const ProfileStatus =(props)=>{
 const[editMode,setEditMode]=useState(false)

 const activateMode=()=>{
     setEditMode(true)
 }
 const deActivateMode=()=>{
     setEditMode(false)
 }
return(
    <div>
        {!editMode &&
        <div  >
        <span onDoubleClick={activateMode}>Hello</span>
        </div>
        }
        {editMode&&
        <div>
            <input autoFocus={true} onBlur={deActivateMode} value={props.value}/>
        </div>
}
    </div>
)
}