import React, { Component } from 'react';
import './ProductList.css';
import axios from 'axios';
import ProductCard from '../ProductCard/ProductCard';

const API = 'https://qa-api.wovenlyrugs.com/products?page=1&page_size=16&size=runners&group=Rug';

class ProductList extends Component {

  state = {
    data: []
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
    return (
      <div className='productList'>
        {data.map(item => {
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
}

export default ProductList;
