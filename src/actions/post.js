
import * as api from '../api/index';
import { FETCH_ALL,DELETE,CREATE,UPDATE } from '../constants/actionTypes';

//Action creator 

export const getPosts = ()=> async (dispatch)=>{
    try {
        const {data} = await api.fetchPosts();
        // console.log('data',data)
        dispatch({type:FETCH_ALL,payload:data})
    } catch (error) {
        console.log(error)
    }
}

export const createPost = (post)=> async (dispatch)=>{
    try {
        const {data} = await api.createNewPost(post);
        dispatch({type:CREATE,payload:data})
    } catch (error) {
        console.log(error)
    }
}

export const updatePost = (id,post)=> async (dispatch)=>{
    try {
        const {data} = await api.updatePost(id,post);
        dispatch({type:UPDATE,payload:data})
    } catch (error) {
        console.log(error)
    }
}

export const deletePost = (id)=> async (dispatch)=>{
    try {
        await api.deletePost(id)
        dispatch({type:DELETE,payload:id});
    } catch (error) {
        console.log(error)
    }
}

export const likePost = (id)=>async (dispatch)=>{
    try {
        const {data} = await api.likePost(id)
        dispatch({type:UPDATE,payload:data})
    } catch (error) {
        console.log(error);
    }
}