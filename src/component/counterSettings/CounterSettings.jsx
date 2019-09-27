import React from 'react';
import s from '../../App.module.css';


const CounterSettings = () => {
    return (
        <div className={s.boxSettings}>
            <div>CounterSettings</div>
            <div><input type='number'/>Set maximum value</div>
            <div><input type='number'/>Set starting value</div>
            <button className={s.setBtn}>Set settings</button>
        </div>
    );
};

export default CounterSettings;