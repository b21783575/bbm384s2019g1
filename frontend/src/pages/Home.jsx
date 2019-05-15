import React from 'react';

import { SlideLabel } from '../components/SlideLabel';
import { getUser, logout } from '../helpers/authHelper';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

const slideContext = [
  {
    href: '/seller',
    src:
      'https://www.androidguys.com/wp-content/uploads/2019/02/galaxy_s10_trio.png',
    title: 'Samsung S10 Family',
  },
  {
    href: '/seller',
    src:
      'https://www.furniturenation.com/uploads/28327_6870218.jpg',
    title: 'Bellona Sofa',
  },
  {
    href: '/seller',
    src:
      'https://www.shanethegamer.com/wp-content/uploads/2017/10/frametv_fd_main_visual_03.jpg',
    title: 'Samsung Frame TV',
  }
];

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isLogin: false };

    this.toggleLogin = this.toggleLogin.bind(this);
  }

  componentDidMount() {
    this.props.routeChange('Home');
    console.log('home');
    console.log(getUser());
  }

  toggleLogin() {
    this.setState({ isLogin: !this.state.isLogin });
  }

  render() {
    return (
      <div style={{ backgroundColor: '#ccc' }}> 
        <React.Fragment>
          <div className='container mt-md-2'>
            <a href='/demo'>Demo</a>
            <button type='button' onClick={this.toggleLogin}>
              Toggle login
            </button>
            <button
              type='button'
              onClick={() => {
                this.props.history.push('/seller');
              }}
            >
              Seller Account Page
            </button>
            <button
              type='button'
              onClick={() => {
                this.props.history.push('/admin');
              }}
            >
              Admin Account Page
            </button>
            <button
              type='button'
              onClick={() => {
                this.props.history.push('/products');
              }}
            >
              Products
            </button>
            <div className='w-75 mx-auto'>
              <SlideLabel slideContext={slideContext} />
            </div>
            <div style={{ height: '600px' }} className='row w-100 mx-auto mt-2'>
              <div className='col text-center bg-dark'>PRODUCT</div>
              <div className='col w-100 bg-light'>
                <div className='row-4 h-25 w-100 text-center align-middle bg-success'>
                  CAT1
                </div>
                <div className='row-6 h-50 text-center my-auto bg-danger'>
                  CAT2
                </div>
                <div className='row-2 h-25 align-middle bg-primary'>
                  <h3 className='text-center'>CAT3</h3>
                </div>
              </div>
              <div className='col bg-secondary'>
                <div className='row-4 text-center'>CAT4</div>
                <div className='row-6 text-center'>CAT5</div>
                <div className='row-2 text-center'>CAT6</div>
              </div>
            </div>
          </div>
          <Modal show={this.state.isLogin}>
            <Modal.Body
              className='text-center'
              style={{ color: '#090', fontSize: 25 }}
            >
              Successfully Edited
            </Modal.Body>
            <Modal.Footer>
              <Button variant='primary'>Close</Button>
            </Modal.Footer>
          </Modal>
        </React.Fragment>
      </div>
    );
  }
}

export default Home;
