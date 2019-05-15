import React from 'react';

export class AdminFeedback extends React.Component {
  render() {
    return (
      <div className='container my-5'>
        <h4>Feedbacks</h4>
        <br />
        <div className='col'>
          <div className='row container py-3'>
            <div className='col'>
              <strong className='row border'>Search</strong> <br />
            </div>
          </div>
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
          <br />
          <div className='row border container py-3'>
            <div className='col'>
              <strong className='row border'>Notification ID: 0002</strong> <br />
              <strong className='row border'>Name Surname: Berat K.</strong> <br />
              <strong className='row border'>Message: Allah'a Şükür İdare Ediyoruz. Ya Siz?</strong> <br />
            </div>
            <button
              className='col-2 btn btn-primary float-right my-auto'
              type='button'
            >
              Answer
            </button>
          </div>
          <br />
          <div className='row border container py-3'>
            <div className='col'>
              <strong className='row border'>Notification ID: 0003</strong> <br />
              <strong className='row border'>Name Surname: Onur C.</strong> <br />
              <strong className='row border'>Message: Yuvarlanıp Gidiyoruz Bakalım.</strong> <br />
            </div>
            <button
              className='col-2 btn btn-primary float-right my-auto'
              type='button'
            >
              Answer
            </button>
          </div>
          <br />
          <div className='row border container py-3'>
            <div className='col'>
              <strong className='row border'>Notification ID: 0004</strong> <br />
              <strong className='row border'>Name Surname: Berak K.</strong> <br />
              <strong className='row border'>Message: Hadi Bakiyim :D</strong> <br />
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
