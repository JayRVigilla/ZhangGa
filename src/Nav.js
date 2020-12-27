import React from 'react';
import './Nav.css';
import { NavLink } from 'react-router-dom';
import logo from "./images/zhangGaLogo.png"


/** Nav: Component that renders the navbar
 *    links to main blog page or to add new post
 *    - Used in App component
 */

function Nav() {
  return (
    <div className="Nav">
      <div className="Nav-contents">
        <div className="logo">
          <img src={`${logo}`} alt=""/>
        </div>
        <div className="nav-links">
          <NavLink className="Nav-NavLink" to="">Blog</NavLink>
          <NavLink className="Nav-NavLink" to="/new">Add new post</NavLink>
        </div>
      </div>
    </div>
  );
}

export default Nav;
