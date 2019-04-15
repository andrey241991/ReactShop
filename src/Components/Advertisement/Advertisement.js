import React, { Component } from 'react';
import './Advertisement.css';
import img_intro from '../../img/img_intro.png'; 
import ShopNowButton from "../ShopNowButton/ShopNowButton";

function Advertisement(){
    return (
        <div className='advertisement'>
              <div className='advertisement__premium'>  
                <div className='advertisement__premium_block'>
                    <h1>The #1 Destination for Premium Rugs</h1>
                    <p>Shop our premium collection and enjoy 60-Day home trial with
                       free shipping and returns </p>
                     <ShopNowButton/>  
                </div>  
              </div>
              <div className='advertisement__img'> 
                <img className='shop-now_block__img' src={img_intro} alt='advertisement image'/> 
              </div>
          </div>
      );
}
export default Advertisement;
