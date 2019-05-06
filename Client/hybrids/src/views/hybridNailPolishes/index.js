import React, { Component } from 'react'
import NailPolish from '../../components/nailPolish';

import './index.css'
export default class HybridNailPolishes extends Component {
    constructor(props) {
        super(props);
        this.state = { nailPolishes: [] }
    }

    componentDidMount() {

        fetch('https://localhost:44326/api/inspiration')
            .then(resp => resp.json())
            .then(resp => {
                this.setState({ nailPolishes: resp })
            })
    }

    render() {
        if (this.state.nailPolishes.length === 0) { return "Loading..."; }

        var nailPolishesList = this.state.nailPolishes.map(item => {
            return <NailPolish image={item.image} name={item.name} company={item.company} />
        });

        return (
            <div id="list">
                {nailPolishesList}
            </div>
        )

    }
}
