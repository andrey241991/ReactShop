import React, { Component } from 'react';
import './Header.css';
import Search from '../Search/Search';
import Menu from '../Menu/Menu';
import Logo from '../Logo/Logo';
import Action from '../Action/Action';
import icon_chat from '../../img/icon_chat.png';
import icon_cart from '../../img/icon_cart.png';

function Header() {
  return (
    <header className="header">
      <div className='header_logo_block'><Logo /></div>
      <div className='header_wrapper'>
        <div className='header_search_block'><Search /></div>
        <div className='header_navigation'>
          <div className='header_navigation_menu'><Menu /></div>
          <div className='header_navigation_action'>
            <Action image={icon_chat} alt='chat' theme='action_container--border' />
            <Action image={icon_cart} alt='basket with goods' theme='' />
          </div>
        </div>
      </div>
      <div className='header_wrapper-mobile'>
        <div className='header_search_block'><Search /></div>
        <Action image={icon_chat} alt='chat' theme='action_container--border' />
        <Action image={icon_cart} alt='basket with goods' theme='action_container--border' />
        <div className='mobile-menu__item'>
          &#9776;
          </div>
      </div>
    </header>
  );
}
export default Header;
