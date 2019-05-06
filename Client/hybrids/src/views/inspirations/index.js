import React, { Component } from 'react'
import Inspiartion from '../../components/inspiration';
import './index.css';

export default class Inspirations extends Component {
  constructor(props) {
    super(props);
    this.state = { inspirations: [] }
  }

  componentDidMount() {
    fetch('https://localhost:44326/api/inspiration')
      .then(resp => resp.json())
      .then(resp => {
        this.setState({ inspirations: resp })
      })
  }

  render() {
    if (this.state.inspirations.length === 0) { return "Loading..."; }

    var inspirationsList = this.state.inspirations.map(item => {
      return <Inspiartion key={"inspiration-" + item.id} image={item.image} colorName={item.colorName} />
    })

    return (
      <div id='inspirationsList'>
        {inspirationsList}
      </div>
    )
  }
}
