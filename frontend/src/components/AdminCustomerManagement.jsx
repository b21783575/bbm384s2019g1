import React from 'react';
import { Table, FormControl, Button } from 'react-bootstrap';
import Pagination from 'react-bootstrap/Pagination';
import axios from 'axios';

export class AdminCustomerManagement extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      customers: []
    };
  }

  componentDidMount() {
    //this.props.routeChange('Products');
    axios
      .get('http://localhost:8080/api/c/all')
      .then(res => {
        console.log(res);
        this.setState({ customers: res.data.content });
      })
      .catch(err => console.log(err));
  }

  render() {
    var customers = this.state.customers.map((customer, index) => (
      <tr key={index + 1}>
        <td>{index + 1}</td>
        <td
          style={{
            wordWrap: 'break-word',
            maxWidth: '280px'
          }}
        >
          {customer.email}
        </td>
        <td
          style={{
            wordWrap: 'break-word',
            maxWidth: '210px'
          }}
        >
          {customer.name}
        </td>
        <td>{customer.formerOrders}</td>
        <td>{customer.waitingOrders}</td>
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
          <h4>Customer Management</h4>
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
                  <th>Email</th>
                  <th>Name Surname</th>
                  <th>Former Orders</th>
                  <th>Waiting Orders</th>
                  <th>Customer Page</th>
                </tr>
              </thead>
              <tbody>{customers}</tbody>
            </Table>
          </div>
          <Pagination className='pagination justify-content-center align-items-end'>
            <Pagination.Prev />
            <Pagination.Item active>{1}</Pagination.Item>
            <Pagination.Item disabled>{2}</Pagination.Item>
            <Pagination.Item disabled>{3}</Pagination.Item>

            <Pagination.Ellipsis />

            <Pagination.Item>{10}</Pagination.Item>
            <Pagination.Item>{11}</Pagination.Item>
            <Pagination.Item>{12}</Pagination.Item>
            <Pagination.Next />
          </Pagination>
        </div>
      </React.Fragment>
    );
  }
}
