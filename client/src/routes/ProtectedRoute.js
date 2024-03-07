import { useSelector } from 'react-redux';
import { NavLink, Outlet } from 'react-router-dom';

import { useEffect } from 'react';
import LeftBar from '../components/LeftBar';
import React from "react";

const ProtectedRoute = () => {

    const { isAuthorized } = useSelector((state) => state.auth)

    useEffect(() => {
        // This useEffect will run whenever isAuthorized changes
        console.log(isAuthorized + "in protected route");
    }, [isAuthorized]);

    if (!isAuthorized) {
        return (
            <>
                <div className='unauthorized'>
                    <h1>Unauthorized </h1>
                    <span>
                        <NavLink to='/login'>Login</NavLink> to gain access
                    </span>
                </div>
            </>
        )
    }

    return (
        <>
            <LeftBar />
            <Outlet />
        </>)
}
export default ProtectedRoute