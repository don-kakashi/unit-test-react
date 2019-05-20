import React, { Component } from 'react';
import Header from '../components/Header';
import Button from '../components/Button';
import Map from '../components/Map';
import mapChooser from '../mapChooser';
import Axios from 'axios';

export default class extends Component{
  constructor(props) {
    super(props)
    this.state = {
      shops: [],
      currentMap: 'none.png'
    }
  }

  async componentDidMount() {
    const { data: { shops }} = await Axios.get('/data/shops.json');
    this.setState({ shops });
  }

  chooseMap = e => {
    this.setState({
      currentMap: mapChooser(e.target.value)
    })
  }

  render () {
    const { location } = this.props;
    const { shops, currentMap } = this.state;
    return <>
      <Header />
      <div>
        { shops.map(({location}, idx) =>
          <Button key={idx} location={location} handleClick={this.chooseMap} /> 
        )}
      </div>
      <Map imageName={currentMap} location={location}/>
    </>
  }
}