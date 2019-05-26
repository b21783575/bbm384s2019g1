import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from 'react-router-dom';

import Home from './pages/Home';
import Seller from './pages/Seller';
import Login from './pages/Login';
import SellerRegister from './pages/SellerRegister';
import CustomerRegister from './pages/CustomerRegister';
import Products from './pages/Products';
import Product from './pages/Product';
import Demo from './pages/Demo';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import Authentication from './helpers/Authentication';
import Customer from './pages/Customer';
import CartHelper from './helpers/CartHelper';

const headerlessPages = ['Login', 'seller'];

export default class Routes extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isHeader: true,
      headerCart: true,
      user: null
    };

    this.routeChange = this.routeChange.bind(this);
    this.login = this.login.bind(this);
    this.logout = this.logout.bind(this);
    this.addProductToCart = this.addProductToCart.bind(this);
  }

  componentDidMount() {
    CartHelper.deleteCart();
    var token = Authentication.getToken();
  }

  initialize() {
    var user = Authentication.getUser();
    this.setState({ user });
  }

  login() {
    console.log('6');
    this.initialize();
  }

  logout() {
    Authentication.logout();
    this.setState({ user: null });
  }

  addProductToCart(productId) {
    CartHelper.addProduct(productId);
    CartHelper.getProducts();
  }

  routeChange(page) {
    if (headerlessPages.includes(page)) this.setState({ isHeader: false });
    else if (!this.state.isHeader) this.setState({ isHeader: true });
    if (page.includes('seller')) this.setState({ headerCart: false });
    else if (!this.state.headerCart) this.setState({ headerCart: true });
  }

  render() {
    return (
      <div>
        <Router>
          <div>
            <Header
              user={this.state.user}
              logout={this.logout}
              isHeader={this.state.isHeader}
              cart={this.state.headerCart}
            />
            <Switch>
              <Route
                exact
                path='/'
                render={props => (
                  <Home routeChange={this.routeChange} {...props} />
                )}
              />
              <Route
                path='/demo'
                render={props => (
                  <Demo routeChange={this.routeChange} {...props} />
                )}
              />
              <Route
                path='/register/seller'
                render={props => (
                  <SellerRegister routeChange={this.routeChange} {...props} />
                )}
              />
              <Route
                path='/register/customer'
                render={props => (
                  <CustomerRegister routeChange={this.routeChange} {...props} />
                )}
              />
              <Route
                exact
                path='/register'
                render={() => <Redirect to='/register/customer' />}
              />
              <Route
                path='/login'
                render={props =>
                  !!this.state.user ? (
                    <Redirect to='/' />
                  ) : (
                    <Login
                      routeChange={this.routeChange}
                      login={this.login}
                      {...props}
                    />
                  )
                }
              />
              <Route
                path='/seller'
                render={props => (
                  <Seller
                    routeChange={this.routeChange}
                    seller={this.state.user}
                    logout={this.logout}
                    {...props}
                  />
                )}
              />
              <Route
                path='/customer'
                render={props => (
                  <Customer
                    routeChange={this.routeChange}
                    customer={this.state.user}
                    {...props}
                  />
                )}
              />
              <Route
                exact
                path='/products'
                render={props => (
                  <Products
                    routeChange={this.routeChange}
                    addProductToCart={this.addProductToCart}
                    {...props}
                  />
                )}
              />
              <Route
                path='/product/:id'
                render={props => (
                  <Product routeChange={this.routeChange} {...props} />
                )}
              />
              <Redirect from='/*' to='/' />
            </Switch>
            <Footer isFooter={this.state.isHeader} />
          </div>
        </Router>
      </div>
    );
  }
}
