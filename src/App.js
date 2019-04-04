import React, { Component } from 'react';
// import Header from './components/Header';
// import MainContent from './components/MainContent';
// import Footer from './components/Footer';
import cats from './json/cats';
import ContactCard from "./components/ContactCard";


class App extends Component {
  render() {
    // return (
    //     <>
    //         {/*<Header/>*/}
    //         {/*<MainContent/>*/}
    //         {/*<Footer/>*/}
    //     </>
    // );

      return (
          <div className="contacts">
              <ContactCard contact={cats.wees}/>
              <ContactCard contact={cats.flu}/>
              <ContactCard contact={cats.destroyer}/>
              <ContactCard contact={cats.felix}/>
          </div>
      )
  }
}

export default App;
