import React from 'react';

const Button = (props) => {
    return (
        <div className='btn'>
            <button onClick={props.click}>
                {props.label}
            </button>
        </div>
    )
}

export default Button;
