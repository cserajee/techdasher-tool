import React from 'react'

const Header = () => {
  return (
    <header id="header" className="header fixed-top" data-scrollto-offset="0">
    <div className="container-fluid d-flex align-items-center justify-content-between">

      <a href="index.html" className="logo d-flex align-items-center scrollto me-auto me-lg-0">
       <img src="https://www.techdasher.com/wp-content/uploads/2018/03/tech_dasher_logo.png" alt="" />
      </a>

      <nav id="navbar" className="navbar">
        <ul>
          <li><a className="nav-link scrollto" href="index.html#about">Home</a></li>
          <li><a className="nav-link scrollto" href="index.html#services">Base64toPDF</a></li>
          <li><a className="nav-link scrollto" href="index.html#portfolio">JSONButify</a></li>
        </ul>
        <i className="bi bi-list mobile-nav-toggle d-none"></i>
      </nav>  
    </div>
  </header>
  )
}

export default Header