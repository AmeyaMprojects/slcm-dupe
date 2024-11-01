import React from 'react';
import './Sidenavbar.css';

function SideNavbar() {
  return (
    <div className="sidenavbar">
      <ul>
        <li><a href="#">Notifications</a></li>
        <li><a href="#">Announcement</a></li>
        <li><a href="#">Events</a></li>
        <li><a href="#">News</a></li>
        <li><a href="#">E-Notifications</a></li>
      </ul>
    </div>
  );
}

export default SideNavbar;