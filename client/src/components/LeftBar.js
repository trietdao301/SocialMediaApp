import React from 'react';
import { useState } from 'react'
import { NavLink, Link } from 'react-router-dom'
import './LeftBar.css'
import { useSelector, useDispatch } from 'react-redux';
import { ReactComponent as LogoImage } from "../assets/images/logo.svg";
import { ReactComponent as HomeIcon } from "../assets/icons/home.svg";
import { ReactComponent as ProfileIcon } from "../assets/icons/profile-placeholder.svg";
import { ReactComponent as SaveIcon } from "../assets/icons/save.svg";
import { ReactComponent as CreatePostIcon } from "../assets/icons/gallery-add.svg";
import { ReactComponent as PeopleIcon } from "../assets/icons/people.svg";
import { ReactComponent as ExploreIcon } from "../assets/icons/wallpaper.svg";
import { ReactComponent as LogoutIcon } from "../assets/icons/logout.svg";
import FlutterDashOutlinedIcon from '@mui/icons-material/FlutterDashOutlined';

const LeftBar = () => {

    return (
        <div className='left-bar-container'>
            <div className='logo'>
                <NavLink to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
                    <LogoImage className="logo-link"
                        width={170}
                        height={36} />
                </NavLink>
            </div>

            <div className='user'>
                <NavLink to="/" className='user-link'>
                    <ProfileIcon />
                    <div>
                        <p style={{ fontSize: '17px', fontWeight: 'bold' }}>user</p>
                        <p style={{ fontSize: '13px' }}>user@gmail.com</p>
                    </div>
                </NavLink>
            </div>

            <div className='nav-container'>
                <li className='nav-container-list'>
                    <NavLink to="/" className='tab' end>
                        <HomeIcon />
                        <div>
                            Home
                        </div>
                    </NavLink>
                </li>
                <li className='nav-container-list'>
                    <NavLink to="/explore" className='tab' end>
                        <ExploreIcon />
                        Explore
                    </NavLink>
                </li>
                <li className='nav-container-list'>
                    <NavLink to="/people" className='tab' end>
                        <PeopleIcon />
                        People
                    </NavLink>
                </li>
                <li className='nav-container-list'>
                    <NavLink to="/saved" className='tab' end>
                        <SaveIcon />
                        Saved
                    </NavLink>
                </li>
                <li className='nav-container-list'>
                    <NavLink to="/create_post" className='tab' end>
                        <CreatePostIcon />
                        Create post
                    </NavLink>
                </li>
            </div>

            <div className='logout'>
                <NavLink to="/logout" className='logout-link'>
                    <LogoutIcon />
                    Logout
                </NavLink>
            </div>
        </div>
    )
};
export default LeftBar