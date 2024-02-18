import { useSelector } from 'react-redux'
import { NavLink, Outlet } from 'react-router-dom'
import { useEffect } from 'react'

const ProtectedRoute = () => {
    const { isAuthorized } = useSelector((state) => state.auth)

    useEffect(() => {
        // This useEffect will run whenever isAuthorized changes
        console.log(isAuthorized + "in protected route");
    }, [isAuthorized]);

    // show unauthorized screen if no user is found in redux store
    if (!isAuthorized) {
        return (
            <div className='unauthorized'>
                <h1>Unauthorized </h1>
                <span>
                    <NavLink to='/login'>Login</NavLink> to gain access
                </span>
            </div>
        )
    }

    // returns child route elements
    return <Outlet />
}
export default ProtectedRoute