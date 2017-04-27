import React, {Component} from 'react';
import PropTypes from 'prop-types';


class WordGuessForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            guess: ''
        };
    }

    onSubmit(event) {
        if (event.key === 'Enter' && this.state.guess.length>0) {
            this.props.onSubmit(this.state.guess);
            this.setState({guess: ''});
        }
    }

    onChange(event) {
        this.setState({guess: event.target.value});
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

WordGuessForm.propTypes = {
    onSubmit: PropTypes.func.isRequired
};


export default WordGuessForm;
