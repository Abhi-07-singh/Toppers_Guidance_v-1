import React from 'react';
import "./Profile_Dashboard_Layout.css";
import Header from '../../components/Header/Header';
import Navbar from '../../components/Sidebar_Dashboard/Sidebar_Dashboard';
import { Outlet } from 'react-router-dom';

const ProfileDashBoardLayout = () => {
    return (
        <>
            <div className='dashboard_page_layout'>
                <div className='header_page_layout'>
                    <Header />
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
