import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return <>
  <nav className="navbar navbar-expand-lg  fixed-top">
  <div className="container-fluid ">
    <Link className="navbar-brand text-white" href="#">🎓 Graduate Studies</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    </button>
    <div className="collapse navbar-collapse " id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link text-white " aria-current="page" to='/'>Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-white" to="programs">Programs</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-white" to="students">Students</Link>
        </li>
      </ul >
                    <i className="nav-link fab fa-facebook me-3"></i>
                    <i className="nav-link  fab fa-instagram me-3"></i>
                    <i className="nav-link  fab fa-twitter me-3"></i>
                    <i className="nav-link  fab fa-youtube me-3"></i>
      <ul className="navbar-nav  mb-2 mb-lg-0">
        <li className="nav-item "><Link className="nav-link text-white" to="login">Login</Link></li>
        <li className="nav-item "><Link className="nav-link text-white" to="register">Register</Link></li>
        
      </ul>
    </div>
  </div>
</nav>
  </>
}
