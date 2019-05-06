import React, { Component } from 'react';

import './index.css';

export default class HybridsForWho extends Component {
  render() {
    return (
      <div id="hybridForWho">
        <div><img src={this.props.image} alt="obrazek"/></div>
        <div>{this.props.text}</div>
      </div>
    )
  }
}



