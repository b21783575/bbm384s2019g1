import React from 'react';
import 'normalize.css';

import styles from '../app.sass';

import { AdminAccount } from '../components/AdminAccount';
import { AdminFeedback } from '../components/AdminFeedback';
import { AdminProductManagement } from '../components/AdminProductManagement';
import { AdminPromotion } from '../components/AdminPromotion';
import { AdminSales } from '../components/AdminSales';
import { AdminSendNotification } from '../components/AdminSendNotification';
import { AdminSellerManagement } from '../components/AdminSellerManagement';
import { AdminUserManagement } from '../components/AdminUserManagement';

const selectedColor = '#11f';

class Admin extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 'changePassword'
    };
  }

  componentDidMount() {
    this.props.routeChange('Admin');
    fetch('api/s')
      .then(response => {
        return response.json();
      })
      .then(admin => {
        this.setState({ admin });
      })
      .catch(err => console.log(err));
  }

  renderPage() {
    switch (this.state.page) {
      case 'changePassword':
        return <AdminAccount />;
      case 'sellerManagement':
        return <AdminSellerManagement />;
      case 'userManagement':
        return <AdminUserManagement />;
      case 'productManagement':
        return <AdminProductManagement />;
      case 'promotion':
        return <AdminPromotion />;
      case 'sales':
        return <AdminSales />;
      case 'sendNotification':
        return <AdminSendNotification />;
      case 'feedback':
        return <AdminFeedback />;
      default:
        return <AdminAccount />;
    }
  }

  render() {
    return (
      <div style={{ backgroundColor: '#faf5f1' }}>
        <div className='container'>
          <div className='row mt-3'>
            <div
              style={{ marginTop: 20, backgroundColor: '#fff' }}
              className='col-3 mr-4 pt-4'
            >
              <h4 style={{ fontSize: 35 }} href='/' className='text-center'> HUMBO </h4>
              <br />
              <br />
              <br />
              <h5
                className={styles.link}
                style={{
                  color: this.state.page === 'sellerManagement' ? selectedColor : null
                }}
                onClick={() => this.setState({ page: 'sellerManagement' })}
              >
                Seller Management
              </h5>
              <br />
              <h5
                className={styles.link}
                style={{
                  color: this.state.page === 'userManagement' ? selectedColor : null
                }}
                onClick={() => this.setState({ page: 'userManagement' })}
              >
                User Management
              </h5>
              <br />
              <h5
                className={styles.link}
                style={{
                  color: this.state.page === 'productManagement' ? selectedColor : null
                }}
                onClick={() => this.setState({ page: 'productManagement' })}
              >
                Product Management
              </h5>
              <br />
              <h5
                className={styles.link}
                style={{
                  color: this.state.page === 'promotion' ? selectedColor : null
                }}
                onClick={() => this.setState({ page: 'promotion' })}
              >
                Promotion
              </h5>
              <br />
              <h5
                className={styles.link}
                style={{
                  color: this.state.page === 'sales' ? selectedColor : null
                }}
                onClick={() => this.setState({ page: 'sales' })}
              >
                Sales
              </h5>
              <br />
              <h5
                className={styles.link}
                style={{
                  color: this.state.page === 'sendNotification' ? selectedColor : null
                }}
                onClick={() => this.setState({ page: 'sendNotification' })}
              >
                Send Notification
              </h5>
              <br />
              <h5
                className={styles.link}
                style={{
                  color: this.state.page === 'feedback' ? selectedColor : null
                }}
                onClick={() => this.setState({ page: 'feedback' })}
              >
                Feedback
              </h5>
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <hr />
              <h5
                className={styles.link}
                style={{
                  color: this.state.page === 'changePassword' ? selectedColor : null
                }}
                onClick={() => this.setState({ page: 'changePassword' })}
              >
                Change Password
              </h5>
              <hr />
              <h5>Logout</h5>
              <br />
              <br />
            </div>
            <div style={{ backgroundColor: '#fff' }} className='col'>
              {this.renderPage()}
            </div>
          </div>
        </div>
        <br />
      </div>
    );
  }
}

export default Admin;