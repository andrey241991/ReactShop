import React, { Component } from 'react';
import './ProductCard.scss';
import ProductColor from '../ProductColor/ProductColor';


class ProductCard extends Component {

  state = {
    colorCheckedName: ''
  };

  onColorClick = (colorName) => {
    console.log(colorName);
    this.setState({
      colorCheckedName: colorName
    })
  }

  render() {
    const { item, sliderTheme } = this.props;
    const { colorCheckedName } = this.state;
    let title = item.title;
    let price = item.pricing.label;
    let imgUrl = item.mediaCollection[0].thumbUrl;

    var divStyle = {
      backgroundImage: 'url(' + imgUrl + ')'
    }

    let testArray = ['red', 'green', 'violet'];
    let productColors = testArray.map(item => {
      return <ProductColor
        colorName={item}
        colorChecked={item === colorCheckedName ? true : false}
        fromParentOnColorClick={this.onColorClick} />
    })
    return (
      <section className={`product-card ${sliderTheme}`}>
        <div className={'product-card_image-block'}>
          <div className='product-card_image-block__image' style={divStyle} />
        </div>
        <div className='product-card_bottom-block'>
          <p className='product-card_bottom-block__title'>{title}</p>
          <p className='product-card_bottom-block__price'>{price}</p>
          <div className='product-card_bottom-block_colors_block'>
            {productColors}
          </div>
        </div>
      </section>
    );
  }
}

export default ProductCard;
