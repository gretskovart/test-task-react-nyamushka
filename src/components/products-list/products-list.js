import React, {Component} from 'react';

import Product from './../product';

import './product-list.less';

export default class ProductsList extends Component{
  state = {
    products: [
      {
        id: `fuagra`,
        taste: `с фуа-гра`,
        quantity: `10 порций`,
        special: `мышь в подарок`,
        weight: `0,5`,
        footer: `Печень утки разварная с артишоками.`,
        status: `default`,
        hover: false
      },
      {
        id: `fish`,
        taste: `с рыбой`,
        quantity: `40 порций`,
        special: `2 мыши в подарок`,
        weight: `2`,
        footer: `Головы щучьи с чесноком да свежайшая семгушка.`,
        status: `default`,
        hover: false
      },
      {
        id: `chicken`,
        taste: `с курой`,
        quantity: `100 порций`,
        special: `5 мышей в подарок заказчик доволен`,
        weight: `5`,
        footer: `Филе из цыплят с трюфелями в бульоне.`,
        status: `disabled`,
        hover: false
      }
    ]
  }

  toggleProductStatus = (arr, id, type) => {
    const index = arr.findIndex((el) => el.id === id);
    const oldItem = arr[index];
    let newItem;

    if (type === `click`) {
      newItem = {
        ...oldItem,
        status: oldItem.status === `selected` ? `default` : `selected`,
        hover: oldItem.hover ? false : oldItem.hover
      }
    } else if (type === `leave`) {
      newItem = {
        ...oldItem,
        hover: oldItem.hover ? false : true
      }
    }

    return [
      ...arr.slice(0, index),
      newItem,
      ...arr.slice(index + 1)
    ]
  };

  onProductClick = (id) => {
    this.setState(({products}) => {
      return {
        products: this.toggleProductStatus(products, id, `click`)
      };
    });
  };

  onProductLeave = (id) => {
    this.setState(({products}) => {
      return {
        products: this.toggleProductStatus(products, id, `leave`)
      };
    });
  };

  render(){
    const {products} = this.state;

    return(
      <Product products = {products}
               onProductClick={this.onProductClick}
               onProductLeave={this.onProductLeave} />
    );
  }
};