import React, {Component} from 'react';
import {
    CONNECTED,
    CONNECTING
} from '../constants';

class ConnectionComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name: ''
        };
    }

    onChange(event) {
        this.setState({name: event.target.value});
    }

    render() {
        if (this.props.status === CONNECTING) {
            return (
                <div className="center">
                    <p>Connecting...</p>
                </div>
            );
        } else if (this.props.status === CONNECTED) {
            return (
                <div className="center">
                    <button onClick={() => {
                        this.props.onDisconnectClick();
                        this.setState({name: ''});
                    }}>Disconnect
                    </button>
                </div>
            );
        } else if (this.props.disconnectReason) {
            return (
                <div>
                    <div>
                        <p> Something went wrong. Error: {`${this.props.disconnectReason}`}</p>
                    </div>
                    <div className="center">
                        <input
                            type="text"
                            placeholder="type your name"
                            value={this.state.name}
                            onChange={this.onChange.bind(this)}>
                        </input>
                        <button onClick={() => {
                            this.props.onConnectClick(this.state.name);
                            this.setState({name: ''});
                        }}>Connect
                        </button>
                    </div>
                </div>
            );
        } else {
            return (
                <div className="center">
                    <input
                        type="text"
                        placeholder="type your name"
                        value={this.state.name}
                        onChange={this.onChange.bind(this)}>
                    </input>
                    <button onClick={() => {
                        this.props.onConnectClick(this.state.name);
                        this.setState({name: ''});
                    }}>Connect
                    </button>
                </div>
            );
        }
    }
}

export default ConnectionComponent;
