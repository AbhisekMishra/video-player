import React, { Component } from 'react';
import './App.css';
import Header from './components/header';
import SearchBar from './components/search-bar';

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
        <SearchBar link={link} setLink={this.setLink} />
      </div>
    );
  }
}

export default App;
