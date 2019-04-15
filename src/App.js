import React, {Component} from "react"
import '../src/App.css';
import Item from "./components/Item";
import Count from './components/Count';
import item from './json/items';

class App extends Component{
    constructor(){
        super()
        this.state = {
            completed: item,
            count: 0
        };
    }

    handleChange = (block) => {
        //console.log(block.status)
        this.setState(prevState => {
            const updateItem = prevState.completed.map(item => {
                if(item.id===block.id){
                    item.status=!item.status
                }
                return item
            })

            return {
                completed: updateItem,
                count: prevState.count+1
            }
        })
    }

    render(){
        return (
            <div className='main'>
                <div>
                    {this.state.completed.map(item =><Item key={item.id} item={item} handleChange={this.handleChange}/>)}
                </div>
                <div>
                    <Count count={this.state.count}/>
                </div>
            </div>
        )
    }
}
export default App;