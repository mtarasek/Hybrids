import React, { Component } from 'react'
import NailPolish from '../../components/nailPolish';

import './index.css'
import { GetAllNailPolishes } from '../../services/hybridservice';

export default class HybridNailPolishes extends Component {
    constructor(props) {
        super(props);
        this.state = { nailPolishes: [] }
    }

    componentDidMount() {
        GetAllNailPolishes()
            .then(resp => {
                this.setState({ nailPolishes: resp })
            })
    }

    render() {
        if (this.state.nailPolishes.length === 0) { return "Loading..."; }

        var nailPolishesList = this.state.nailPolishes.map(item => {
            return <NailPolish key={"nailPolish-" + item.id} image={item.image} name={item.colorName} company={item.companyName} />
        });

        return (
            <div id="list">
                {nailPolishesList}
            </div>
        )

    }
}
