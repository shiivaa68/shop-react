import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import './checkout.styles.scss';
import CheckoutItem from '../../components/checkout-item/checkout-item.component';
import {
  selectCartItems,
  selectCartTotal,
} from '../../redux/card/cart.selectors';


const CheckoutPage = ({ CartItems, total }) => (
  <div className="checkout-page">
    <div className="checkout-header">
      <div className="header-block">
        <span>Product</span>
      </div>
      <div className="header-block">
        <span>Description</span>
      </div>
      <div className="header-block">
        <span>Quantity</span>
      </div>
      <div className="header-block">
        <span>Price</span>
      </div>
      <div className="header-block ">
        <span>Remove</span>
      </div>
    </div>
    {CartItems.map((cartItem) => (
        <CheckoutItem cartItem={cartItem} key={cartItem.id} />
    ))}
    <div>
        <span className='total'>
            TOTAL:${total}
        </span>
    </div>
  </div>
);

const mapStateToProps = createStructuredSelector({
  CartItems: selectCartItems,
  total: selectCartTotal,
});
export default connect(mapStateToProps)(CheckoutPage);
