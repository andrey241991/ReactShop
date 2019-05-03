import React, { Component } from 'react';
import './Pagination.css';
import img_left from '../../img/img_left.png';
import img_right from '../../img/img_right.png';


const Pagination = (props) => {
  const {fromParentOnClickNext, fromParentOnClickPrev, currentPage, totalPagesCount} = props;
  return (
    <div className="pagination">
      <div className="pagination__prev"  onClick={fromParentOnClickPrev}>
        <img src={img_left} />
      </div>
      <div className="pagination__center">
      PAGE {currentPage} OF {totalPagesCount}
      </div>
      <div className="pagination__next" onClick={fromParentOnClickNext}>
        <img src={img_right} />
      </div>
    </div>
  );
} 

export default Pagination;
