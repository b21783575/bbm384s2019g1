import React from "react";
import {
  Table,
  FormControl,
  Button,
  ToggleButton,
  ToggleButtonGroup
} from "react-bootstrap";
import Pagination from "react-bootstrap/Pagination";

export class AdminSales extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div className='container my-5'>
          <h4>Waiting Sales List</h4>
          <br />
          <div className='col'>
            <Table responsive bordered hover>
              <thead>
                <tr>
                  <th>#</th>
                  <th>Product ID</th>
                  <th>Customer ID</th>
                  <th>Trader ID</th>
                  <th>Order ID</th>
                  <th>Date of Sale</th>
                  <th>Confirm</th>
                  <th>Reject</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>asdasd</td>
                  <td>asdasd</td>
                  <td>Tfdsfsd</td>
                  <td>sdfsd</td>
                  <td>sdfsdf</td>
                  <td>
                    {" "}
                    <Button
                      style={{ minWidth: 75 }}
                      variant='success text-center'
                      className='col-3'
                    >
                      Confirm
                    </Button>
                  </td>
                  <td>
                    {" "}
                    <Button
                      style={{ minWidth: 75 }}
                      variant='danger text-center'
                      className='col-3'
                    >
                      Reject
                    </Button>
                  </td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>asdasd</td>
                  <td>asdasd</td>
                  <td>Tfdsfsd</td>
                  <td>sdfsd</td>
                  <td>sdfsdf</td>
                  <td>
                    <Button
                      style={{ minWidth: 75 }}
                      variant='success text-center'
                      className='col-3'
                    >
                      Confirm
                    </Button>
                  </td>
                  <td>
                    {" "}
                    <Button
                      style={{ minWidth: 75 }}
                      variant='danger text-center'
                      className='col-3'
                    >
                      Reject
                    </Button>
                  </td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>asdasd</td>
                  <td>asdasd</td>
                  <td>Tfdsfsd</td>
                  <td>sdfsd</td>
                  <td>sdfsdf</td>
                  <td>
                    <Button
                      style={{ minWidth: 75 }}
                      variant='success text-center'
                      className='col-3'
                    >
                      Confirm
                    </Button>
                  </td>
                  <td>
                    {" "}
                    <Button
                      style={{ minWidth: 75 }}
                      variant='danger text-center'
                      className='col-3'
                    >
                      Reject
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
