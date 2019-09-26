import React from 'react';
import s from '../../App.module.css';

const Counter = () => {
    return (
        <div className={s.boxCounter}>
            <h1>1</h1>
            <button>Add</button><button>Delete</button>
        </div>
    );
};

export default Counter;