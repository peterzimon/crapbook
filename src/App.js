import React, { Component } from 'react';
import './App.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            text: localStorage.getItem(`savedText`)
        };

        this.changeText = this.changeText.bind(this)
        this.saveToLocal = this.saveToLocal.bind(this)
    }

    changeText(e) {
        this.setState({
            text: e.target.value
        })
        this.saveToLocal()
    }

    saveToLocal() {
        const text = this.state.text;
        localStorage.setItem(`savedText`, text);
    }

    componentDidMount() {
        this.nameInput.focus()
    }

    componentWillUnmount() {
        this.saveToLocal()
    }

    render() {
        return (
            <>
                {/* 
                // For debugging
                <h4>{ this.state.text }</h4> 
                */}
                <form className="container">
                    <textarea 
                        ref={(input) => { this.nameInput = input; }}
                        onChange={ this.changeText } 
                        onKeyDown={ this.changeText } 
                        value={ this.state.text } />
                </form>
            </>
        );
    }
}

export default App;
