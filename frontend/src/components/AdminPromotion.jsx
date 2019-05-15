import React from 'react';

export class AdminPromotion extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <button
          type='button'
          onClick={() => this.addName(this.state.inputValue)}
        >
          save
        </button>
        <button
          type='button'
          onClick={() => this.deleteName(this.state.inputValue)}
        >
          delete
        </button>
      </div>
    );
  }
}
