import React from 'react'
import { NavLink } from 'react-router-dom';

function Nav() {
  function handleLogout ()
  {
    console.log("logout done successfully");
  }
  return (
     <nav className="navbar">
      <div className="navbar-left">
      <NavLink to ='/' className = 'brandName'>askFm</NavLink>
        <NavLink to ='/home' className = 'feed'>Home</NavLink>
        <NavLink to ='/questions' className = 'feed'>Questions</NavLink>
        
        
      </div>
      <div className="navbar-right">
        <NavLink to ='/edit' className = 'feed'>Edit</NavLink>
        <NavLink onClick={handleLogout} to ='/' className = 'feed'>Logout</NavLink>
      </div>
    </nav>
  );
}

export default Nav;