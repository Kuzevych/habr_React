import React, {Component} from "react"
import '../src/App.css';
class App extends Component{
    constructor(){
        super()
        this.state = {
            count: 0
        }
        this.handleClick = this.handleClick.bind(this)
        this.minHandleClick = this.minHandleClick.bind(this)
    }
    handleClick() {
        this.setState(prevState => {
            return {
                count: prevState.count + 1
            }
        })
    }
    minHandleClick() {
        this.setState(prevState => {
            return {
                count: prevState.count - 1
            }
        })
    }
    render(){
        return (
                <div style={this.styles}>
                    <h3>{this.state.count}</h3>
                    <br/>
                    <button onClick={this.handleClick}>+1</button>
                    <button onClick={this.minHandleClick}>-1</button>
                </div>
            )
    }
}

export default App;