import React, { Component } from 'react';
import './Menu.css';
import { NavLink } from 'react-router-dom'
import imgMoreStyles from '../../img/img_more_styles.png'

function Menu() {
    return (
        <nav className='menu'>
            <div className='menu__item'>Shag</div>
            <div className='menu__item'>Contemporary</div>
            <div className='menu__item'>
                <div menu__item__text>
                    More Styles
                </div>
                <div menu__item__img>
                    <img src={imgMoreStyles} alt='60-Day Trial' />
                </div>
            </div>
            <div className='menu__item'>Sale</div>
            <div className='menu__item'> <NavLink to='/products' activeClassName="active">Shop All Rugs</NavLink></div>
        </nav>
    );
}
export default Menu;

