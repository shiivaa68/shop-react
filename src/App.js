import React, { Component } from 'react';
import './App.css';
import HomePage from './pages/homepage/homepage.component';
import { Route, Switch ,Redirect} from 'react-router-dom';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-out.component';
import { auth } from './firebase/firebase.utils';
import {connect} from 'react-redux';
import {setCurrentUser} from './redux/user/user.actions';
class App extends Component {

  unsubscribeFromAuth = null;
  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged((user) => {
      this.setState({ currentUser: user });
      console.log(user);
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }
  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/shop" component={ShopPage} />
          <Route exact path="/sign-in"  render={()=>this.props.currentUser?(<Redirect to='/' />):(<SignInAndSignUpPage />)} />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = ({user}) => ({
  currentUser:user.currentUser
});

const mapDispatchToProps = dispatch =>({
  setCurrentUser:user=>dispatch(setCurrentUser(user))
})



export default  connect (mapStateToProps,mapDispatchToProps) (App);
