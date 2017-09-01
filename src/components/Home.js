import React, {Component} from 'react';
import AlbumImage from '../album-mock.jpg'
import records from '../data/records.js';

class Home extends Component {

  render() {

    let music = records.map((record) => {
      if (record.featured === true) {
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
        <div className="slider container-fluid">
          <h1 className="title">Mahoghany</h1>
          <h3 className="sub-title">records</h3>
        </div>
        <div>
          <h4 className="desc-title">Best Sellers</h4>
          <div className="featured-gallery">
            {music}
          </div>
        </div>
      </div>

    );
  }
}

export default Home;
