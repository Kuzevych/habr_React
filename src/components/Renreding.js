import React, {Component} from 'react';


class Renreding extends Component {
    constructor(){
        super()
        this.state = {
            isIn: false
        }
    }
    changeLog = () => {
        this.setState(prevState=> {
            return {
                isIn: !prevState.isIn
            }
            }
        )
    }
    render() {
        return (
            <div>
                {
                    this.state.isIn ?
                        <h1>LOG IN</h1>:
                        <h1>LOG OUT</h1>
                }
                <button onClick={this.changeLog}>
                    {
                        this.state.isIn?
                            <p>Log Out</p> :
                            <p>Log IN</p>
                    }
                </button>
            </div>
        );
    }
}


export default Renreding;