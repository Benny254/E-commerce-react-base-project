import React from 'react'
import './Navbar.css'
import{Link,useLocation} from 'react-router-dom'

const Navbar = () => {
  const location = useLocation()
  return (
    <nav className="navbar">
      <h1>Coffee Shop</h1>
      <div className="navbar-links">
        <Link to="/">Home</Link>
        <Link to="/shop">Shop</Link>
        <Link to="/adminportal">Admin Portal</Link>
      </div>
    </nav>
  )
}

export default Navbar