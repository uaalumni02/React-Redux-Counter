import React from 'react';

const CounterOutput = (props) => {
    return (
        <div>
            <p> Current value is { props.cnt } </p>
        </div>
    );
}

export default CounterOutput;
