import React, { Component } from 'react';
import './SliderBlock.css';
import SliderPagination from '../SliderPagination/SliderPagination';
import SliderPaginationText from '../SliderPaginationText/SliderPaginationText';

const SliderBlock = () => {
    return (
        <section className="slider-block">
                 <div className="slider-block__title">
                    <p>Shop By Size</p>
                </div>
                <div className="slider-block__slider-pagination">
                     <SliderPaginationText/>
                     <SliderPagination/>
                </div>
           
        </section>
    );
}

export default SliderBlock;


