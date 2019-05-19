import React from 'react';
import { Table, FormControl, Button } from 'react-bootstrap';

export class AdminProductManagement extends React.Component {
  render() {
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
              <tbody>
                <tr>
                  <td>1</td>
                  <td>P6374838</td>
                  <td>TV</td>
                  <td>Television</td>
                  <td>43234</td>
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
                  <td>P5436345</td>
                  <td>Smart Phone</td>
                  <td
                    style={{
                      'word-wrap': 'break-word',
                      'max-width': '280px'
                    }}
                  >
                    Smart Phone Smart
                  </td>
                  <td>232</td>
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
                  <td>P122346754</td>
                  <td>Home</td>
                  <td>Home Sweet Home</td>
                  <td>1</td>
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
