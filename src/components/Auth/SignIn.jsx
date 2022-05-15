
import React, { useState } from 'react'
import Style from './signin.module.css';
import { signIn } from "../../actions/auth";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { GoogleLogin } from 'react-google-login'

export const SignIn = ({ googleSuccess, googleFailure, setIsSignIn, isSignIn }) => {
    const initUser = { email: '', password: '' }
    const [user, setUser] = useState(initUser);
    const dispatch = useDispatch();
    const navigate = useNavigate();


    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(signIn(user, navigate))
    }

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUser({ ...user, [name]: value })
    }

    return (
        <div className={Style.signin}>
            <div className={Style.signin__title}>
                <h2>Sign In</h2>
            </div>
            <form onSubmit={handleSubmit}>
                <div className={Style.signin__credential_cont}>
                    <input type="email" name="email" onChange={handleChange} value={user.email} placeholder="Enter Your Email" />
                    <input type="password" name="password" onChange={handleChange} value={user.password} placeholder="Enter Your Password" />
                </div>
                <div className={Style.signin__submit}>
                    <input type="submit" value="Sign In" />
                </div>
            </form>
            <div className={Style.signin__google_login_btn}>
                <GoogleLogin
                    clientId="57068600894-v6tcaldjjil72rhu7epl2ts8dnn2gid2.apps.googleusercontent.com"
                    render={(renderProps) => (
                        <button
                            onClick={renderProps.onClick}
                            disabled={renderProps.disabled}
                        ><i className="fab fa-google"></i> Google Login</button>
                    )}
                    onSuccess={googleSuccess}
                    onFailure={googleFailure}
                    cookiePolicy="single_host_origin"
                />
            </div>
            <div className={Style.signin__switch_btn}>
                <button onClick={() => setIsSignIn(!isSignIn)}>{!isSignIn ? 'Already have an account? Login' : "You don't have an account? Signup"}</button>
            </div>
        </div>
    )
}
