import React from "react";
import { FormControl, Button } from "react-bootstrap";

export class AdminFeedback extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div className='container my-5'>
          <h4>Feedbacks</h4>
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
            <div className='row border container py-3 mb-2'>
              <div className='col'>
                <strong className='row border mb-2'>
                  Notification ID: 0001
                </strong>{" "}
                <strong className='row border mb-2'>
                  Name Surname: Onur C.
                </strong>{" "}
                <strong className='row border pb-5'>
                  Message: Efenim? N'aptınız?
                </strong>{" "}
              </div>
              <Button
                style={{ minWidth: 75 }}
                variant='primary text-center'
                className='col-2 mt-auto mx-2'
              >
                Answer
              </Button>
            </div>
            <div className='row border container py-3 mb-2'>
              <div className='col'>
                <strong className='row border mb-2'>
                  Notification ID: 0002
                </strong>{" "}
                <strong className='row border mb-2'>
                  Name Surname: Berat K.
                </strong>{" "}
                <strong className='row border pb-5'>
                  Message: Allah'a Şükür İdare Ediyoruz. Ya Siz?
                </strong>{" "}
              </div>
              <Button
                style={{ minWidth: 75 }}
                variant='primary text-center'
                className='col-2 mt-auto mx-2'
              >
                Answer
              </Button>
            </div>
            <div className='row border container py-3 mb-2'>
              <div className='col'>
                <strong className='row border mb-2'>
                  Notification ID: 0003
                </strong>{" "}
                <strong className='row border mb-2'>
                  Name Surname: Onur C.
                </strong>{" "}
                <strong className='row border pb-5'>
                  Message: Yuvarlanıp Gidiyoruz Bakalım.
                </strong>{" "}
              </div>
              <Button
                style={{ minWidth: 75 }}
                variant='primary text-center'
                className='col-2 mt-auto mx-2'
              >
                Answer
              </Button>
            </div>
            <div className='row border container py-3 mb-2'>
              <div className='col'>
                <strong className='row border mb-2'>
                  Notification ID: 0004
                </strong>{" "}
                <strong className='row border mb-2'>
                  Name Surname: Berak K.
                </strong>{" "}
                <strong className='row border pb-5'>
                  Message: Hadi Bakiyim :D
                </strong>{" "}
              </div>
              <Button
                style={{ minWidth: 75 }}
                variant='primary text-center'
                className='col-2 mt-auto mx-2'
              >
                Answer
              </Button>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
