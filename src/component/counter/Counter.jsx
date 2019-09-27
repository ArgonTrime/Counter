import React from 'react';
import s from '../../App.module.css';

const Counter = (props) => {
    return (
        <div className={s.boxCounter}>
            <p>{props.errorMessage}</p>
            <h1>{props.number}</h1>
            <button onClick={props.addNumber}>Add</button><button onClick={props.deleteNumber}>Delete</button>
        </div>
    );
};

export default Counter;