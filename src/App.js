import React, { Component } from 'react';
import Header from './components/Header';
import MainContent from './components/MainContent';
import Footer from './components/Footer';


class App extends Component {
  render() {
    return (
        <>
            <Header/>
            <MainContent/>
            <Footer/>
        </>
    );
  }
}

export default App;
