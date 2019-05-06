import React, { Component } from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';

import './index.css';

import Home from './views/home';
import Accessories from './views/accessories';
import HybridNailPolishes from './views/hybridNailPolishes';
import Inspirations from './views/inspirations';
import HybridStepByStep from './views/hybridStepByStep';
import Header from './components/header';

const App = () => {
    return (
        <BrowserRouter>
            <div>
                <Header />
                <Route path='/' exact component={Home} />
                <Route path='/hybridNailPolishes' component={HybridNailPolishes} />
                <Route path='/accessories' component={Accessories} />
                <Route path='/inspirations' component={Inspirations} />
                <Route path='/hybridStepByStep' component={HybridStepByStep} />
            </div>
        </BrowserRouter>

    )
}

export default App;