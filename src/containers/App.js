import React, {Component} from 'react';
import GameList from '../components/GameList';

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            games: []
        }
    }

    onNumberClick() {
        this.setState({games:this.state.games.concat([{gameType: 'number',id:this.state.games.length+1}])});
    }

    onWordClick() {
        console.log('word game');
    }

    render() {
        return (
            <div className="app">
                <h1>Game Lobby</h1>
                <div className="game-buttons">
                    <button className="number-button" onClick={this.onNumberClick.bind(this)}>Create Number Game</button>
                    <button className="word-button" onClick={this.onWordClick.bind(this)}>Create Word Game</button>
                </div>
                <div className="game-list">
                    <GameList games ={this.state.games}/>
                </div>
            </div>
        )
    }
}

export default App;