import React from 'react';
import { Link } from 'react-router-dom';
import './header.styles.scss';
import { ReactComponent as Logo } from '../../assets/crown.svg';
import { auth } from '../../firebase/firebase.utils';
import { connect } from 'react-redux';
import {createStructuredSelector} from 'reselect';
import {selectCartHidden} from '../../redux/card/cart.selectors';
import {selectCurrentUser} from '../../redux/user/user.selectors';
import CardIcon from '../../components/card-icon/card-icon.component';
import CradDropdown from '../../components/card-dropdown/card-dropdown.component';

const Header = ({ currentUser, hidden }) => (
  <div className="header">
    <Link className="logo-container" to="/">
      <Logo className="logo" />
    </Link>
    <div className="options">
      <Link className="option" to="/shop">
        SHOP
      </Link>
      <Link className="option" to="/contact">
        CONTACT
      </Link>

      {currentUser ? (
        <div className="option" onClick={() => auth.signOut()}>
          {' '}
          SIGN OUT{' '}
        </div>
      ) : (
        <Link className="option" to="/sign-in">
          SIGN IN
        </Link>
      )}
      <CardIcon />
    </div>
    {hidden ? null : <CradDropdown />}
  </div>
);

// const mapStateToProps = ({ user: { currentUser }, cart: { hidden } }) => ({
//   currentUser,
//   hidden,
// });

// const mapStateToProps = (state) => ({
//   currentUser:selectCurrentUser(state),
//   hidden:selectCartHidden(state),
// });

const mapStateToProps = createStructuredSelector ({
  currentUser:selectCurrentUser, 
  hidden:selectCartHidden,
});


export default connect(mapStateToProps)(Header);
