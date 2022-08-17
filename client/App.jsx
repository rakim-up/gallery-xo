import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
// AUTH0 IMPORTS:
// import { cacheUser } from '../auth0-utils'

// import { useAuth0 } from '@auth0/auth0-react'
// import {
//   IfAuthenticated,
//   IfNotAuthenticated,
// } from './Authenticated/Authenticated'

// COMPONENT IMPORTS
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
