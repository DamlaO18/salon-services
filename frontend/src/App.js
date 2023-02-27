import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Salons from './components/Salons/Salons'
import Salon from './components/Salon/Salon'

const App = () => {
    return (
      <div>
        <Router>
          <Routes>
            <Route exact path="*" element={<Salons />} />
            <Route exact path="/salons/:slug" element={<Salon />} />
          </Routes>
        </Router>
      </div>

    )
}

export default App
