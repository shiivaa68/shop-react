import React from 'react';
import { connect } from 'react-redux';
import CartItem from '../cart-item/cart-item.component'
import CustomButton from '../custom-button/custom-button.component';

import './card-dropdown.styles.scss';

const CradDropdown = ({ cartItems }) => (
  <div className="cart-dropdown">
    <div className="cart-items">
      {cartItems.map(cartItem => (
        <CartItem key={cartItem.id} item={cartItem} />
      ))}
    </div>

    <CustomButton>GO TO CHECKOUT</CustomButton>
  </div>
);

const mapStateToProps = ({ cart: { cartItems } }) => ({
  cartItems,
});

export default connect(mapStateToProps)(CradDropdown);
