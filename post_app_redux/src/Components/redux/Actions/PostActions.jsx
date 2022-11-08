import { useDispatch } from "react-redux"
import { CREATE_POST, DELETE_POST, DISLIKE_POST, LIKE_POST } from "../action_types"



export const handle_dislike= (id)=>{
    return {type:DISLIKE_POST, id}

}
export const handle_delete = (id)=>{
 return {type:DELETE_POST, id}
}
export const handle_like = (id)=>{
    console.log('j');
    return {type:LIKE_POST, id}

}
export const handle_create = ( data)=>{
    
    return  {type:CREATE_POST, data: data}
}