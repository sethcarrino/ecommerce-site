import React, { Component } from 'react';

import {NavLink} from 'react-router-dom';

class NavBar extends Component {


  render() {

    return (
      <div className="container-fluid">
      <nav className="nav-bar">
        <div>
          <div>
            <ul className="navbar-nav">
              <li className="nav-link">
                <NavLink to="/" activeClassName="selected">Home</NavLink>
              </li>
              <li className="nav-link">
                <NavLink to="/about" activeClassName="selected">About</NavLink>
              </li>
              <li className="nav-link">
                <NavLink to="/shop" activeClassName="selected">Shop</NavLink>
              </li>
              <li className="nav-link">
                <NavLink to="/contact" activeClassName="selected">Contact</NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      </div>

    );
  }
}

export default NavBar;
