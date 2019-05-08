import React, { Component } from 'react';
import './Search.css';
import icon_search from './img/icon_search.png'; 

function Search(){
    return (
        <section className='search'>
           <img className='search__logo' src={icon_search} alt='logo'/>
           <input className='search__input' placeholder='Search'/>
        </section>
      );
}

export default Search;