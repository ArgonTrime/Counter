import React from 'react';
import s from './App.module.css';
import Counter from "./component/counter/Counter";
import CounterSettings from "./component/counterSettings/CounterSettings";

class App extends React.Component {

    state = {
        number: 0,
        maxLimit: 3,
        lowLimit: -3,
        startCount: null,
        errorMessage: ''
    };

    addNumber = () => {
        if (this.state.number < this.state.maxLimit) {
            this.setState({
                number: this.state.number + 1,
                errorMessage: ''
            })
        } else {
            this.setState({
                errorMessage: 'Max limit count'
            })
        }
    };
    deleteNumber = () => {
        if (this.state.number > this.state.lowLimit) {
            this.setState({
                number: this.state.number - 1,
                errorMessage: ''
            })
        } else {
            this.setState({
                errorMessage: 'Max low limit count'
            })
        }
    };

    render() {
        return (
            <div className={s.container}>
                <Counter number={this.state.number}
                         addNumber={this.addNumber}
                         deleteNumber={this.deleteNumber} errorMessage={this.state.errorMessage}/>
                <CounterSettings/>
            </div>
        );
    };
}
export default App;