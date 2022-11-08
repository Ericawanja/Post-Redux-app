import { useDispatch } from "react-redux"
import { CREATE_POST, DELETE_POST, EDIT_POST, LIKE_POST } from "../action_types"



export const handele_edit= (id)=>{
    return {type:EDIT_POST, id}

}
export const handle_delete = (id)=>{
 return {type:DELETE_POST, id}
}
export const handle_like = (id)=>{
    return {type:LIKE_POST, id}

}
export const handle_create = ( data)=>{
    
    return  {type:CREATE_POST, data: data}
}