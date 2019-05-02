import React, { Component } from 'react';
import './ProductCard.scss';


class ProductCard extends Component {

  render() {
    const {item, sliderTheme} = this.props;
    let title = item.title;
    let price = item.pricing.label;
    let imgUrl = item.mediaCollection[0].thumbUrl;

    var divStyle = {
      backgroundImage: 'url(' + imgUrl + ')'
    }

    return (
      <section className={`product-card ${sliderTheme}`}>
        <div className={'product-card_image-block'}>
          <div className='product-card_image-block__image' style={divStyle} />
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
