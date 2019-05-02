import React, { Component } from 'react';
import './Menu.css';
import {NavLink} from 'react-router-dom'

function Menu(){
    return (
        <nav className='menu'>
            <div className='menu__item'>Shag</div>
            <div className='menu__item'>Contemporary</div>
            <div className='menu__item'>More Styles</div>
            <div className='menu__item'>Sale</div>
            <div className='menu__item'> <NavLink to='/products' activeClassName="active">Shop All Rugs</NavLink></div>
            {/* <div className='menu__item'> <a href='/products'>Shop All Rugs</a></div> */}
        </nav>
      );
}
export default Menu;


