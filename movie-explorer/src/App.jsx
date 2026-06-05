import { useEffect, useState } from 'react'
import { BrowserRouter as Router , Routes , Route } from 'react-router-dom'

import './App.css'
import Home from './Home'
import Nav from './Nav'
import Details from './Details'

function App() {

  
  
  

  return (
    

    <Router>
      <Nav />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/movie/:id' element={<Details />} />
      </Routes>
    </Router>
		
	
    
  )
}

export default App
