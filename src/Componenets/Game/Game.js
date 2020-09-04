import React, { Component } from "react"

import "./Game.scss"

class Game extends Component {
    constructor() {
        super()

        this.state = {
            spaces: [],
            deadBlackCheckers: [],
            deadRedCheckers: []
        }
    }

    render() {
        return (
            <div className="game">
                <p>Game</p>
            </div>
        )
    }
}

export default Game