import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Routing from './routes/Routing'
import Home from './screens/Home';
import Login from './screens/Login';

const App = () => {
  return (
    <div className="app">
      <Login />
    </div>
  )
};

export default App;