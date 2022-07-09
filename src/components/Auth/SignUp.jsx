
import React, { useState } from 'react'
import FileBase from 'react-file-base64'
import Style from './signup.module.css';
import { useDispatch } from 'react-redux'
import { useNavigate } from "react-router-dom";
import { signUp } from "../../actions/auth";
import { GoogleLogin } from 'react-google-login'


export const SignUp = ({ googleSuccess, googleFailure, setIsSignIn, isSignIn }) => {
    const initUser = { first_name: '', last_name: '', email: '', password: '', confirm_password: '', selectedFile: '' }
    const [user, setUser] = useState(initUser);
    const dipatch = useDispatch();
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        // console.log('helloUser',user)
        dipatch(signUp(user, navigate))

    }

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUser({ ...user, [name]: value })
    }

    return (
        <div className={Style.signup}>
            <div className={Style.signup__title}>
                <h2>Sign Up</h2>
            </div>
            <form onSubmit={handleSubmit}>
                <div className={Style.signup__name}>
                    <input type="text" name="first_name" onChange={handleChange} value={user.first_name} placeholder="Enter Your First Name" />
                    <input type="text" name="last_name" onChange={handleChange} value={user.last_name} placeholder="Enter Your Last Name" />
                </div>
                <div className={Style.signup__email}>
                    <input type="email" name="email" onChange={handleChange} value={user.email} placeholder="Enter Your Email" />
                </div>
                <div className={Style.signup__password}>
                    <input type="password" name="password" onChange={handleChange} value={user.password} placeholder="Enter Your Password" />
                    <input type="password" name="confirm_password" onChange={handleChange} value={user.confirm_password} placeholder="Confirm Password" />
                </div>
                <div className={Style.signup__image_file}>
                    <FileBase type="file" multiple={false} onDone={({ base64 }) => setUser({ ...user, selectedFile: base64 })} />
                </div>
                <div className={Style.signup__submit}>
                    <input type="submit" value="Sign Up" />
                </div>
            </form>
            {/* <div className={Style.signup__google_login_btn}>
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
            </div> */}
            <div className={Style.signup__switch_btn}>
                <button onClick={() => setIsSignIn(!isSignIn)}>{!isSignIn ? 'Already have an account? Login' : "You don't have an account? Signup"}</button>
            </div>
        </div>
    )
}
