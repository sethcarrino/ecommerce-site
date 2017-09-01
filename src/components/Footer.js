import React, { Component } from 'react';

import {NavLink} from 'react-router-dom';

class Footer extends Component {


  render() {

    return (
      <div className="footer">
      <nav>
        <div>
          <div className="footer-info">
            <div className="widget widget-1">
              <h3 className="widget-title">social media</h3>
              <p className="widget-info">Ethical 3 wolf moon paleo, everyday carry bitters health goth blog affogato fixie. Put a bird on it snackwave locavore venmo mlkshk distillery coloring book. Kitsch tumeric marfa lumbersexual, franzen glossier dreamcatcher before they sold out health goth art party. Williamsburg fixie knausgaard ennui organic. Microdosing brooklyn iceland, mumblecore gastropub knausgaard +1 vice tumblr.</p>
            </div>
            <div className="widget widget-2">
              <h3 className="widget-title">about mahoghany</h3>
              <p className="widget-info">Ethical 3 wolf moon paleo, everyday carry bitters health goth blog affogato fixie. Put a bird on it snackwave locavore venmo mlkshk distillery coloring book. Kitsch tumeric marfa lumbersexual, franzen glossier dreamcatcher before they sold out health goth art party. Williamsburg fixie knausgaard ennui organic. Microdosing brooklyn iceland, mumblecore gastropub knausgaard +1 vice tumblr.</p>
            </div>
            <div className="widget widget-3">
              <h3 className="widget-title">press</h3>
              <p className="widget-info">Ethical 3 wolf moon paleo, everyday carry bitters health goth blog affogato fixie. Put a bird on it snackwave locavore venmo mlkshk distillery coloring book. Kitsch tumeric marfa lumbersexual, franzen glossier dreamcatcher before they sold out health goth art party. Williamsburg fixie knausgaard ennui organic. Microdosing brooklyn iceland, mumblecore gastropub knausgaard +1 vice tumblr.</p>
            </div>
            <div className="widget widget-4">
              <h3 className="widget-title">contact information</h3>
              <p className="widget-info">Ethical 3 wolf moon paleo, everyday carry bitters health goth blog affogato fixie. Put a bird on it snackwave locavore venmo mlkshk distillery coloring book. Kitsch tumeric marfa lumbersexual, franzen glossier dreamcatcher before they sold out health goth art party. Williamsburg fixie knausgaard ennui organic. Microdosing brooklyn iceland, mumblecore gastropub knausgaard +1 vice tumblr.</p>
            </div>
          </div>
          <div className="nav-bar">
            <ul className="navbar-nav">
              <li className="nav-link">
                <NavLink to="/" className="small-title">Mahoghany</NavLink>
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
      <div>
      <p className="copyright">Copyright 2017 - Seth Carrino - All Rights Reserved</p>
      </div>

      </div>

    );
  }
}

export default Footer;
