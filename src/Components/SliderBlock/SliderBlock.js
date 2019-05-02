import React, { Component } from 'react';
import './SliderBlock.css';
import SliderPagination from '../SliderPagination/SliderPagination';
import SliderPaginationText from '../SliderPaginationText/SliderPaginationText';

const SliderBlock = (props) => {
    return (
        <section className="slider-block">
                 <div className="slider-block__title">
                    <p>{props.sliderTitle}</p>
                </div>
                <div className="slider-block__slider-pagination">
                     <SliderPaginationText/>
                     <SliderPagination fromParentOnNextClick={props.fromParentOnNextClick} fromParentOnPrevClick={props.fromParentOnPrevClick}/>
                </div>
           
        </section>
    );
}

export default SliderBlock;


