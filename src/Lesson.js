import React, {Component} from 'react';

class Lesson extends Component {
    constructor(){
        super()
        this.state = {
            exchange: {}
        }
    }
        componentDidMount(){
           fetch('https://api.exchangeratesapi.io/latest').then(response=>response.json())
               .then(data=>{
                   this.setState(prevState=>{
                       return {
                           exchange: data
                       }
                   })
               })
        }
        componentDidUpdate(prevProps, prevState, snapshot) {
        console.log(snapshot)
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
       // console.log(prevState)
        return prevState
    }

    render() {
        return (
            <div>
                <h1 style={{textAlign:'center'}}>{this.state.exchange.base}</h1>
            </div>
        );
    }
}
export default Lesson;