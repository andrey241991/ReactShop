import React, { Component } from 'react';
import './Action.css';
import icon_cart from './img/icon_cart.png';
import icon_chat from './img/icon_chat.png';

function Action() {
    return (
        <div className="action">

            <div className="action__item_chat">
                <img src={icon_chat} alt='chat' />
            </div>
            <div className="action__item_cart" >
                <img src={icon_cart} alt='basket with goods' />
            </div>


        </div>
    );
}

export default Action;