import React, {Component} from 'react';

import Special from './../special';
import Weight from './../weight';

import './product.less';

export default class Product extends Component{

  onProductClick = (id, status) => {
    if (status !== `disabled`) {
      this.props.onProductClick(id);
    }
  }

  onProductLeave(id, status, hover) {
    if (status === `selected` && !hover) {
      this.props.onProductLeave(id);
      console.log(`leave!`);
    }
  }

  getFooter = (status, footer, taste) => {
    switch (status) {
      case `default`:
        return (
          <span>Чего сидишь? Порадуй котэ, <a className="product__footer__link" href="/" onClick={evt => evt.preventDefault()}>купи.</a></span>
        )
      case `selected`:
        return (
          <span>{footer}</span>
        )
      case `disabled`:
        return (
          <span className="product__footer__text--disabled">Печалька, {taste} закончился.</span>
        )
      default:
        return (
          <span>Чего сидишь? Порадуй котэ, <a className="product__footer__link" href="/" onClick={() => this.onFooterLinkClick()}>купи.</a></span>
        )
    }
  };

  getHeader = (status, hover) => {
    switch (status) {
      case `default`:
        return (
          <div className="product__description__content">
            <span className="product__description__content__text">Сказочное заморское яство</span>
          </div>
        )
      case `selected`:
        if (hover) {
          return (
            <div className="product__description__content product__description__content--selected">
              <span className="product__description__content__text product__description__content__text--selected">Котэ не одобряет?</span>
            </div>
          )
        } else {
          return (
            <div className="product__description__content product__description__content--selected">
              <span className="product__description__content__text">Сказочное заморское яство</span>
            </div>
          )
        }
      case `disabled`:
        return (
          <div className="product__description__content product__description__content--disabled">
            <span className="product__description__content__text product__description__content__text--disabled">Сказочное заморское яство</span>
          </div>
        )
      default:
        return (
          <div className="product__description__content">
            <span className="product__description__content__text">Сказочное заморское яство</span>
          </div>
        )
    }
  };

  render(){
    const [...products] = this.props.products;

    const getProducts = products.map((item) => {
      return (
        <div className={"products-list__item product product--" + item.status}
                        key={item.id}
                        onClick={() => this.onProductClick(item.id, item.status)}
                        onMouseLeave={() => this.onProductLeave(item.id, item.status, item.hover)}>
          <div className={"product__description product__description--" + item.status}></div>
          {this.getHeader(item.status, item.hover)}
          <div className={"product__content product__content--" + item.status}>
            <h2 className={"product__title product__title--" + item.status}><span className="product__title--bold">Нямушка</span><br/>{item.taste}</h2>
            <Special special={item.special} quantity={item.quantity} status={item.status} />
            <Weight weight={item.weight} status={item.status} />
            <div className="product__footer">
              {this.getFooter(item.status, item.footer, item.taste)}
            </div>
          </div>
        </div>
      )
    });

    return(
      <div className="products-list">
        {getProducts}
      </div>
    )
  }
};
