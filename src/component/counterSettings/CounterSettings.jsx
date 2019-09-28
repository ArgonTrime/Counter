import React from 'react';
import s from '../../App.module.css';


const CounterSettings = (props) => {

    return (
        <div className={s.boxSettings}>
            <div>CounterSettings</div>
            <div><input type='number' min='0' max='100' onChange={props.setMax}/>Set maximum value</div>
            <div><input type='number' min='0' max='100' onChange={props.setStart}/>Set starting value</div>
            <button onClick={props.setSettings} className={s.setBtn}>Set settings</button>
        </div>
    );
};

export default CounterSettings;