import React from 'react';
import s from './App.module.css';
import Counter from "./component/counter/Counter";
import CounterSettings from "./component/counterSettings/CounterSettings";
import Error from "./component/error/Error";

class App extends React.Component {

    state = {
        number: 0,
        maxLimit: 3,
        maxLimitInput: null,
        startCountInput: null,
        lowLimit: -3,
        errorMessage: ''
    };

    /* metods for Counter, Error*/
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

    returnCount = () => {
        this.setState({
            errorMessage: ''
        })
    };


    /* metods for counterSettings*/
    setSettings = () => {
        if (this.state.maxLimitInput !== null) {
            this.setState({
                maxLimit: this.state.maxLimitInput,
                maxLimitInput: null,
            })
        }
        if (this.state.startCountInput !== null) {
            this.setState({
                number: this.state.startCountInput,
                startCountInput: null
            })
        }
    };
    setMax = (e) => {
        this.setState({
            maxLimitInput: e.target.value
        })
    };
    setStart = (e) => {
        this.setState({
            startCountInput: e.target.value
        })
    };


    render() {
        return (
            <div className={s.container}>
                {this.state.errorMessage === ''
                ? <Counter number={this.state.number}
                    addNumber={this.addNumber}
                    deleteNumber={this.deleteNumber} />
                    : <Error errorMessage={this.state.errorMessage}
                             returnCount={this.returnCount}
                             number={this.state.number}/>}

                <CounterSettings setSettings={this.setSettings} setMax={this.setMax} setStart={this.setStart}/>
            </div>
        );
    };
}
export default App;