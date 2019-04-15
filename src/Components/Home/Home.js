import React, { Component } from 'react';
import './Home.css';
import Benefits from "../Benefits/Benefits";
import Advertisement from '../Advertisement/Advertisement';

class Home extends Component {
  render() {
    return (
        <div className='Home'>
            <section className='app_advertisement'>
                <Advertisement/>
            </section>
            <section className='app_benefits'>
                <Benefits/>
            </section>   
        </div>
    );
  }
}

export default Home;