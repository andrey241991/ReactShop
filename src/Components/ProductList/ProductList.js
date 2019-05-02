import React, { Component } from 'react';
import './ProductList.css';
import ProductCard from '../ProductCard/ProductCard';

  const ProductList = (props) =>{
    return (
      <div className='productList'>
        {props.data.map(item => {
          return (
            <div className="productList__item">
              <ProductCard
                item={item}
              />
            </div>
          );
        })}
      </div>
    );
}

export default ProductList;
