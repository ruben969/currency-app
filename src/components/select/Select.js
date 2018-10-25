import React from 'react';
import './Select.css'

const chooseCurrency = (props) => {
    return (
        <div className='currency-part'>
            <div className='heder'>
                Convert AMD to:
         </div>
            <div className='currency'>
              <p>   Select/Select </p> 
                <select onChange={props.choose} className='selct-currency'>
                    <option value='RUB' >RUB</option>
                    <option value='USD' >USD</option>
                    <option value='GBP' >GBP</option>
                    <option value='EUR' >EUR</option>
                </select>
                <p>(1   {Object.keys(props.sum)[0] } = { props.sum[Object.keys(props.sum)[0]] } )</p> 
            </div>
        </div>
    );
}

export default chooseCurrency;