import React from "react";
import { Table, Form, Col, Row } from "react-bootstrap";

export class ShoppingCart extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div style={{ backgroundColor: "#F8F3EF" }} className='py-4 px-4 border'>
        <div style={{ backgroundColor: "#F2EEEE" }} className='py-4 border'>
          <div className='px-5 py-3'>
            <div className='row'>
              <div
                style={{ backgroundColor: "#fff", minHeight: 500 }}
                className='col-9 mr-2 pt-2'
              >
                <h4 style={{ color: "blue" }}>Your Cart</h4>
                <hr />
                <Table responsive bordered hover>
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>Product Image</th>
                      <th>Product ID</th>
                      <th>Product Name</th>
                      <th>Seller Name</th>
                      <th>Product Amount</th>
                      <th>Product Description</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1</td>
                      <td>
                        <img
                          style={{ width: 100, height: 100 }}
                          className='my-auto text-center'
                          src={
                            "https://create.adobe.com/2017/7/12/the_geometric_illustrations_of_yo_az/_jcr_content/article-body/full_width_images/image2.img.png/1499894492198.png"
                          }
                        />
                      </td>
                      <td>1234</td>
                      <td>Walter White</td>
                      <td>Breaking Bad</td>
                      <td>
                        <Form>
                          <Form.Group as={Row}>
                            <Col>
                              <Form.Control type='number' placeholder='1' />
                            </Col>
                          </Form.Group>
                        </Form>
                      </td>
                      <td>Description</td>
                    </tr>
                    <tr>
                      <td>2</td>
                      <td>
                        <img
                          style={{ width: 100, height: 100 }}
                          className='my-auto text-center'
                          src={
                            "https://i.pinimg.com/736x/f4/44/c2/f444c2ff0fe53e4cfdcb2a70a880e9e7.jpg"
                          }
                        />
                      </td>
                      <td>2345</td>
                      <td>Sherlock Holmes</td>
                      <td>Sherlock</td>
                      <td>
                        <Form>
                          <Form.Group as={Row}>
                            <Col>
                              <Form.Control type='number' placeholder='1' />
                            </Col>
                          </Form.Group>
                        </Form>
                      </td>
                      <td>Description</td>
                    </tr>
                    <tr>
                      <td>3</td>
                      <td>
                        <img
                          style={{ width: 100, height: 100 }}
                          className='my-auto text-center'
                          src={
                            "https://i.pinimg.com/originals/2a/d5/a5/2ad5a584ad130593c050056866c91e34.jpg"
                          }
                        />
                      </td>
                      <td>3456</td>
                      <td>Tony Stark</td>
                      <td>Iron Man</td>
                      <td>
                        <Form>
                          <Form.Group as={Row}>
                            <Col>
                              <Form.Control type='number' placeholder='1' />
                            </Col>
                          </Form.Group>
                        </Form>
                      </td>
                      <td>Description</td>
                    </tr>
                  </tbody>
                </Table>
              </div>
              <div
                style={{ backgroundColor: "#fff", maxHeight: 375 }}
                className='col-2 ml-2' // kenarlara yapışmıyor!
              >
                <div style={{ textAlign: "right" }}>
                  <h4 style={{ color: "blue" }}>Order Summary</h4>
                  <h6>XX Products</h6>
                  <button
                    className='col-12 btn btn-primary'
                    onClick={() => {
                      this.props.history.push("/order1");
                    }}
                  >
                    Continue
                  </button>
                  <hr />
                  <h6>Total Price Of Products</h6>
                  <h6 style={{ color: "gray" }}>[VAT Included.]</h6>
                  <h6>$ XXX,xx</h6>
                  <hr />
                  <h6>Shipping Fee</h6>
                  <h6>$ XX,xx</h6>
                  <hr />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
