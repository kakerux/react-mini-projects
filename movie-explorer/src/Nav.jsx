import React from 'react'
import Home from './Home'
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <div className="navbar">
      
      
		<Link className="logo" to="/" >
			<h2>🎬 Movie Explorer</h2>
		</Link>
		<Link to='/'>
  Home
</Link>
	

    <Home />
    </div>
  )
}

export default Nav
