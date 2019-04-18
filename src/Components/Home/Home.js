import React, { Component } from 'react';
import './Home.css';
import Benefits from "../Benefits/Benefits";
import Advertisement from '../Advertisement/Advertisement';
import SliderPagination from '../SliderPagination/SliderPagination';
import SliderBlock from '../SliderBlock/SliderBlock';
import ShopBySize from '../ShopBySize/ShopBySize';

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
            <div className='home_wrapper_popular'>
              <SliderBlock/>
            </div>
            <div className='home_wrapper_shop-by-size'>
              <ShopBySize/>
            </div>
            <div className='home_wrapper_discover-your-style'>
              <SliderBlock/>
            </div>
            <div className='home_wrapper_new'>
              <SliderBlock/>
            </div>
        </div>
      </div>
    );
  }
}

export default Home;