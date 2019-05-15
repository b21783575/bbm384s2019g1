import React from 'react';

export class Footer extends React.Component {
  render() {
    if (this.props.isFooter)
      return (
        <React.Fragment>
          <div className='footer sticky-bottom'>
            <div
              style={{ backgroundColor: '#384E6E', width: '100%' }}
              className='d-flex justify-content-around'
            >
              <div
                style={{ color: '#fff' }}
                className='d-flex flex-column bd-highlight mb-3 mt-auto'
                href='/'
              >
                <a
                  style={{ color: '#999999', fontSize: '20px'}}
                  className='p-1 bd-highlight'
                >
                  HUMBO
                </a>
                <a
                  style={{ color: 'white' }}
                  className='p-1 bd-highlight'
                  href='/'
                >
                  About Us
                </a>
                <a
                  style={{ color: 'white' }}
                  className='p-1 bd-highlight'
                  href='/'
                >
                  Contact US
                  <i style={{ marginLeft: 10 }} className="far fa-envelope"></i>
                </a>
                <a
                  style={{ color: 'white' }}
                  className='p-1 bd-highlight'
                  href='/'
                >
                  Help
                </a>
                <a
                  style={{ color: 'white' }}
                  className='p-1 bd-highlight'
                  href='/'
                >
                  Our Policy
                </a>
                <a
                  style={{ color: 'white' }}
                  className='p-1 bd-highlight'
                  href='/'
                >
                  My Account
                </a>
                <a style={{ marginTop: 15 }}>
                  <i className="fab fa-cc-visa"></i>
                  <i style={{ marginLeft: 10, fontSize: 10 }} className="fab fa-cc-mastercard"></i>
                  <i style={{ marginLeft: 10 }} className="far fa-credit-card"></i>
                  <i style={{ marginLeft: 10 }} className="fab fa-cc-amazon-pay"></i>
                  <i style={{ marginLeft: 10 }} className="fab fa-cc-amex"></i>
                  <i style={{ marginLeft: 10 }} className="fab fa-cc-apple-pay"></i>
                </a>
              </div>
              <div
                style={{ color: '#fff' }}
                className='d-flex flex-column bd-highlight mb-3'
                href='/'
              >
                <a
                  style={{ color: '#999999', fontSize: '20px' }}
                  className='p-1 bd-highlight'
                >
                  CATEGORIES
                </a>
                <a
                  style={{ color: 'white' }}
                  className='p-1 bd-highlight'
                  href='/'
                >
                  Laptop
                  <i style={{ marginLeft: 10 }} className="fas fa-laptop"></i>
                </a>
                <a
                  style={{ color: 'white' }}
                  className='p-1 bd-highlight'
                  href='/'
                >
                  TV
                  <i style={{ marginLeft: 10 }} className="fas fa-desktop"></i>
                </a>
                <a
                  style={{ color: 'white' }}
                  className='p-1 bd-highlight'
                  href='/'
                >
                  Book
                  <i style={{ marginLeft: 10 }} className="fas fa-book-open"></i>
                </a>
                <a
                  style={{ color: 'white' }}
                  className='p-1 bd-highlight'
                  href='/'
                >
                  Smart Phone
                  <i style={{ marginLeft: 10 }} className="fas fa-mobile"></i>
                </a>
                <a
                  style={{ color: 'white' }}
                  className='p-1 bd-highlight'
                  href='/'
                >
                  Cell Phone
                  <i style={{ marginLeft: 10 }} class="fas fa-mobile"></i>
                </a>
                <a
                  style={{ color: 'white' }}
                  className='p-1 bd-highlight'
                  href='/'
                >
                  Sofa
                  <i style={{ marginLeft: 10 }} className="fas fa-couch"></i>
                </a>
              </div>
            </div>
          </div>
        </React.Fragment>
      );
    return null;
  }
}
