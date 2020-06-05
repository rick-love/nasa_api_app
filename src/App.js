import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Images from './components/images/Images';
import Search from './components/images/Search';
import About from './components/pages/About';
import axios from 'axios';
import Alert from './components/layout/Alert';

import './App.css';

class App extends Component {
  state = {
    images: [],
    loading: false,
    alert: null,
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
    this.setState({ loading: true });
    const res = await axios.get(`https://images-api.nasa.gov/search?q=${text}`);
    this.setState({
      loading: false,
      images: res.data.collection.items,
    });

    console.log(res.data.collection.items[2].data[0]);
    console.log(text);
  };
  // Clear Images
  clearImages = () => this.setState({ images: [], loading: false });

  setAlert = (msg, type) => {
    this.setState({ alert: { msg, type } });

    setTimeout(() => this.setState({ alert: null }), 3500);
  };
  render() {
    const { images, loading } = this.state;

    return (
      <Router>
        <div className='App'>
          <Navbar />
          <div className='container'>
            <Alert alert={this.state.alert} />
            <Switch>
              <Route exact path='/' render={props => (<Fragment>
                <Search
                  searchImages={this.searchImages}
                  clearImages={this.clearImages}
                  showClear={images.length > 0 ? true : false}
                  setAlert={this.setAlert}
                />
                <Images loading={loading} images={images} />
              </Fragment>)} />
              <Route exact path='/about' component={About} />
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
