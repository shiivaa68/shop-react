import CartActionTypes from './card.types';
import {addItemToCart} from './cart.utils';

const INITIAL_STATE = {
  hidden: true,
  cartItems: [],
};

const CardReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CartActionTypes.TOGGLE_CARD_HIDDEN:
      return {
        ...state,
        hidden: !state.hidden,
      };
    case CartActionTypes.ADD_ITEM:
      return {
        ...state,
        // cardItems: [...state.cardItems, action.payload],
        cartItems:addItemToCart(state.cartItems,action.payload)
      }; 
    default:
      return state;
  }
};

export default CardReducer;
