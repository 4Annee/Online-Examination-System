import React, { Component } from 'react';
import Pdf from './Reg1.pdf';

class Download extends Component {

  render() {

    return (
        <div className = "pdf">
          <a href = {Pdf} target = "_blank" rel="noreferrer">Examen</a>
        </div>
    );

  }
}

export default Download;