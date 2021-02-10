import React from 'react';
import '.././style/App.css';
import place from './placeholder.png';
import {Link} from 'react-router-dom';

class Accueil extends React.Component {
  render(){
    return (
      <div>
        <div class="titre">
          <p>
            Popular Titles
          </p>
        </div>
        <ul>
          <li>
            <img src={place} alt="place" class="image" />
            <div class="name">
              <Link to="/Series">
                SERIES
              </Link>
            </div>
          </li>
          <li>
            <img src={place} alt="place" class="image2"/>
            <div class="name2">
              <Link to="/Movies">
                MOVIES
              </Link>
            </div>
          </li>
        </ul>
      </div>
    );
  }
}

export default Accueil;
