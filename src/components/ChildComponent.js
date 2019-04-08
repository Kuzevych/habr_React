import React from 'react';

const ChildComponent = (props) => {
    return(
        <div>
            <h1>Answer from state is ---- "{props.answer}"</h1>
        </div>
    )
};

export default ChildComponent;