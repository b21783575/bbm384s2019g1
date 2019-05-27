import React from "react";
import { Table, FormControl, Button } from "react-bootstrap";

export class AdminProductManagement extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [
        {
          productID: "P1231",
          category: "TV",
          productName: "TV TV TV",
          stockStatus: "123",
          id: 1
        },
        {
          productID: "P1234",
          category: "Smart Phone",
          productName: "Phone Sweet Phone",
          stockStatus: "123",
          id: 2
        },
        {
          productID: "P1235",
          category: "Home",
          productName: "Home Sweet Home",
          stockStatus: "123",
          id: 3
        }
      ]
    };
  }
  render() {
    var products = this.state.products.map(product => (
      <tr key={product.productID}>
        <td>{product.id}</td>
        <td>{product.productID}</td>
        <td
          style={{
            wordWrap: "break-word",
            maxWidth: "280px"
          }}
        >
          {product.category}
        </td>
        <td>{product.productName}</td>
        <td>{product.stockStatus}</td>
        <td>
          <Button
            style={{ minWidth: 75 }}
            variant='outline-primary text-center'
            className='col-3'
          >
            Page
          </Button>
        </td>
      </tr>
    ));
    return (
      <React.Fragment>
        <div className='container my-5'>
          <h4>Product Management</h4>
          <br />
          <div className='col'>
            <div className='row container py-3'>
              <FormControl
                style={{ minWidth: 75 }}
                type='text'
                placeholder='Search'
                className='mr-sm-2 col-8'
              />
              <Button
                style={{ minWidth: 75 }}
                variant='outline-primary text-center'
                className='col-3'
              >
                Search
              </Button>
            </div>
            <Table responsive bordered hover>
              <thead>
                <tr>
                  <th>#</th>
                  <th>Product ID</th>
                  <th>Category</th>
                  <th>Product Name</th>
                  <th>Stock Status</th>
                  <th>Product Page</th>
                </tr>
              </thead>
              <tbody>{products}</tbody>
            </Table>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
