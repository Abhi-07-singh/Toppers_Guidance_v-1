import React from "react";
import { Link } from "react-router-dom";
import classes from  "./Header.module.css";
function Header() {
    return (
        <div>


            <div className={classes.Header}>
                <div className={classes.logo}>
                    <img src="./images/pinnacle (2).png" alt="logo_img"></img>
                </div>
                <div className={classes.search_bar_header}>
                    <div className={classes.search_img_header}>
                        <img src="./images/search.png" className={classes.search_bar_img} alt="search_img"></img>
                    </div>
                    <div className={classes.input_bar}>
                        <input type="search" placeholder="Search here" className={`${classes.input} ${classes.search}`}></input>
                    </div>
                </div>
                <div className={classes.login_bar}>
                    <Link to="/login">
                        <p className={classes.login}>Login / Signup</p>
                    </Link>  
                </div>
                <div className={classes.user_container}><img src="./images/user.png" alt="user_icon" className={classes.user_icon}></img></div>
                <div className={classes.red_dot}></div>
            </div>
        </div>
    )
}
export default Header;