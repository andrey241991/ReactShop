import React, { Component } from 'react';
import './Action.css';
import icon_cart from './img/icon_cart.png'; 
import icon_chat from './img/icon_chat.png'; 

function Action(){
    return (
        <div className="action">
            <img className="action__item_chat" src={icon_chat} alt='chat'/>
            <div className='line'></div>
            <img className="action__item_cart" src={icon_cart} alt='basket with goods'/>
        </div>
      );
}

export default Action;