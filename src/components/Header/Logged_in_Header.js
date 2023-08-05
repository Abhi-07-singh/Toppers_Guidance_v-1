import React from 'react';
import classes from "./Logged_in_Header.module.css";
import { FaHome, FaUser } from 'react-icons/fa';

const LoggedInHeader = () => {  
    return (
        <>
            <div className={classes.Header}>
                <div className={classes.logo}>
                    <img src='./images/pinnacle (2).png' alt='logo_img'></img>
                </div>
                <div className={classes.search_bar_header}>
                    <div className={classes.search_img_header}>
                        <img src='./images/search.png' className={classes.search_bar_img} alt='search_img'></img>
                    </div>
                    <div className={classes.input_bar}>
                        <input type='search' placeholder='search here' className={`${classes.input} ${classes.search}`}></input>
                    </div>
                </div>
                <div className={classes.loggedin_bar}>
                    <FaHome size="35px" className={classes.home_icon} />
                </div>
                <div className={classes.logged_user_container}><FaUser className={classes.logged_user_icon} size='25px' /></div>
                <div className={classes.green_dot}></div>
            </div>

        </>
    )
}

export default LoggedInHeader;
