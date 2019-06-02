import React from "react";
import { Table, FormControl, Button } from "react-bootstrap";
import Pagination from "react-bootstrap/Pagination";

export class AdminSellerManagement extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sellers: [
        {
          companyName: "Comp",
          sellerSurname: "asfdasd",
          rating: "2",
          numOfWaitingSale: "123",
          id: 1
        },
        {
          companyName: "Comp2",
          sellerSurname: "zxczxc",
          rating: "2",
          numOfWaitingSale: "7",
          id: 2
        },
        {
          companyName: "Comp3",
          sellerSurname: "1qweqwe",
          rating: "4",
          numOfWaitingSale: "2",
          id: 3
        }
      ]
    };
  }

  render() {
    var sellers = this.state.sellers.map(seller => (
      <tr key={seller.id}>
        <td>{seller.id}</td>
        <td
          style={{
            wordWrap: "break-word",
            maxWidth: "250px"
          }}
        >
          {seller.companyName}
        </td>
        <td
          style={{
            wordWrap: "break-word",
            maxWidth: "180px"
          }}
        >
          {seller.sellerSurname}
        </td>
        <td>{seller.rating}</td>
        <td>{seller.numOfWaitingSale}</td>
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
          <h4>Seller Management</h4>
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
                  <th>Company Name</th>
                  <th>Seller Surname</th>
                  <th>Rating</th>
                  <th>Number of Waiting Approval</th>
                  <th>Seller Page</th>
                </tr>
              </thead>
              <tbody>{sellers}</tbody>
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
