import React from 'react';

const Item = (props) => {

    return (
        <div className='item'>
            <input onChange={()=>props.handleChange(props.item)} type='checkbox' checked={props.item.status}/>
            <p>{props.item.text}</p>
        </div>
    )
}

export default Item;