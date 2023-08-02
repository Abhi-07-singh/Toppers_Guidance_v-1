import React from "react";
import { Link } from "react-router-dom";
import "./Card.css";
function Card(){
    return(
        
        <div className="card">
            <div>
                <img src="./images/user.svg" className="dp" alt="user_img"></img>
            </div>
            <div className="details">
                <h3>ISHITA KISHORE</h3>
            </div>
            <div className="details">
                <p>SSC CGL 2022</p>
            </div>
            <div className="details">
                <p>AIR 11th</p>
            </div>
            <div className="details fb-details">
                <p>FOLLOWERS :- 12k</p>
            </div>
            <div className="details fb-details">
                <p>LIKES :- 11k</p>
            </div>
            <div className="open-button">
               <Link to="/profile"> <button type="button">OPEN PROFILE</button></Link>
            </div>
        </div>
        
    )
}
export default Card;