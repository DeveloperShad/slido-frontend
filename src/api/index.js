import axios from 'axios'
const API = axios.create({baseURL:"https://slido-backend.herokuapp.com"})

API.interceptors.request.use((req)=>{
    const user = JSON.parse(localStorage.getItem('profile'));
    if(user){
        req.headers.authorization = `Bearer ${user.token}`
    }
    return req;
})

export const fetchPosts = ()=> API.get('/posts');
export const createNewPost = (newPost)=> API.post('/posts' ,newPost);
export const updatePost = (id,updatedPost)=> API.patch(`/posts/${id}`,updatedPost);
export const deletePost = (id)=> API.delete(`/posts/${id}`);
export const likePost = (id)=> API.patch(`/posts/${id}/likePost`)

export const signIn = (user)=> API.post('/users/signin',user);
export const signUp = (user)=> API.post('/users/signup',user);

