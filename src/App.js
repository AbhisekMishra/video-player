import React, { Component } from 'react';
import './App.css';
import Header from './components/header';
import SearchBar from './components/search-bar';
import Video from './components/video';
import HistoryList from './components/history-list';

class App extends Component {
  constructor() {
    super();
    this.state = {
      link: '',
      historyArr: [],
      reRenderVideo: false,
    };
  }
  setLink = link => this.setState({
    link, reRenderVideo: false,
  });

  renderVideo = () => {
    const { link } = this.state;
    this.setState((prevState) => {
      return {historyArr: [link].concat(prevState.historyArr), reRenderVideo: true};
    });
  }

  setVideoLink = link => {
    console.log('link in setVideoLink', link);
    this.setLink(link);
    this.renderVideo();
  }

  render() {
    const { link, historyArr, reRenderVideo } = this.state;
    return (
      <div className="App">
        <Header />
        <SearchBar setLink={this.setLink} renderVideo={this.renderVideo} link={link}/>
        <Video link={link} reRenderVideo={reRenderVideo} />
        <HistoryList historyArr={historyArr} setVideoLink={this.setVideoLink} />
      </div>
    );
  }
}

export default App;
