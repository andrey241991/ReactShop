import React, { Component } from 'react';
import './Products.css';
import ProductList from '../ProductList/ProductList';
import Banner from '../Banner/Banner';
import Filter from '../Filter/Filter';
import BelowFilter from '../BelowFilter/BelowFilter';
import Pagination from '../Pagination/Pagination';
import MobileFilter from '../MobileFilter/MobileFilter';
import axios from 'axios';

const API = 'https://qa-api.wovenlyrugs.com/products?page=1&page_size=16&size=runners&group=Rug';


class Products extends Component {

  state = {
    data: [],
    totalPagesCount: '',
    currentPage: 1,
    cardPerPage: 16
  };

  componentDidMount() {
    axios.get(API)
      .then(res => {
        this.setState({
          data: res.data.result.data
        })
        this.setPageCount(res.data.result.total_count);
      })
  }

  setPageCount = (totalCount) => {
    const { cardPerPage } = this.state;
    this.setState({
      totalPagesCount: Math.round(totalCount / cardPerPage)
    })
  }

  onClickNext = () => {
    let {currentPage} = this.state;
    this.setState({
      currentPage: currentPage ++
    })
  }

  onClickNext = () => {
    let {currentPage} = this.state;
    this.setState({
      currentPage: currentPage ++
    })
  }


  render() {
    const { data, totalPagesCount, currentPage } = this.state;
    // console.log('totalPagesCount in render' + totalPagesCount);
    return (
      <div className='products'>
        <div className='products_container'>
          <div className='products_container__banner'>
            <Banner />
          </div>
          <div className='products_container__filter'>
            <Filter />
          </div>
          <div className='products_container__mobile-filter'>
            <MobileFilter />
          </div>
          <div className='products_block'>
            <div className='products_block__below-filter'>
              <BelowFilter />
            </div>
            <ProductList data={data} />
            <div className='products_pagination'>
              <Pagination 
                currentPage={currentPage} 
                totalPagesCount={totalPagesCount} 
                fromParentOnClickNext={this.onClickNext()}
                fromParentOnClickNext={this.onClickPrev()} 
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Products;
