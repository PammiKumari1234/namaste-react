import { useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";

const Header = () =>{
const[btnName,setBtnName]= useState("Login");

    return(
        <div className="header">
            <div className="logo-container">
                <img src={LOGO_URL} alt="" className="logo" />
            </div>
            <div className="nav-items">
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About us</Link> </li>
                    <li><Link to="/Contact">Contact Us</Link> </li>
                    <li>Cart</li>
                    <button 
                    className="login-btn" 
                    onClick={()=>{
                        btnName==="Login"?setBtnName("Logout"):setBtnName("Login");
                        }}>{btnName}</button>
                </ul>
            </div>
        </div>
    )
}

export default Header;