import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Salons from './components/Salons/Salons'
import SalonCard from './components/Salon/Salon'

const App = () => {
    return (
        <Router>
          <Routes>
            <Route exact path="*" element={<Salons />} />
            <Route exact path="/salons/:slug" element={<SalonCard />} />
          </Routes>
        </Router>


    )
}

export default App
