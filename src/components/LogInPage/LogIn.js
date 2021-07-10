import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import './LogIn.css';

const LogIn = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [validateEmail, setValidatedEmail] = useState();
    const [validatePassword, setValidatedPassword] = useState();

    const emailHandler = (event) => {
        setEmail(event.target.value);
    }

    const passwordHandler = (event) => {
        setPassword(event.target.value);
    }

    const validateEmailHandler = () => {
        setValidatedEmail(email.includes("@"));
    }

    const validatePasswordHandler = () => {
        setValidatedPassword(password.trim().length >= 8);
    }

    return (
        <div className="container">
            <div className="login mt-5">

                <div className="mt-5 text-center">
                    <h1 className="title">Login</h1>
                    <p className="card-subtitle">
                        Don't have an account? Join us{" "}
                        <Link to="/signup" className="card-link">
                            Here
                        </Link>
                    </p>
                </div>

                <form>

                    <div className="d-flex justify-content-center">
                        <div className="col-8 mb-4 mt-3">
                            <div className={`${validateEmail === false ? "invalid" : ""}`}>
                                <label className="form-label" htmlFor="email">
                                    Email{" "}
                                </label>
                                <input className="form-control" onChange={emailHandler}
                                    onBlur={validateEmailHandler} required />
                                {validateEmail === false && <p>Please enter valid email.</p>}
                            </div>

                        </div>
                    </div>

                    <div className="d-flex justify-content-center">
                        <div className="col-8 mb-4">
                            <div className={`${validatePassword === false ? "invalid" : ""}`}>
                                <label className="form-label" htmlFor="password">
                                    Password
                                </label>
                                <input className="form-control" onChange={passwordHandler}
                                    onBlur={validatePasswordHandler} required />
                                {validatePassword === false && <p>Password must be 8 characters long.</p>}
                            </div>

                        </div>
                    </div>

                    <div className="d-flex justify-content-center">
                        <div className="col-sm-8 ">
                            <div className="form-check">
                                <label className="form-check-label" htmlFor="rememberMe">
                                    {" "}
                                    Remember me{" "}
                                </label>
                                <input className="form-check-input" type="checkbox" />
                            </div>
                        </div>
                        {/* <div className="col">
                            <Link className="link-forgot">
                                Forgot password?
                            </Link>
                        </div> */}
                    </div>

                    <div className="mb-5 d-flex justify-content-center">
                        <button type="submit" className="btn login mb-4">
                            Login
                        </button>
                    </div>

                </form>

            </div>
        </div >
    )
}

export default LogIn
