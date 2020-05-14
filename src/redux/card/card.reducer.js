import CartActionTypes from './card.types';
import {addItemToCart,removeItemFromCart} from './cart.utils';
import CartItem from '../../components/cart-item/cart-item.component';

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
      case CartActionTypes.CLEAR_ITEM_FROM_CART:
        return{
          ...state,
          cartItems:state.cartItems.filter(
            cartItem => CartItem.id !== action.payload.id
          )
        }
        case CartActionTypes.REMOVE_ITEM:
          return{
            ...state,
           cartItems: removeItemFromCart(state.cartItems,action.payload)
          }
    default:
      return state;
  }
};

export default CardReducer;
