import React, { Component } from 'react';
// import Header from './components/Header';
// import Greeting from './components/Greeting';
// import cats from './json/cats';
// import ContactCard from "./components/ContactCard";
import ChildComponent from './components/ChildComponent';
class App extends Component {
    // constructor(){
    //    super()
    //     this.state = {
    //         answer: "YES"
    //     }
    // }
    state = {
        answer: "YES"
    };
  render() {
        console.log(this.state.answer);
    return (
        <>
            <h1>Is state important to know? {this.state.answer}</h1>
            <button>Click</button>
            <ChildComponent answer={this.state.answer}/>
        </>
    );
  }
}

export default App;
