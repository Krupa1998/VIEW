import React from 'react'
import './Header.css';
import logo from '../../assets/img/logo1.png';
import '../../../node_modules/font-awesome/css/font-awesome.min.css';

import { Link } from "react-router-dom";

const Header = () => {
    return (

        <div className="topnav">

            {/* <Link className="logo" to="/"><img src={logo} width="120px" height="75x" /></Link> */}
            <div className="logo1">

                <Link className="logo" to="/">

                    <img src={logo} width="100px" height="60x" style={{ float: 'left' }} />
                    <div style={{ float: 'right', paddingTop: '0px', marginLeft: "-15px" }}><h1 class="logo-title">iew</h1></div>

                </Link>
            </div>
            <div className="header">
                <Link to="/movieslist">Movies</Link>
                <Link to="/tvlist">TV</Link>
            </div>

            <div className="header-right">
                <Link to="/login">Log In</Link>
                <Link to="/signup">Sign Up</Link>
            </div>


        </div >

    )
}

export default Header
