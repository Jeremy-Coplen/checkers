import React, { Component } from "react"
import axios from "axios"

import Board from "../Board/Board"
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

    componentDidMount = async () => {
        try{
            let spacesRes = await axios.get("/api/get/spaces")

            this.setState({
                spaces: spacesRes.data
            })
        }
        catch(err) {
            console.log(err)
            alert("Error getting Spaces")
        }
    }

    render() {
        console.log(this.state)
        return (
            <div className="game">
                <div className="dead_pieces_container"></div>
                <Board spaces={this.state.spaces} />
                <div className="dead_pieces_container"></div>
            </div>
        )
    }
}

export default Game