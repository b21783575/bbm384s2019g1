import React from 'react';

import styles from '../app.sass';

import { SellerOrders } from '../components/SellerOrders';
import { SellerProducts } from '../components/SellerProducts';
import { AccountInfo } from '../components/AccountInfo';
import { AddressInfo } from '../components/AddressInfo';
import { HelpMessage } from '../components/HelpMessage';

const selectedColor = '#11f';

class Seller extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 'profile',
      seller: {}
    };
  }

  componentDidMount() {
    this.props.routeChange('seller');
    fetch('api/s')
      .then(response => {
        return response.json();
      })
      .then(seller => {
        this.setState({ seller });
      })
      .catch(err => console.log(err));
  }

  renderPage() {
    switch (this.state.page) {
      case 'profile':
        return <AccountInfo seller={this.state.seller} />;
      case 'orders':
        return <SellerOrders />;
      case 'addresses':
        return <AddressInfo />;
      case 'products':
        return <SellerProducts seller={'umut@gmail.com'} />; //TODO fix it
      case 'help':
        return <HelpMessage />;
      default:
        return <AccountInfo />;
    }
  }

  componentWillReceiveProps(props) {
    this.setState({ seller: props.seller });
  }

  render() {
    return (
      <div
        style={{
          backgroundColor: '#ccc'
        }}
        className='pb-5 pt-5'
      >
        <div className='container pt-5 pb-5'>
          <div className='row'>
            <div
              style={{ backgroundColor: '#fff' }}
              className='col-3 mr-4 pt-4'
            >
              <h4 className='text-center border border-dark'> {this.state.seller.name}</h4>
              <h4 className='text-center border border-dark'> {this.state.seller.companyName}</h4>
              <br />
              <br />
              <h5
                className={styles.link}
                style={{
                  color: this.state.page === 'profile' ? selectedColor : null
                }}
                onClick={() => this.setState({ page: 'profile' })}
              >
                Profile
              </h5>
              <h5
                className={styles.link}
                style={{
                  color: this.state.page === 'orders' ? selectedColor : null
                }}
                onClick={() => this.setState({ page: 'orders' })}
              >
                Orders
              </h5>
              <h5
                className={styles.link}
                style={{
                  color: this.state.page === 'addresses' ? selectedColor : null
                }}
                onClick={() => this.setState({ page: 'addresses' })}
              >
                Addresses
              </h5>
              <h5
                className={styles.link}
                style={{
                  color: this.state.page === 'products' ? selectedColor : null
                }}
                onClick={() => this.setState({ page: 'products' })}
              >
                Products
              </h5>
              <br />
              <br />
              <hr />
              <h5
                className={styles.link}
                style={{
                  color: this.state.page === 'help' ? selectedColor : null
                }}
                onClick={() => this.setState({ page: 'help' })}
              >
                Help
              </h5>
              <hr />
              <h5
                className={styles.link}
                onClick={() => {
                  this.props.logout();
                  this.props.history.push('/');
                }}
              >
                Logout
              </h5>
              <br />
            </div>
            <div style={{ backgroundColor: '#fff' }} className='col'>
              {this.renderPage()}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Seller;
