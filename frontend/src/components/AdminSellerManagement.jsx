import React from "react";
import { Table, FormControl, Button } from "react-bootstrap";
import Pagination from "react-bootstrap/Pagination";

export class AdminSellerManagement extends React.Component {
  render() {
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
              <tbody>
                <tr>
                  <td>1</td>
                  <td
                    style={{
                      wordwrap: "break-word",
                      maxWidth: "250px"
                    }}
                  >
                    Hard
                  </td>
                  <td
                    style={{
                      wordwrap: "break-word",
                      maxWidth: "180px"
                    }}
                  >
                    Coded
                  </td>
                  <td>4.5</td>
                  <td>2</td>
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
              </tbody>
            </Table>
          </div>
        </div>
        <Pagination className='pagination justify-content-center align-items-end'>
          <Pagination.First />
          <Pagination.Prev />
          <Pagination.Item active>{1}</Pagination.Item>
          <Pagination.Item disabled>{2}</Pagination.Item>
          <Pagination.Item disabled>{3}</Pagination.Item>
          <Pagination.Ellipsis />

          <Pagination.Item>{10}</Pagination.Item>
          <Pagination.Item>{11}</Pagination.Item>
          <Pagination.Item>{12}</Pagination.Item>

          <Pagination.Ellipsis />
          <Pagination.Item>{20}</Pagination.Item>
          <Pagination.Next />
          <Pagination.Last />
        </Pagination>
      </React.Fragment>
    );
  }
}
