import React, { Component } from 'react';
import './Header.css';
import Search from '../Search/Search';
import Menu from '../Menu/Menu';
import Logo from '../Logo/Logo';
import Action from '../Action/Action';

function Header(){
    return (
        <header className="header">
             <div className='header_logo_block'><Logo/></div>
             <div className='header_search_block'><Search/></div>
             <div className='header_menu_block'><Menu/></div>
             <div className='header_action_block'><Action/></div>
        </header>
      );
}
export default Header;
