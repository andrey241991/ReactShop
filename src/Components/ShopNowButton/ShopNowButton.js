import React, { Component }  from 'react';
import './ShopNowButton.css';

function ShopNowButton(props){
    return (
            <button className='shop-now_button '>
                {props.name}
            </button>
      );
    }

    ShopNowButton.defaultProps = {
        name: 'Shop Now'
      };

export default ShopNowButton;


