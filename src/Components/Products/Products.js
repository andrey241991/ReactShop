import React, { Component } from 'react';
import './Products.css';
import ProductList from '../ProductList/ProductList';
import Banner from '../Banner/Banner';
import Filter from '../Filter/Filter';
import BelowFilter from '../BelowFilter/BelowFilter';

class Products extends Component {

  render() {
    return (
        <div className='products'>
            <div className='products_container'> 
            <Banner/>
            <Filter/>
                <div className='products_block'> 
                  <div className='below_filter__block'> 
                    <BelowFilter/>
                  </div>
                  <ProductList/> 
                </div>
            </div>
        </div>
    );
  }
}

export default Products;
