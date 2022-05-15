
import {AUTH,LOGOUT} from '../constants/actionTypes'
// const initUser = {token:'', user:{email:'',familyName:'',givenName:'',googleId:'',imageUrl:'',name:''}}
const initUser = JSON.parse(localStorage.getItem('profile'))
export const authReducer = (auth = initUser,action)=>{
    switch (action.type) {
        case AUTH:
            // console.log('hello from red',action?.data)
            localStorage.setItem('profile',JSON.stringify(action?.data))

            return {...auth,token:action.data.token,user:action.data.user}
        case LOGOUT:
            console.log('hello from logout')
            localStorage.removeItem('profile');
            return {...auth,token:null,user:null}
        default:
           return auth
    }
} 