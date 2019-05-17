import React from 'react';

import axios from 'axios';
import { FaStar, FaRegStar } from 'react-icons/fa';

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
      products: []
    };
  }

  componentDidMount() {
    this.props.routeChange('Products');
    axios
      .get('http://localhost:8080/api/products')
      .then(res => {
        console.log(res);
        this.setState({ products: res.data });
      })
      .catch(err => console.log(err));
    /*fetch('http://localhost:8080/api/products')
      .then(response => {
        console.log(response);
        return response.json();
      })
      .then(products => {
        console.log(products);
        this.setState({ products });
      })
      .catch(err => console.log(err));*/
  }

  render() {
    var products = this.state.products.map(product => (
      <div
        style={{
          width: '30%',
          minWidth: 210,
          height: 350,
          position: 'relative'
        }}
        className='mx-2 my-2 py-2 px-2 border'
        key={product.id}
      >
        <img
          style={{
            width: '95%',
            height: '50%',
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
          style={{ position: 'absolute', bottom: 0 }}
          className='w-100 row justify-content-center'
        >
          <button
            type='button'
            className='btn btn-primary'
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
                <a
                  style={{ marginTop: 10, fontSize: 15, color: 'black' }}
                  href='/products'
                >
                  TV
                </a>
                <br />
                <a
                  style={{ marginTop: 10, fontSize: 15, color: 'black' }}
                  href='/products'
                >
                  Mobile Phone
                </a>
                <br />
                <a
                  style={{ marginTop: 10, fontSize: 15, color: 'black' }}
                  href='/products'
                >
                  Smart Phone
                </a>
                <br />
                <a
                  style={{ marginTop: 10, fontSize: 15, color: 'black' }}
                  href='/products'
                >
                  Home
                </a>
                <br />
                <a
                  style={{ marginTop: 10, fontSize: 15, color: 'black' }}
                  href='/products'
                >
                  Furniture
                </a>
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
                <div className='row justify-content-center'>
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
