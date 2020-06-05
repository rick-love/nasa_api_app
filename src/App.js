import React, { Component } from 'react';
import Navbar from './components/layout/Navbar';
import Images from './components/images/Images';
import Search from './components/images/Search';
import axios from 'axios';

import './App.css';

class App extends Component {
  state = {
    images: [],
    loading: false,
  };

  // async componentDidMount() {
  //   // console.log('Nasa Secret: ' + process.env.REACT_APP_NASA_SECRET);
  //   // const res2 = await axios.get(
  //   //   `https://api.nasa.gov/planetary/apod?api_key=${process.env.REACT_APP_NASA_SECRET}`
  //   // );
  //   // console.log(res2)

  //   this.setState({
  //     loading: true,
  //   });

  //   const res = await axios.get('https://images-api.nasa.gov/search?q=spacex');
  //   // console.log(res.data.collection.items[2].data[0]);

  //   this.setState({
  //     loading: false,
  //     images: res.data.collection.items,
  //   });
  // }

  // Search Nasa Images
  searchImages = async (text) => {
    this.setState(
      { loading: true }
    )
    const res = await axios.get(`https://images-api.nasa.gov/search?q=${text}`);
    this.setState({
      loading: false,
      images: res.data.collection.items,
    });

    console.log(res.data.collection.items[2].data[0]);
    console.log(text);
  };

  render() {
    return (
      <div className='App'>
        <Navbar />
        <div className='container'>
          <Search searchImages={this.searchImages} />
          <Images loading={this.state.loading} images={this.state.images} />
        </div>
      </div>
    );
  }
}

export default App;
