import React from 'react';
import s from '../../App.module.css';

const Counter = (props) => {
    return (
        <div className={s.boxCounter}>
            <h1>{props.number}</h1>
            <button onClick={props.addNumber}
                    className={s.addBtn}>Set</button>

            <button onClick={props.resetNumber} className={s.deleteBtn}>Reset</button>
        </div>
    );
};

export default Counter;