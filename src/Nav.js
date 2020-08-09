import React from 'react';
import './Nav.css';
import { NavLink } from 'react-router-dom';


/** Nav: Component that renders the navbar, with links to go back to the main blog page or to add a new post
 *    - Used in App component
 */

function Nav() {
  return (
    <div className="Nav">
      <div className="Nav-contents">

      <h1>＿φ(°-°=)</h1>
        <h4>Welcome to ZhangGa!</h4>

        {/* <h1>Microblog</h1>
        <h4>Get into the Rithm of blogging.</h4> */}
        <div>
          <NavLink className="Nav-NavLink" to="">Blog</NavLink>
          <NavLink className="Nav-NavLink" to="/new">Add new post</NavLink>
        </div>
      </div>
    </div>
  );
}

export default Nav;
