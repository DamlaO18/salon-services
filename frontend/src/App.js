import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Salons from './components/Salons/Salons'
import SalonCard from './components/Salon/Salon'
import Login from './components/Authentication/Login';
import Register from './components/Authentication/Register';
import Forgot from './components/Authentication/Password/Forgot';
import Reset from './components/Authentication/Password/Reset';
import Navbar from './components/Navbar';
import { AuthProvider } from './components/AuthContext';

const App = () => {
    return (
      <AuthProvider>
          <Router>
          <Navbar />
            <Routes>
              <Route exact path="*" element={<Salons />} />
              <Route exact path="/salons/:slug" element={<SalonCard />} />
                <Route exact path="/login" element={<Login />} />
                <Route exact path="/register" element={<Register />} />
                <Route exact path="/forgot-password" element={<Forgot />} />
                <Route exact path="/reset-password" element={<Reset />} />
            </Routes>
          </Router>
      </AuthProvider>
        


    )
}

export default App
