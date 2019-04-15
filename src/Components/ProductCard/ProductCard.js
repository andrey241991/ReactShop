import React, { Component } from 'react';
import './ProductCard.css';

class ProductCard extends Component {

  render() {
    const { item } = this.props;
    let title = item.title;
    let price = item.pricing.label;
    let imgUrl = item.mediaCollection[0].thumbUrl;
    return (
      <section className='product-card'>
        <div className='product-card_image-block'>
          <img className='product-card_image-block__image' src={imgUrl} alt='carimat' />
        </div>
        <div className='product-card_bottom-block'>
          <p className='product-card_bottom-block__title'>{title}</p>
          <p className='product-card_bottom-block__price'>{price}</p>
          <div className='product-card_bottom-block_colors_block'>
            <div className='colorRed'></div>
            <div className='colorGreen'></div>
          </div>
        </div>

      </section>
    );
  }
}

export default ProductCard;

