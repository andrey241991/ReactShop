import React, { Component } from 'react';
import './Products.css';
import ProductList from '../ProductList/ProductList';
import Banner from '../Banner/Banner';
import Filter from '../Filter/Filter';
import BelowFilter from '../BelowFilter/BelowFilter';
import Pagination from '../Pagination/Pagination';

class Products extends Component {

  render() {
    return (
        <div className='products'>
            <div className='products_container'> 
              <div className='products_container__banner'>
            <Banner/>
              </div>
            <Filter/>
                <div className='products_block'> 
                  <div className='products_block__below-filter'> 
                    <BelowFilter/>
                  </div>
                  <ProductList/> 
                  <div className='products_pagination'> 
                    <Pagination/>
                  </div>
                </div>
            </div>
        </div>
    );
  }
}

export default Products;
