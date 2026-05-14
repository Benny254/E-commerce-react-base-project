import React from 'react'
import './Navbar.css'
import{Link,useLocation} from 'react-router-dom'

const Navbar = () => {
  const location = useLocation()
  return (
    <nav className="navbar">
      <h1 className='navbar-title'>Coffee Shop</h1>
      <div className="navbar-links">
        <Link to="/" className={location.pathname === '/' ? 'active' : ''}>Home</Link>
        <Link to="/shop" className={location.pathname === '/shop' ? 'active' : ''}>Shop</Link>
        <Link to="/adminportal" className={location.pathname === '/adminportal' ? 'active' : ''}>Admin Portal</Link>
      </div>
    </nav>
  )
}

export default Navbar