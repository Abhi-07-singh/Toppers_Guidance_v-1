import React from "react";
import "./Footer.css";
import {FaInstagram, FaFacebook} from "react-icons/fa";
function Footer() {
    return (
        <>
            <div className="footer_container">
                <div className="footer_1st_row">
                    <div className="footer_elements"><p>HOME</p></div>
                    <div className="footer_elements"><p>ABOUT_US </p></div>
                    <div className="footer_elements"><p>SERVICES</p></div>
                    <div className="footer_elements"><p>POLICY</p></div>
                    <div className="footer_elements"><p>CONTACT</p></div>
                    <div className="footer_elements"><p>QUERIES</p></div>
                    <div className="footer_elements"><p>TERMS_&_CONDITION</p></div>

                </div>
                <div className="icons_fb_insta">
                <FaInstagram className="insta_icon" size="40px"/>
                <FaFacebook className="fb_icon" size="40px" />
                <div className="get_in_touch"><p>Get In Touch</p></div>

                </div>
            </div>
        </>
    )
}
export default Footer;