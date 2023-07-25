import React from "react";
import { Link } from "react-router-dom";
import './Navbar.css';

const Navbar=()=>{
    return(
        <div className="n-wrapper">
            <div className="n-left">
                <div className="n-name">Ajit Gupta</div>
                <span>Toggle</span>
            </div>
            <div className="n-right">
                <div className="n-list">
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/services">Services</Link></li>
                        <li><Link to="/portfolio">Portfolio</Link></li>
                        <li><Link to="/about">About Us</Link></li>
                    </ul>
                </div>
                <button className="button">Contact Us</button>
            </div>
        </div>
    )
}
export default Navbar;