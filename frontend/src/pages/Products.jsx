import React from 'react';

import axios from 'axios';
import { FaStar, FaRegStar } from 'react-icons/fa';
import { Link } from 'react-router-dom';

class Products extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mProduct: {
        brand: 'bran',
        category: { name: 'cat' },
        description: 'desc',
        discount: 10,
        id: 55,
        name: 'name',
        price: 555,
        stock: 1
      },
      products: [],
      category: null
    };
  }

  componentDidMount() {
    this.props.routeChange('Products');
    this.setState({ category: this.props.match.params.category });
    this.initApp();
  }

  initApp() {
    var url = 'http://localhost:8080/api/products';
    if (this.state.category) url += '/' + this.state.category;
    console.log(url);
    axios
      .get(url)
      .then(res => {
        console.log(res);
        this.setState({ products: res.data.content });
      })
      .catch(err => console.log(err));
  }

  componentWillReceiveProps(props) {
    var category = props.match.params.category;
    if (this.state.category !== category) {
      this.setState({ category });
      this.initApp();
    }
  }

  render() {
    var products = this.state.products.map(product => (
      <div
        style={{
          width: 250,
          height: 420,
          position: 'relative'
        }}
        className='mt-2 mb-3 pb-2 px-2 pt-3 border'
        key={product.id}
      >
        <img
          style={{
            width: 230,
            height: 210,
            cursor: 'pointer'
          }}
          className='mx-auto border mt-2'
          onClick={() => {
            console.log(product.name);
            this.props.history.push('/product/' + product.id);
          }}
          src={'http://localhost:8080/files/' + product.picture}
        />
        <small>Seller Rating: {product.seller.avg_rating}</small>
        <div
          style={{
            color: '#056866',
            maxHeight: 60,
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            fontSize: 14,
            cursor: 'pointer'
          }}
          onClick={() => {
            console.log(product.name);
            this.props.history.push('/product/' + product.id);
          }}
        >
          {product.name}
        </div>
        <div className='row mr-1 my-2'>
          <div className='col'>
            <strong>Brand: </strong>
            {product.brand}
          </div>
          <div style={{ color: '#f00' }}>
            $
            {(product.price - (product.price * product.discount) / 100)
              .toFixed(2)
              .replace(/\d(?=(\d{3})+\.)/g, '$&,')}
          </div>
          <sub>
            <del>${product.discount > 0 ? product.price : null}</del>
          </sub>
        </div>
        <div
          style={{ position: 'absolute', bottom: 0, width: 250 }}
          className='row justify-content-center'
        >
          <button
            type='button'
            className='btn btn-primary ml-2'
            onClick={() => this.props.addProductToCart(product.id)}
          >
            Add to Cart
          </button>
        </div>
        {product.discount > 0 ? (
          <div
            style={{
              backgroundColor: '#f95447',
              position: 'absolute',
              right: 0,
              top: 0,
              width: 50,
              textAlign: 'center',
              color: '#fff'
            }}
          >
            -%{product.discount}
          </div>
        ) : null}
      </div>
    ));
    return (
      <div style={{ backgroundColor: '#F8F3EF' }} className='py-4 px-4'>
        <div
          style={{ backgroundColor: '#F2EEEE' }}
          className='py-4 px-3 border'
        >
          <div className='row px-3'>
            <div
              style={{
                backgroundColor: '#fff',
                minHeight: 600,
                maxHeight: 900
              }}
              className='col-3 border'
            >
              <div
                style={{ color: 'darkblue', marginTop: 20, fontSize: 20 }}
                className='filters'
              >
                <b>All Categories</b>
                <hr />
                <Link
                  style={{ marginTop: 10, fontSize: 15, color: 'black' }}
                  to='/products/TV'
                >
                  TV
                </Link>
                <br />
                <Link
                  style={{ marginTop: 10, fontSize: 15, color: 'black' }}
                  to='/products/Mobile_Phone'
                >
                  Mobile Phone
                </Link>
                <br />
                <Link
                  style={{ marginTop: 10, fontSize: 15, color: 'black' }}
                  to='/products/Smart_Phone'
                >
                  Smart Phone
                </Link>
                <br />
                <Link
                  style={{ marginTop: 10, fontSize: 15, color: 'black' }}
                  to='/products/Home'
                >
                  Home
                </Link>
                <br />
                <Link
                  style={{ marginTop: 10, fontSize: 15, color: 'black' }}
                  to='/products/Furniture'
                >
                  Furniture
                </Link>
                <hr />
                <h1 style={{ color: 'darkblue', marginTop: 15, fontSize: 16 }}>
                  <b>Colors</b>
                </h1>
                <hr />
                <a
                  style={{ marginTop: 10, fontSize: 15, color: 'red' }}
                  href='/products'
                >
                  Red
                </a>
                <br />
                <a
                  style={{ marginTop: 10, fontSize: 15, color: 'blue' }}
                  href='/products'
                >
                  Blue
                </a>
                <br />
                <a
                  style={{ marginTop: 10, fontSize: 15, color: 'green' }}
                  href='/products'
                >
                  Green
                </a>
                <hr />
                <h1 style={{ color: 'darkblue', marginTop: 15, fontSize: 16 }}>
                  <b>Discount</b>
                </h1>
                <hr />
                <a
                  style={{ marginTop: 10, fontSize: 15, color: 'black' }}
                  href='/products'
                >
                  Yes
                </a>
                <br />
                <a
                  style={{ marginTop: 10, fontSize: 15, color: 'black' }}
                  href='/products'
                >
                  No
                </a>
                <br />
                <hr />
                <h1 style={{ marginTop: 15, fontSize: 16 }}>
                  <b>Seller Rate</b>
                </h1>
                <hr />
                <h2 style={{ fontSize: 12 }}>
                  <a
                    style={{ marginTop: 10, fontSize: 10, color: '#ff9900' }}
                    href='/products'
                  >
                    <FaStar
                      className='my-auto'
                      color={'#ff9900'}
                      size={'15px'}
                    />
                    <FaStar
                      className='my-auto'
                      color={'#ff9900'}
                      size={'15px'}
                    />
                    <FaStar
                      className='my-auto'
                      color={'#ff9900'}
                      size={'15px'}
                    />
                    <FaStar
                      className='my-auto'
                      color={'#ff9900'}
                      size={'15px'}
                    />
                    <FaRegStar
                      style={{ marginRight: 5 }}
                      className='my-auto'
                      color={'#ff9900'}
                      size={'15px'}
                    />
                  </a>
                  and above
                </h2>
                <h2 style={{ fontSize: 12 }}>
                  <a
                    style={{ marginTop: 10, fontSize: 10, color: '#ff9900' }}
                    href='/products'
                  >
                    <FaStar
                      className='my-auto'
                      color={'#ff9900'}
                      size={'15px'}
                    />
                    <FaStar
                      className='my-auto'
                      color={'#ff9900'}
                      size={'15px'}
                    />
                    <FaStar
                      className='my-auto'
                      color={'#ff9900'}
                      size={'15px'}
                    />
                    <FaStar
                      className='my-auto'
                      color={'#ff9900'}
                      size={'15px'}
                    />
                    <FaRegStar
                      style={{ marginRight: 5 }}
                      className='my-auto'
                      color={'#ff9900'}
                      size={'15px'}
                    />
                  </a>
                  and below
                </h2>
                <br />
              </div>
            </div>
            <div className='col ml-3 '>
              <div style={{ backgroundColor: '#fff' }} className='border mb-3'>
                <div
                  style={{ backgroundColor: 'white' }}
                  className='border mb-3 product-sorting d-flex'
                >
                  <p style={{ fontSize: 15 }}>Sort by:</p>
                  <form
                    style={{ marginLeft: 20, marginTop: 5 }}
                    action='#'
                    method='get'
                  >
                    <select
                      style={{ fontSize: 13 }}
                      name='select'
                      id='sortByselect'
                    >
                      <option value='value'>Highest Rated</option>
                      <option value='value'>Discount Amount</option>
                      <option value='value'>Price Increasing</option>
                      <option value='value'>Price Decreasing</option>
                    </select>
                    <input type='submit' className='d-none' value='' />
                  </form>
                </div>
              </div>
              <div style={{ backgroundColor: '#fff' }} className='border '>
                <div className='row m-2 justify-content-around'>
                  {products.length > 0 ? products : 'No products found'}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Products;
