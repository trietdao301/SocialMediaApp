import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import './Login.css';
import { auth } from "../firebase";
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";


const Login = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const isAuthorized = useSelector((state) => state.auth.isAuthorized);

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const submitForm = async (e) => {
        e.preventDefault();

        signInWithEmailAndPassword(auth, email, password)
            .then(auth => {
                navigate('/')
                console.log(auth)
            })
            .catch(error => alert(error.message))
    };
    function register(e) {
        e.preventDefault();
        //do firebase register 

        createUserWithEmailAndPassword(auth, email, password)
            .then((auth) => {
                // it successfully created a new user with email and password
                if (auth) {
                    navigate('./')
                }
            })
            .catch(error => alert(error.message))
    }
    console.log('Run in login');

    return (
        <>
            <div className="login">
                <Link to="/">
                    <img
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
                        className="login__logo"
                        alt="Amazon Logo"
                    />
                </Link>
                <div className="login__container">
                    <h1>Sign-in</h1>
                    <form className="login__form" onSubmit={submitForm}>
                        <div className="form-group">
                            <label className="login__label" htmlFor="email">
                                Email
                            </label>
                            <input
                                type="email"
                                className="form-input"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label className="login__label" htmlFor="password">
                                Password
                            </label>
                            <input
                                type="password"
                                className="form-input"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                        </div>
                        <button type="submit" className="login__signInButton">
                            Sign in
                        </button>
                    </form>
                    <p>
                        By signing-in you agree to the AMAZON FAKE CLONE Conditions of Use & Sale. Please see our Privacy Notice,
                        our Cookies Notice and our Interest-Based Ads Notice.
                    </p>
                    <button onClick={register} className="login__registerButton">Create your Amazon Account</button>
                </div>
            </div>
        </>
    );
};

export default Login;
