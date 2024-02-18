import React from 'react';
import { useState } from 'react'
import {
    Friends,
    Gaming,
    HomeActive,
    Home,
    Logo,
    Market,
    Search,
    Watch,
    Menu,
    Messenger,
    FriendsActive
} from '../svg'
import { NavLink, Link } from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {
    const color = "#65676b"
    const [isFocused, setIsFocused] = useState(false);

    const handleFocus = () => {
        setIsFocused(true);
    };
    const handleBlur = () => {
        setIsFocused(false);
    };
    return (
        <nav>
            <div className="navbar_left">
                <Link to='/'>
                    <Logo />
                </Link>

                <div className="search_container">
                    <Search color={color} />
                    <input type="text" placeholder="Search Facebook" className="search_input"></input>
                </div>

            </div>

            <div className="navbar_middle">
                <Link to='/' className="middle_icon hover1" onFocus={handleFocus} onBlur={handleBlur}>
                    {isFocused ? (
                        <HomeActive />
                    ) : (
                        <Home />
                    )}
                </Link>
                <Link to='/' className="middle_icon hover1" >
                    <Friends color={color} />
                </Link>
                <Link to='/' className="middle_icon hover1" >
                    <Market color={color} />
                </Link>
                <Link to='/' className="middle_icon hover1" >
                    <Watch color={color} />
                </Link>



            </div>

            <div className="navbar_right">
                <Link to='/' className="right_circle_icon">
                    <Menu />
                </Link>
                <Link to='/' className="right_circle_icon">
                    <Messenger />
                </Link>


            </div>






        </nav>


    )
};
export default Navbar