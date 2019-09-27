import React from 'react';
import s from './App.module.css';
import Counter from "./component/counter/Counter";
import CounterSettings from "./component/counterSettings/CounterSettings";
import Error from "./component/error/Error";

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

    returnCount = () => {
        this.setState({
            errorMessage: ''
        })
    };


    /* metods for counterSettings*/
    setSettings = () => {

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

                <CounterSettings/>
            </div>
        );
    };
}
export default App;