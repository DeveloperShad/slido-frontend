
import { FETCH_ALL,DELETE,CREATE,UPDATE } from '../constants/actionTypes';


export const postReducer = (posts=[],action)=>{
    switch(action.type){
        case FETCH_ALL:
            return action.payload;
        case DELETE:
            return posts.filter(post=> post._id !== action.payload)
        case UPDATE:
            return posts.map(post=> post._id === action.payload._id? action.payload:post);
        case CREATE:
            return [...posts, action.payload];
        default:
            return posts    
    }
}