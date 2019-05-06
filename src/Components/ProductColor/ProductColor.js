import React, { Component } from 'react';
import './ProductColor.css';


class ProductColor extends Component {



  onColorClick = () => {
    const { colorName, fromParentOnColorClick } = this.props;
    fromParentOnColorClick(colorName);
  }

  render() {
    const { colorChecked, colorName } = this.props;
    return (
      <section
        title={colorName}
        className={colorChecked ?
          'color_block__container--active' :
          'color_block__container'}
        onClick={this.onColorClick}>
        <div className='color_block__item'></div>
      </section>
    );
  }
}

export default ProductColor;
