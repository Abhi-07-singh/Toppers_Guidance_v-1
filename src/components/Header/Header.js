import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
function Header() {
    return (
        <div>


            <div className="Header">
                <div className="logo">
                    <img src="./images/pinnacle (2).png" alt="logo_img"></img>
                </div>
                <div className="search_bar_header">
                    <div className="search_img_header">
                        <img src="./images/search.png" className="search_bar_img" alt="search_img"></img>
                    </div>
                    <div className="input_bar">
                        <input type="search" placeholder="Search here" className="input search"></input>
                    </div>
                </div>
                <div className="login_bar">
                    <Link to="/login">
                        <p className="login">Login / Signup</p>
                    </Link>  
                </div>
                <div className="user_container"><img src="./images/user.png" alt="user_icon" className="user_icon"></img></div>
                <div className="red_dot"></div>
            </div>
        </div>
    )
}
export default Header;