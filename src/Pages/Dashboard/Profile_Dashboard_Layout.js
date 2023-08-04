import React from 'react';
import "./Profile_Dashboard_Layout.css";
import Navbar from '../../components/Sidebar_Dashboard/Sidebar_Dashboard';
import { Outlet } from 'react-router-dom';
import LoggedInHeader from '../../components/Header/Logged_in_Header';

const ProfileDashBoardLayout = () => {
    return (
        <>
            <div className='dashboard_page_layout'>
                <div className='header_page_layout'>
                    <LoggedInHeader />
                </div>
                <div className='dashboard_home_page_topper'>
                    <div className='navbar_section_layout'>
                        <Navbar />
                    </div>
                    <div className='outlet_section'>
                        
                        <Outlet />

                    </div>
                </div>
            </div>
            

        </>
    )
}

export default ProfileDashBoardLayout;
