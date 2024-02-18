import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import LoginScreen from '../screens/LoginScreen'
import RegisterScreen from '../screens/RegisterScreen'
import ProfileScreen from '../screens/ProfileScreen'
import HomeScreen from '../screens/HomeScreen'
import ProtectedRoute from './ProtectedRoute'

function Routing() {
    return (
        <Router>
            <main className='container content'>
                <Routes>

                    <Route path='/login' element={<LoginScreen />} />
                    <Route path='/register' element={<RegisterScreen />} />
                    <Route element={<ProtectedRoute />}>
                        <Route path='/user-profile' element={<ProfileScreen />} />
                        <Route path='/' element={<HomeScreen />} />
                    </Route>
                </Routes>
            </main>
        </Router>
    )
}
export default Routing