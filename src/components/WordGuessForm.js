import React,{Component} from 'react'

class WordGuessForm extends Component {

    constructor(props){
        super(props);
        this.state = {
            guess:''
        }
    }

    handleEnterPress(e) {
        if (e.key === 'Enter') {
            return true;
        } else return false;
    }

    isString(string) {
        return isNaN(string);
    }

    onSubmit(event) {
        if (this.handleEnterPress(event)) {
            this.props.onSubmit({guess: this.state.guess});
            this.setState({guess: ''});
        }
    }

    onChange(event) {
        this.isString(event.target.value) ? this.setState({guess: event.target.value}) : '';
    }

    render() {
        return (
            <div className="guessInput">
                <input
                    type="text"
                    placeholder="make a guess"
                    value={this.state.guess}
                    onChange={this.onChange.bind(this)}
                    onKeyUp={this.onSubmit.bind(this)}
                />
            </div>
        );
    }

}

export default WordGuessForm;