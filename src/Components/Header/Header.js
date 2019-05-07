import React, { Component } from 'react';
import './Header.css';
import Search from '../Search/Search';
import Menu from '../Menu/Menu';
import Logo from '../Logo/Logo';
import Action from '../Action/Action';

function Header() {
  return (
    <header className="header">
      <div className='header_logo_block'><Logo /></div>
      <div className='header_search_block'><Search /></div>
      <div className='header_navigation'>
        <div className='header_navigation_menu'><Menu/></div>
        <div className='header_navigation_action'><Action/></div>
      </div>
    </header>
  );
}
export default Header;
