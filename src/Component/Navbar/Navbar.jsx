import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
      <div className="container-fluid">
        
        {/* Logo */}
        <Link className="navbar-brand" to="/">
          🎓 Graduate Studies
        </Link>

        {/* Toggle Button */}
        <button 
          className="navbar-toggler" 
          type="button" 
          data-bs-toggle="collapse" 
          data-bs-target="#navbarSupportedContent"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Links */}
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          
          {/* Left */}
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            
            <li className="nav-item">
              <Link className="nav-link" to="/">Home</Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/programs">Programs</Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/studentDashboard">StudentDashboard</Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/adminDashboard">AdminDashboard</Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/students">Students</Link>
            </li>

          </ul>

          {/* Social Icons */}
          <div className="d-flex">
            <i className="fab fa-facebook text-white me-3"></i>
            <i className="fab fa-instagram text-white me-3"></i>
            <i className="fab fa-twitter text-white me-3"></i>
            <i className="fab fa-youtube text-white me-3"></i>
          </div>

          {/* Right */}
          <ul className="navbar-nav ms-3">
            <li className="nav-item">
              <Link className="nav-link" to="/login">Login</Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/register">Register</Link>
            </li>

            <li>
              <Link className="nav-link" to="/register2">Register2</Link>
            </li>
          </ul>

        </div>
      </div>
    </nav>
  )
}