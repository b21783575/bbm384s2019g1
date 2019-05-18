import React from 'react';
import { Table, FormControl, Button } from 'react-bootstrap';

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
                  <td>Hardcoded</td>
                  <td>Coded</td>
                  <td>4.5</td>
                  <td>2</td>
                  <td>
                    {' '}
                    <Button
                      style={{ minWidth: 75 }}
                      variant='outline-primary text-center'
                      className='col-3'
                    >
                      Page
                    </Button>
                  </td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>Hardcoded2</td>
                  <td>Coded2</td>
                  <td>4.2</td>
                  <td>3</td>
                  <td>
                    {' '}
                    <Button
                      style={{ minWidth: 75 }}
                      variant='outline-primary text-center'
                      className='col-3'
                    >
                      Page
                    </Button>
                  </td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>Hardcoded3</td>
                  <td>Coded3</td>
                  <td>1</td>
                  <td>54353</td>
                  <td>
                    {' '}
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
      </React.Fragment>
    );
  }
}
