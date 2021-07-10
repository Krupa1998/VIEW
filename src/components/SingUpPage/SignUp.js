import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import './SignUp.css';


const SignUp = () => {

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [validateFirstName, setValidatedFirstName] = useState();
    const [validateLastName, setValidatedLastName] = useState();
    const [validateEmail, setValidatedEmail] = useState();
    const [validatePassword, setValidatedPassword] = useState();

    const firstNameHandler = (event) => {
        setFirstName(event.target.value);
    }

    const lastNameHandler = (event) => {
        setLastName(event.target.value);
    }

    const emailHandler = (event) => {
        setEmail(event.target.value);
    }

    const passwordHandler = (event) => {
        setPassword(event.target.value);
    }

    const validateFirstNameHandler = () => {
        setValidatedFirstName(firstName.trim().length >= 3);
    }

    const validateLastNameHandler = () => {
        setValidatedLastName(lastName.trim().length >= 3);
    }

    const validateEmailHandler = () => {
        setValidatedEmail(email.includes("@"));
    }

    const validatePasswordHandler = () => {
        setValidatedPassword(password.trim().length >= 8);
    }


    return (
        <div className="container">
            <div className="signup mt-5">

                <div className="mt-5 text-center">
                    <h1 class="title">Sign Up</h1>
                    <p className="card-subtitle">
                        Already have an account? Login&nbsp;
                        <Link to="/login" className="card-link">
                            Here
                        </Link>
                    </p>
                </div>

                <form>
                    <div className="d-flex justify-content-center">

                        <div className="column1 col-sm-4 mt-3">

                            <div className={`${validateFirstName === false ? "invalid" : ""}`}>
                                <label className="form-label">
                                    First Name
                                </label>
                                <input className="form-control" onChange={firstNameHandler}
                                    onBlur={validateFirstNameHandler} required />
                                {validateFirstName === false && <p>Please enter your First Name</p>}
                            </div>

                        </div>


                        <div className="column2 col-sm-4 mt-3">
                            <div className={`${validateLastName === false ? "invalid" : ""}`}>
                                <label className="form-label">
                                    Last Name
                                </label>
                                <input className="form-control" onChange={lastNameHandler}
                                    onBlur={validateLastNameHandler} required />
                                {validateLastName === false && <p>Please enter your Last Name</p>}
                            </div>
                        </div>

                    </div>


                    <div className="d-flex justify-content-center">
                        <div className="col-8 mb-4 mt-3">
                            <div className={`${validateEmail === false ? "invalid" : ""}`}>
                                <label className="form-label">
                                    Email
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
                                <label className="form-label">
                                    Password
                                </label>
                                <input className="form-control" onChange={passwordHandler}
                                    onBlur={validatePasswordHandler} required />
                                {validatePassword === false && <p>Password must be 8 characters long.</p>}
                            </div>

                        </div>
                    </div>

                    <div className="mb-5 d-flex justify-content-center">
                        <button type="submit" className="btn login mb-4" >
                            Sign up
                        </button>
                    </div>

                </form>

            </div>
        </div>
    )
}

export default SignUp
