import React, { Component } from 'react';
import './Banner.css';
import img_banner from '../../img/img_test.png'; 


function Banner(){
    return (
        <section className='banner'>
            <div className='banner_block'>
                <div className='banner_block__text'>
                    <h1>New<br/>Arrivals</h1>
                </div> 
                <div className='banner_block__img'>
                    <img src={img_banner} alt='60-Day Trial'/>
                </div>   
                   
             </div>
        </section>  
      );
}
export default Banner;
