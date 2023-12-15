import React, { Component } from 'react';
import loading from '../images/loadingcat.gif'

export default class Spinner extends Component {
  render() {
    return (
      <div className='SpinnerDiv text-center my-2'>
        <img src={loading} alt="Spinner" width={"200px"}/>
      </div>
    );
  }
}
