import React, {Component} from "react"
import '../src/App.css';
import Item from "./components/Item";


class App extends Component{
    constructor(){
        super()
        this.state = {
            completed: true,
            array: []
        };
    }

    changeStatus = (completed) => {
        this.setState( prevState => {
            const newArr = [...prevState.array,!completed]
            return {
                completed: !prevState.completed,
                array: newArr
            }
        })
    }

    deleteLastFromArray =() => {
        console.log('hey')
        this.setState(prevState => {
            return {
                array: [...prevState.array,prevState.array[5]]
            }
        })
    }

    render(){
        return (
            <Item toggleStatus={this.changeStatus}  checks={this.state.completed} deleteLastFromArray={this.deleteLastFromArray}/>
            )
    }
}

export default App;