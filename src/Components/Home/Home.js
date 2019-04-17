import React, { Component } from 'react';
import './Home.css';
import Benefits from "../Benefits/Benefits";
import Advertisement from '../Advertisement/Advertisement';

class Home extends Component {
  render() {
    return (
      <div className='home'>
        <div className='home_advertisement'>
          <Advertisement />
        </div>
        <div className='home_wrapper'>
          <div className='home_wrapper__benefits'>
            <Benefits />
          </div>
        </div>
      </div>
    );
  }
}

export default Home;