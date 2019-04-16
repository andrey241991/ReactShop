import React, { Component } from 'react';
import './Pagination.css';
import img_left from '../../img/img_left.png';
import img_right from '../../img/img_right.png';

function Pagination() {
  return (
    <div className="pagination">
      <div className="pagination__prev">
        <img src={img_left} />
      </div>
      <div className="pagination__center">
        PAGE 1 OF 6
      </div>
      <div className="pagination__next">
        <img src={img_right} />
      </div>
    </div>
  );
} 

export default Pagination;
