import React from "react";
import "./AboutUs.css";
import { FaCheckCircle, FaUserCircle} from "react-icons/fa";
import { Link } from "react-router-dom";

const AboutUs = () => {
  return (
    <>
    
      <div className="AboutUsTotal">
        <div className="AboutUs">
          <h1>About me :-</h1>
          <p>
          In SSC CGL final result 2022, I Mohit Choudhary who hails from Kishangarh tehsil, Rajasthan 
        have topped the CGL examination. I have been shortlisted for the post of Income Tax Officer
        under the Ministry of Finance. I attributed my success to self-study for 12 hours duration 
        every day and online coaching.

            <br />   Enthused by my success, 23-year-old I shared my success tips 
        to my fellow examinees and others across the country, saying, “Best guidance is necessary for 
        success in competitive exams, but at the same time, focus on the goal with determination till 
        the end and make the right strategy.” It is also essential to keep growing with the confidence
        you have.

          </p>
        </div>
        <div className="profile">
        <div className="profile_details">
          <div className="img_pro">
            {/* <img src="./images/trande.png" alt="profile" /> */}
            <FaUserCircle size="100px" />
          </div>
          <div className="pro_item">
            <h2>Mohit Choudhary <FaCheckCircle className="verify_icon"/> </h2>
            <h4>AIR :- 01</h4>
            <h4>Attempt :- 2nd</h4>
            <h4>Post :- Income-Tax Officer</h4>
            <p>(Finance Ministry)</p>
          </div>
        </div>
          <div className="pro_btn">
           <Link to="/login"> <button type="button" className="follow_btn">Follow me</button></Link>
            <button type="button" className="Dashboard" disabled >Open Dashboard</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUs;
