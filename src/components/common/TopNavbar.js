import React from 'react';
import { Link } from 'react-router-dom';
import './TopNavbar.css';

const TopNavbar = () => {
  return (
    <div className="navbar">
      <div className="navbar-left">
        <div className="logo">
          <span className="logo-icon">
            <svg viewBox="0 0 24 24" width="24" height="24">
              <path
                fill="#F5C518"
                d="M12,2C8.13,2 5,5.13 5,9c0,5.25 7,13 7,13s7,-7.75 7,-13c0,-3.87 -3.13,-7 -7,-7zM12,11.5c-1.38,0 -2.5,-1.12 -2.5,-2.5s1.12,-2.5 2.5,-2.5 2.5,1.12 2.5,2.5 -1.12,2.5 -2.5,2.5z"
              />
              <path
                fill="#333"
                d="M12,7.5A1.5,1.5 0 0,0 10.5,9A1.5,1.5 0 0,0 12,10.5A1.5,1.5 0 0,0 13.5,9A1.5,1.5 0 0,0 12,7.5z"
              />
            </svg>
          </span>
          <span className="logo-text">LOCKATED</span>
        </div>
        <nav className="main-nav">
          <Link to="/home" className="nav-item">Home</Link>
          <Link to="/dashboard" className="nav-item">Dashboard</Link>
          <Link to="/setup" className="nav-item">Setup</Link>
        </nav>
      </div>
      <div className="navbar-right">
        <div className="dropdown">
          <span>Lockated</span>
          <span className="dropdown-icon">▼</span>
        </div>
        <div className="user-avatar">
          <img src="/api/placeholder/32/32" alt="User Avatar" />
        </div>
      </div>
    </div>
  );
};

export default TopNavbar;
