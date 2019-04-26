import React, { Component } from 'react';
import './CardSlider.css';
import Slider from "react-slick";
import SliderBlock from '../SliderBlock/SliderBlock';
import axios from 'axios';
import ProductCard from '../ProductCard/ProductCard';
import SliderPagination from '../SliderPagination/SliderPagination';
import SliderPaginationText from '../SliderPaginationText/SliderPaginationText';

const API = 'https://qa-api.wovenlyrugs.com/products?page=1&page_size=16&size=runners&group=Rug';

class CardSlider extends React.Component {

    state = {
        data: []
    };

    onNextClick = () => {
        this.slider.slickNext();
    };

    onPrevClick = () => {
        this.slider.slickPrev();
    };


    componentDidMount() {
        axios.get(API)
            .then(res => {
                this.setState({
                    data: res.data.result.data
                })
            })
    }

    render() {
        const { data } = this.state;
        const { sliderTitle, slidesCounts, sliderTheme } = this.props;
        var settings = {
            infinite: true,
            speed: 500,
            arrows: false,
            slidesToShow: slidesCounts[0],
            slidesToScroll: 1,

            responsive: [
                {
                    breakpoint: 1100,
                    settings: {
                        slidesToShow: slidesCounts[1]
                    }
                },
                {
                    breakpoint: 767,
                    settings: {
                        slidesToShow: slidesCounts[2]
                    }
                }
            ]
        };
        return (
            <div className='wrapper'>
                <div className='wrapperslider'>
                    <SliderBlock
                        sliderTitle={sliderTitle}
                        fromParentOnNextClick={this.onNextClick}
                        fromParentOnPrevClick={this.onPrevClick}
                    />
                </div>

                <div className="container">
                    <Slider ref={slider => (this.slider = slider)} {...settings}>
                        {data.map(item => {
                            return (
                                <div className="productList__item--slider">
                                    {/* <div className="productList__item productList__item--new"> */}
                                    <ProductCard
                                        item={item}
                                        sliderTheme={sliderTheme}
                                    />
                                </div>
                            );
                        })}
                    </Slider>
                </div>
                <div className='wrapperslider--mobile'>
                    <SliderPagination fromParentOnNextClick={this.onNextClick} fromParentOnPrevClick={this.onPrevClick} />
                    <SliderPaginationText />
                </div>
            </div>
        );
    }
}

export default CardSlider;


// <SliderPaginationText/>
// <SliderPagination fromParentOnNextClick={props.fromParentOnNextClick} fromParentOnPrevClick={props.fromParentOnPrevClick}/>


