import React from 'react';
import "./Logged_in_Header.css";
import { FaHome, FaUser } from 'react-icons/fa';

const LoggedInHeader = () => {  
    return (
        <>
            <div className='Header'>
                <div className='logo'>
                    <img src='./images/pinnacle (2).png' alt='logo_img'></img>
                </div>
                <div className='search_bar_header'>
                    <div className='search_img_header'>
                        <img src='./images/search.png' className='search_bar_img' alt='search_img'></img>
                    </div>
                    <div className='input_bar'>
                        <input type='search' placeholder='search here' className='input search'></input>
                    </div>
                </div>
                <div className='loggedin_bar'>
                    <FaHome size="35px" className='home_icon' />
                </div>
                <div className='logged_user_container'><FaUser className='logged_user_icon' size='25px' /></div>
                <div className='green_dot'></div>
            </div>

        </>
    )
}

export default LoggedInHeader;
