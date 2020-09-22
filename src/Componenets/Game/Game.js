import React, { Component } from "react"
import axios from "axios"

import Board from "../Board/Board"
import Checker from "../Checker/Checker"
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
            alert("Error getting Spaces")
        }
    }

    updateSpaces = async (spaces, checker, index) => {
        let deadBlackCheckers = this.state.deadBlackCheckers
        let deadRedCheckers = this.state.deadRedCheckers

        if(checker) {
            if(checker.className === "black_checker") {
                deadBlackCheckers.push(checker)
            }
            else {
                deadRedCheckers.push(checker)
            }
        }

        if(index) {
            spaces[index].hasChecker = {}
        }

        this.setState({
            spaces,
            deadBlackCheckers,
            deadRedCheckers
        })
    }

    checkDead = async () => {
        let spacesRes
        if(this.state.deadBlackCheckers.length === 12 || this.state.deadRedCheckers.length === 12) {
            if(this.state.deadBlackCheckers.length === 12) {
                await alert("Congratulations red checkers wins!!!")

                spacesRes = await axios.get("/api/get/spaces")

                this.setState({
                    spaces: spacesRes.data,
                    deadBlackCheckers: [],
                    deadRedCheckers: []
                })
            }
            else {
                await alert("Congratulations black checkers wins!!!")

                spacesRes = await axios.get("/api/get/spaces")

                this.setState({
                    spaces: spacesRes.data,
                    deadBlackCheckers: [],
                    deadRedCheckers: []
                })
            }
        }
    }

    render() {
        let deadBlackCheckers = this.state.deadBlackCheckers.map((checker, i) => {
            return (
                <Checker key={i} checker={checker} />
            )
        })
        let deadRedCheckers = this.state.deadRedCheckers.map((checker, i) => {
            return (
                <Checker key={i} checker={checker} />
            )
        })
        return (
            <div className="game">
                <div className="dead_pieces_container">
                    {deadBlackCheckers}
                </div>
                <Board spaces={this.state.spaces} updateSpaces={this.updateSpaces} checkDead={this.checkDead} />
                <div className="dead_pieces_container">
                    {deadRedCheckers}
                </div>
            </div>
        )
    }
}

export default Game