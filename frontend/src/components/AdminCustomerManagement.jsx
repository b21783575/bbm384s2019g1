import React from "react";
import { Table, FormControl, Button } from "react-bootstrap";

export class AdminCustomerManagement extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      customers: [
        {
          email: "email@email.com",
          nameSurname: "asdasd asfdasd",
          formerOrders: "2",
          waitingOrders: "123",
          id: 1
        },
        {
          email: "email2@email.com",
          nameSurname: "zxczxc zczxc ",
          formerOrders: "2",
          waitingOrders: "7",
          id: 2
        },
        {
          email: "email3@email.com",
          nameSurname: "1qweqweqw eqwe qwe",
          formerOrders: "4",
          waitingOrders: "2",
          id: 3
        }
      ]
    };
  }

  render() {
    var customers = this.state.customers.map(customer => (
      <tr key={customer.email}>
        <td>{customer.id}</td>
        <td
          style={{
            wordWrap: "break-word",
            maxWidth: "280px"
          }}
        >
          {customer.email}
        </td>
        <td
          style={{
            wordWrap: "break-word",
            maxWidth: "210px"
          }}
        >
          {customer.nameSurname}
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
        </div>
      </React.Fragment>
    );
  }
}
