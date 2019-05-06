import React, { Component } from 'react';

import './index.css';

export default class Inspiartion extends Component {
    render() {
        return (
            <div id='inspiration'>
                <div><img src={this.props.image} alt='inpiration' /></div>
                <div>{this.props.colorName}</div>
            </div>
        )
    }
}
