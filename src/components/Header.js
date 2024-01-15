import { useState } from "react";
import { LOGO_URL } from "../utils/constants";

const Header = () =>{
const[btnName,setBtnName]= useState("Login");

    return(
        <div className="header">
            <div className="logo-container">
                <img src={LOGO_URL} alt="" className="logo" />
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contacts</li>
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