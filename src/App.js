import React from 'react';
import s from './App.module.css';
import Counter from "./component/counter/Counter";
import CounterSettings from "./component/counterSettings/CounterSettings";
import Error from "./component/error/Error";

class App extends React.Component {

    state = {
        number: 0,
        maxLimit: 5,
        maxLimitInput: null,
        startCountInput: null,
        lowLimit: 0,
        errorMessage: ''
    };

    /* metods for Counter, Error*/
    addNumber = () => {
        if (this.state.number < this.state.maxLimit) {
            this.setState({
                number: ++this.state.number,
                errorMessage: ''
            })
        } else {
            this.setState({
                errorMessage: `Max limit count ${this.state.maxLimit}`
            })
        }
    };
    resetNumber = () => {
        if (this.state.startCountInput !== null) {
            this.setState({
                number: this.state.startCountInput
            })
        } else {
            this.setState({
                number: 0
            })
        }
    };

    returnCount = () => {
        this.setState({
            errorMessage: '',
            number: this.state.number
        })
    };


    /* metods for counterSettings*/
    setSettings = () => {
        if (this.state.maxLimitInput > this.state.startCountInput) {
            if (this.state.maxLimitInput !== null) {
                this.setState({
                    maxLimit: this.state.maxLimitInput,
                })
            }
        } else {
            this.setState({
                errorMessage: 'Set correct maximum value'
            })
        }

        if (this.state.startCountInput < this.state.maxLimitInput) {
            if (this.state.startCountInput !== null) {
                this.setState({
                    number: this.state.startCountInput,
                })
            }
        } else {
            this.setState({
                errorMessage: 'Set correct start value'
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
                    resetNumber={this.resetNumber}/>
                    : <Error errorMessage={this.state.errorMessage}
                             returnCount={this.returnCount}
                             number={this.state.number}/>}

                <CounterSettings setSettings={this.setSettings}
                                 setMax={this.setMax}
                                 setStart={this.setStart}/>
            </div>
        );
    };
}
export default App;