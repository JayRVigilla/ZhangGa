import React from 'react';
import './Nav.css';
import { NavLink } from 'react-router-dom';


/** Nav: Component that renders the navbar
 *    links to main blog page or to add new post
 *    - Used in App component
 */

function Nav() {
  return (
    <div className="Nav">
      <div className="Nav-contents">
        <div className="logo">
          <h4>＿φ(°-°=)</h4>
          <h4>ZhangGa</h4>
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
