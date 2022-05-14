
import * as api from '../api/index';
import { AUTH } from '../constants/actionTypes';

export const signIn = (user, navigate) => async (dispatch) => {
    // signIn logic
    try {
        const { data } = await api.signIn(user);
        dispatch({ type: AUTH, data })
        navigate('/')
    } catch (error) {
        console.log(error)
    }
}

export const signUp = (user, navigate) => async (dispatch) => {
    //signUp logic
    try {
        const {data} = await api.signUp(user);
        dispatch({ type: AUTH, data })
        navigate('/')
    } catch (error) {
        console.log(error)
    }
}

