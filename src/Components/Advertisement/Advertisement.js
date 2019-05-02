import React, { Component } from 'react';
import './Advertisement.css';
import ShopNowButton from "../ShopNowButton/ShopNowButton";

function Advertisement() {
  return (
    <div className='advertisement'>
      <div className='advertisement__premium'>
        <div className='advertisement__premium_block'>
          <p className='premium_block__p1'>The #1 Destination for Premium Rugs</p>
          <p className='premium_block__p2'>Shop our premium collection and enjoy 60-Day home trial with
                       free shipping and returns </p>
          <p className='premium_block__p2--tablet'>Shop best sellers and enjoy 60-Day home trial with free shipping and returns</p>
          <div className='premium_block__button'>
            <ShopNowButton />
          </div>
          <div className='premium_block__button--mobile'>
            <ShopNowButton name='Shop' />
          </div>
        </div>
      </div>
      <div className='advertisement__img'>
      </div>
    </div>
  );
}
export default Advertisement;
