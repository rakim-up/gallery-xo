import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Home from './components/Home/Home'
import Nav from './components/Nav/Nav'
import Footer from './components/Footer/Footer'


const App = () => {

  return (
    <>
      {/* outer most container */}
        <Router>
          <Nav />
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
          <Footer />
        </Router>
    </>
  )
}

export default App
