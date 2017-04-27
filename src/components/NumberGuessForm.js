import React, {Component} from 'react';
import PropTypes from 'prop-types';


class GuessForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            guess: ''
        };
    }

    isNumber(num) {
        return !isNaN(num);
    }

    onSubmit(event) {
        if (event.key === 'Enter' && this.state.guess.length == 1) {
            this.props.onSubmit(parseInt(this.state.guess));
            this.setState({guess: ''});
        }
    }

    onChange(event) {
        this.isNumber(event.target.value) ? this.setState({guess: event.target.value}) : null;
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

GuessForm.propTypes = {
    onSubmit: PropTypes.func.isRequired
};

export default GuessForm;
