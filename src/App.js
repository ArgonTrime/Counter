import React from 'react';
import s from './App.module.css';
import Counter from "./component/counter/Counter";
import CounterSettings from "./component/counterSettings/CounterSettings";

const App =() => {
  return (
    <div className={s.container}>
      <Counter/>
      <CounterSettings/>
    </div>
  );
};

export default App;
