import React, { Component } from 'react';
import './ShopBySize.css';
import img_first from '../../img/img_shop_by_size1.png';
import img_second from '../../img/img_shop_by_size2.png';
import img_third from '../../img/img_shop_by_size3.png';
import img_fourth from '../../img/img_shop_by_size4.png';

const ShopBySize = () => {
    return (
        <section className="shop-by-size">

            <div className='shop-by-size_top'>
                <p className='shop-by-size_top__title'>Shop By Size</p>
                <p className='shop-by-size_top__guide'>Size Guide</p>
            </div>

            <div className='shop-by-size__content-block'>

                <div className='content-block__item'>
                    <img src={img_first} alt='figure' />
                    <p>5’ x 8’</p>
                </div>

                <div className='content-block__item'>
                    <img src={img_second} alt='figure' />
                    <p>8’ x 10’</p>
                </div>

                <div className='content-block__item item--hide'>
                    <img src={img_third} alt='figure' />
                    <p>9’ x 12’</p>
                </div>

                <div className='content-block__item item--hide'>
                    <img src={img_fourth} alt='figure' />
                    <p>Runnners</p>
                </div>

            </div>

            <div className='shop-by-size_mobile'>
                <p className='shop-by-size_mobile__guide'>Size Guide</p>
            </div>

        </section>
    );
}

export default ShopBySize;


