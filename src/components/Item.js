import React from 'react';

const Item = (props) => {
    return (
        <div>
            <input type='checkbox' checked={props.checks} onChange={()=>props.toggleStatus(props.checks)}/>
            <button onClick={props.deleteLastFromArray}>Click</button>
        </div>
    )
}

export default Item;