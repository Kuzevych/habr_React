import React, {Component} from "react"

const App = () => {
        const handleClick = () =>{
            console.log('Yes')
        };

        return (
            <div style={{marginLeft:'100px', marginTop:'30px'}}>
                <img onFocus={()=>console.log('YEEEES')} src='https://www.fillmurray.com/200/100'/>
                <br />
                <br />
                <button onMouseUp={handleClick}>Click me</button>
            </div>
        )
}

export default App