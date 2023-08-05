import React from "react";
import { Link } from "react-router-dom";
import classes from "./Card.module.css";
function Card(){
    return(
        
        <div className={classes.card}>
            <div>
                <img src="./images/user.svg" className={classes.dp} alt="user_img"></img>
            </div>
            <div className={classes.details}>
                <h3>ISHITA KISHORE</h3>
            </div>
            <div className={classes.details}>
                <p>SSC CGL 2022</p>
            </div>
            <div className={classes.details}>
                <p>AIR 11th</p>
            </div>
            <div className={`${classes.details} ${classes.fb_details}`}>
                <p>FOLLOWERS :- 12k</p>
            </div>
            <div className={`${classes.details} ${classes.fb_details}`}>
                <p>LIKES :- 11k</p>
            </div>
            <div className={classes.open_button}>
               <Link to="/profile"> <button type="button">OPEN PROFILE</button></Link>
            </div>
        </div>
        
    )
}
export default Card;