import React from 'react'
import profile_image from '../images/profile-image.svg'
import godine_logo from '../images/godine_logo.png'

function Header() {
    return (
      <div className="dashboard-header">
            <img className="godine-logo" src={godine_logo} alt="GoDine" />
            <div className="dashboard-heading">
                Dashboard
            </div>
            <div className="dropdown-hover">
                <button className="btn btn-transparent profile-section" type="button">
                    <img src={profile_image} alt="logo" className="profile-image"/>
                    <span className="profile-text">Profile</span>
                </button>
                <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                    <button className="dropdown-item">View Profile</button>
                    <button className="dropdown-item">Edit Profile</button>
                    <div className="dropdown-divider"></div>
                    <button className="dropdown-item" onClick={() => alert("clicked on logout button")}>Logout</button>
                </div>
            </div>
      </div>
    );
  }
  
export default Header;