import React from 'react';
import './Input.css'





const ImpitPrice = (props) => {




    return (
        <div className='input-space'>
            <p>
                Input/text(focus)
             </p>
            <div className='input-currency' >
                <input onChange={props.change} type='number' />
                <h2>AMD={props.result} </h2>
            </div>
        </div>
    );
}

export default ImpitPrice;