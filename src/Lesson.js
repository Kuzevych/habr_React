import React, {Component} from 'react';
import Conditional from './components/Conditional'
class Lesson extends Component {
    constructor(){
        super()
        this.state = {
            isLoading: true
        }
    }
       componentDidMount() {
            setTimeout(()=>{
                this.setState({
                        isLoading: false
                })
            },4000)
       }


    render() {

        return (
            <div>
                {
                    this.state.isLoading ?
                        <h1>Loading....</h1>:
                        <Conditional />
                }
            </div>
        );
    }
}
export default Lesson;