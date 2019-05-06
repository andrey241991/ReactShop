import React, { Component } from 'react';
import './Products.css';
import ProductList from '../ProductList/ProductList';
import Banner from '../Banner/Banner';
import Filter from '../Filter/Filter';
import BelowFilter from '../BelowFilter/BelowFilter';
import Pagination from '../Pagination/Pagination';
import MobileFilter from '../MobileFilter/MobileFilter';
import { getProducts } from '../../utils/ApiHelper'
import { getPageCount } from '../../utils/ApiHelper'


class Products extends Component {
  state = {
    data: [],
    totalPagesCount: '',
    currentPage: 1,
    cardPerPage: 16
  };

  getDataFromApi = (params) => {
    getProducts(params)
      .then(res => {
        this.setState({
          data: res
        })
      }).catch(error => {
        console.log('error in getProducts = ' + error);
      });
  }

  componentDidMount() {
    getProducts({
      page: 1,
      size: 16,
      page_size: 'runners',
      group: 'Rug'
    }).then(res => {
      this.setState({
        data: res
      })
    }).catch(error => {
      console.log('error in getProducts = ' + error);
    });

    getPageCount().then(res => {
      this.setPageCount(res);
    }).catch(error => {
      console.log('error in getPageCount = ' + error);
    });
  }

  setPageCount = (totalCount) => {
    const { cardPerPage } = this.state;
    this.setState({
      totalPagesCount: Math.round(totalCount / cardPerPage)
    })
  }

  onClickNext = () => {
    let { totalPagesCount, currentPage } = this.state;
    if (currentPage !== totalPagesCount) {
      currentPage++
      this.setState({ currentPage: currentPage });
      this.getDataFromApi({
        page: currentPage,
        size: 16,
        page_size: 'runners',
        group: 'Rug'
      });
    };
  }

  onClickPrev = () => {
    let { currentPage } = this.state;
    if (currentPage !== 1) {
      currentPage--;
      this.setState({ currentPage: currentPage });
      this.getDataFromApi({
        page: currentPage,
        size: 16,
        page_size: 'runners',
        group: 'Rug'
      });
    }
  }


  render() {
    const { data, totalPagesCount, currentPage } = this.state;
    const { generateUrl } = this.props;
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
                generateUrl={generateUrl}
                currentPage={currentPage}
                totalPagesCount={totalPagesCount}
                fromParentOnClickNext={this.onClickNext}
                fromParentOnClickPrev={this.onClickPrev}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}


export default Products;
