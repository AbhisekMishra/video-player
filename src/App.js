import React, { Component } from 'react';
import './App.css';
import Header from './components/header';
import SearchBar from './components/search-bar';
import Video from './components/video';

class App extends Component {
  constructor() {
    super();
    this.state = {
      link: '',
    };
  }
  setLink = link => this.setState({link});
  render() {
    const { link } = this.state;
    return (
      <div className="App">
        <Header />
        <SearchBar setLink={this.setLink} />
        <Video link={link} />
      </div>
    );
  }
}

export default App;
