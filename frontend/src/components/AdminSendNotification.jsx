import React from 'react';

export class AdminSendNotification extends React.Component {
  render() {
    return (
      <div className='container my-5'>
        <h4>Product Management</h4>
        <br />
        <div className='col'>
          <div className='row container py-3'>
            <div className='col'>
              <strong className='row border'>Search</strong> <br />
            </div>
          </div>
          <button
              className='col-2 btn btn-primary bottom-right my-auto'
              type='button'
            >
              Home
            </button>
          <div className='row border container py-3'>
            <div className='col'>
              <strong className='row border'>Notification ID: 0001</strong> <br />
              <strong className='row border'>Name Surname: Onur C.</strong> <br />
              <strong className='row border'>Message: Efenim? N'aptınız?</strong> <br />
            </div>
            <button
              className='col-2 btn btn-primary bottom-right my-auto'
              type='button'
            >
              Answer
            </button>
          </div>
        </div>
      </div>
    );
  }
}
