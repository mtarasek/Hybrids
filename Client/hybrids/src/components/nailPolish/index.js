import React, { Component } from 'react';

import './index.css';

export default class NailPolish extends Component {
    render() {
        return (
            <div id='nailPolish'>
                <div><img src={this.props.image} alt='hybrid' /></div>
                <div>{this.props.name}</div>
                <div>{this.props.company}</div>
            </div>
        )
    }
}
