import React, {Component} from 'react';
import records from '../data/records.js';
import AlbumImage from '../album-mock.jpg';
import {NavLink} from 'react-router-dom';

class Trap extends Component {

  render() {
    let music = records.map((record) => {
      if (record.type === "Trap") {
        return (
          <div className="record-info">
            <img className="record-image" src={AlbumImage} alt=""/>
            <h3 className="record-artist">{record.artist}</h3>
            <h5 className="record-title">{record.title}</h5>
            <button type="submit" className="btn buy-btn form-control col-md-6">
              buy now
            </button>
            <button type="submit" className="btn wishlist-btn form-control col-md-6">
              wishlist
            </button>
          </div>
        )
      }
    });

    return (
      <div>
        <div className="page-slider container-fluid">

          <h1 className="page-title">Shop At Mahoghany</h1>
          <h3 className="page-sub-title">the best place to buy albums</h3>
        </div>
        <nav className="nav-bar sub-menu">
          <div>
            <div>
              <ul className="navbar-nav">
                <li className="nav-link">
                  <NavLink to="/shop/classic" activeClassName="selected" className="nav-link-a">Classic</NavLink>
                </li>
                <li className="nav-link">
                  <NavLink to="/shop/alternative" activeClassName="selected" className="nav-link-a">Alternative</NavLink>
                </li>
                <li className="nav-link">
                  <NavLink to="/shop/trap" activeClassName="selected" className="nav-link-a">Trap</NavLink>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        <div className="shop-content">

          {music}

        </div>
      </div>

    );
  }
}

export default Trap;
