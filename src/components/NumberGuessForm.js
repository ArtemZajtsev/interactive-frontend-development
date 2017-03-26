import React, {Component} from 'react';

class GuessForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            guess: ''
        };
    }

    handleEnterPress(e) {
        if (e.key === 'Enter') {
            return true;
        } else return false;
    }

    isNumber(num) {
        return !isNaN(num);
    }

    onSubmit(event) {
        if (this.handleEnterPress(event) && this.state.guess.length == 1) {
            this.props.onSubmit({guess: parseInt(this.state.guess)});
            this.setState({guess: ''});
        }
    }

    onChange(event) {
        this.isNumber(event.target.value) ? this.setState({guess: event.target.value}) : '';
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
    onSubmit: React.PropTypes.func.isRequired
};

export default GuessForm;
