import React, { Component } from 'react';
import './Home.css';
import Benefits from "../Benefits/Benefits";
import Advertisement from '../Advertisement/Advertisement';
import SliderBlock from '../SliderBlock/SliderBlock';
import ShopBySize from '../ShopBySize/ShopBySize';
import CardSlider from '../CardSlider/CardSlider';

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
            <CardSlider
            sliderTitle={'Popular'}
            slidesCounts={[6,4,2]}
            sliderTheme={'popular'}
            />
          </div>
          <div className='home_wrapper_shop-by-size'>
            <ShopBySize />
          </div>
          <div className='home_wrapper_discover-your-style'>
            <SliderBlock />
          </div>
          <div className='home_wrapper_new'>
          <CardSlider
            sliderTitle={'New'}
            slidesCounts={[3,3,2]}
            sliderTheme={'new'}
            />
          </div>
          <div className='home_living_room_rugs'>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;