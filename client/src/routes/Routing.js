import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from '../screens/Login'
import RegisterScreen from '../screens/RegisterScreen'
import Profile from '../screens/Profile'
import Home from '../screens/Home'
import CreatePost from '../screens/CreatePost'
import Explore from '../screens/Explore.js'
import People from '../screens/People.js'
import Saved from '../screens/Saved.js'
import ProtectedRoute from './ProtectedRoute'
import App from '../App'
import React from "react";


function Routing() {
    return (
        <Router>
            <main className='container content'>
                <Routes>
                    <Route path='/login' element={<Login />} />
                    <Route path='/register' element={<RegisterScreen />} />
                    <Route element={<ProtectedRoute />}>
                        <Route path='/user-profile' element={<Profile />} />
                        <Route path='/' element={<Home />} />
                        <Route path='/create_post' element={<CreatePost />} />
                        <Route path='/explore' element={<Explore />} />
                        <Route path='/people' element={<People />} />
                        <Route path='/saved' element={<Saved />} />
                    </Route>
                </Routes>
            </main>
        </Router>
    )
}
export default Routing