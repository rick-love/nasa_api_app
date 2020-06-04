import React, { Component } from 'react';
import Navbar from './components/layout/Navbar';
import Images from './components/images/Images';
import axios from 'axios';

import './App.css';

class App extends Component {
  state = {
    images: [],
    loading: false,
  };

  async componentDidMount() {
    this.setState({
      loading: true,
    });

    const res = await axios.get('https://images-api.nasa.gov/search?q=spacex');
    console.log(res.data.collection.items[2].data[0]);

    this.setState({
      loading: false,
      images: res.data.collection.items,
    });

    console.log('did mont');
  }

  render() {

    return (
      <div className='App'>
        <Navbar />
        <div className='container'>
          <Images loading={this.state.loading} images={this.state.images} />
        </div>
      </div>
    );
  }
}

export default App;
