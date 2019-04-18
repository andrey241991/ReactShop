import React, { Component } from 'react';
import './SliderPagination.css';
import img_left from '../../img/slider_pagination_left.png';
import img_right from '../../img/slider_pagination_right.png';

const SliderPagination = () => {
    return (
        <section className="slider-pagination">
                <div className="slider-pagination__buttons">
                    <div className="slider-pagination__button-left" >
                        <img src={img_right} alt='Pagination button left' />
                    </div>
                    <div className="slider-pagination__button-right" >
                        <img src={img_left} alt='Pagination button right' />
                    </div>
                </div>
           
        </section>
    );
}

export default SliderPagination;


