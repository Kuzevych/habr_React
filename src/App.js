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
            const sortArray = prevState.array.sort((a,b)=>b-1)
            const newArr = [...sortArray,sortArray.length]
            return {
                completed: !prevState.completed,
                array: newArr
            }
        })
    }

    deleteLastFromArray =() => {
        this.setState(prevState => {
            return {
                array: [...prevState.array,prevState.array.length]
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