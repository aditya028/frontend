import React from 'react'
import "./css/navbar.css"
import {Link} from "react-router-dom";
import logo from "./images/logo.png"
import hamburger from "./images/hamburger.png"

function NavBar() {
    return (
        <>
 <nav>
        <div className="logo">
            <div className="imgLogo">
            <Link to="/"><img className="image1" src={logo}  alt="sdcsdcfd" /></Link>
            </div>
            <Link to="/"><img className="hamburger" src={hamburger}  alt="hamburger" /></Link>
        </div>
        <div className="listItem">
            <ul>
                <Link to="/"><li>Home</li></Link>
                <Link to="/services"><li>Services</li></Link>
                <Link to="/contact"><li>Contact</li></Link>
                <Link to="/login"><li><button className="btn1">Login</button></li></Link>
               <Link to="/signup"> <li><button className="btn2">Signup</button></li></Link>
            </ul>
        </div>
    </nav>
        </>
    )
}

export default NavBar;