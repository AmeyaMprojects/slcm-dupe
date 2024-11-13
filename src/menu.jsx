

import React from 'react';
import './menu.css';

function Menu() {
  return (
    <div className="menu-container">
      <nav className="main-nav">
        <div className="logo-container">
          <a  href='https://www.manipal.edu/mu.html'>
          <img className='manipal_logo_img' src="https://slcm.manipal.edu/images/logo.png" alt="Manipal logo" />
          </a>
        </div>

        <div className="nav-links">
          <a href="#" className="nav-link">Admissions</a>
          <a href="#" className="nav-link">Academics & D.S.</a>
          <a href="#" className="nav-link">Financials</a>
          <a href="#" className="nav-link">Application</a>
          <a href="#" className="nav-link">Application Status</a>
          <a href="#" className="nav-link">More...</a>
        </div>

        <div className="user-profile">
          <a href="#">
            <img className="profile-icon" src="https://w7.pngwing.com/pngs/339/876/png-transparent-login-computer-icons-password-login-black-symbol-subscription-business-model-thumbnail.png" alt="Profile" />
          </a>
        </div>
      </nav>

      <hr className="separator" />

      <nav className="home-bar">
        <h5 className="home-title">My Home Page</h5>
      </nav>
    </div>
  );
}

export default Menu;