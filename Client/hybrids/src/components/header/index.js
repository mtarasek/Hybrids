import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

import './index.css';

export default class Header extends Component {
    render() {
        return (
            <div id="header">
                <h1 id="title">Wszystko o lakierach hybrydowych</h1>
                <nav id="navigation">
                    <li><NavLink exact activeClassName="selected" to="/">Strona Główna</NavLink></li>
                    <li><NavLink activeClassName="selected" to="/hybridNailPolishes">Lakiery hybrydowe</NavLink></li>
                    <li><NavLink activeClassName="selected" to="/accessories">Akcesoria</NavLink></li>
                    <li><NavLink activeClassName="selected" to="/inspirations">Inspiracje</NavLink></li>
                    <li><NavLink activeClassName="selected" to="/hybridStepByStep">Hybryda krok po kroku</NavLink></li>
                </nav>
            </div>
        )
    }
}
