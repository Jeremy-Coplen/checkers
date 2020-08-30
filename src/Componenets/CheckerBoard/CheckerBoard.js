import React, { Component } from "react"

import crown from "../../Images/crown.jpg"
import "./CheckerBoard.scss"

class CheckerBoard extends Component {
    constructor(props) {
        super(props)

        this.state = {
            checkers: [
                {
                    className: "black_checker",
                    currentLocation: "a_2",
                    status: "alive",
                    isKing: false,
                    possibleMoves: [
                        { up: true },
                        { upRight: false },
                        { downRight: false},
                        { upLeft: false},
                        { downLeft: false },
                        { down: false}
                    ]
                },
                {
                    className: "black_checker",
                    currentLocation: "b_1",
                    status: "alive",
                    isKing: false,
                    possibleMoves: [
                        { up: true },
                        { upRight: false },
                        { downRight: false},
                        { upLeft: false},
                        { downLeft: false },
                        { down: false}
                    ]
                },
                {
                    className: "black_checker",
                    currentLocation: "b_3",
                    status: "alive",
                    isKing: false,
                    possibleMoves: [
                        { up: true },
                        { upRight: false },
                        { downRight: false},
                        { upLeft: false},
                        { downLeft: false },
                        { down: false}
                    ]
                },
                {
                    className: "black_checker",
                    currentLocation: "c_2",
                    status: "alive",
                    isKing: false,
                    possibleMoves: [
                        { up: true },
                        { upRight: false },
                        { downRight: false},
                        { upLeft: false},
                        { downLeft: false },
                        { down: false}
                    ]
                },
                {
                    className: "black_checker",
                    currentLocation: "d_1",
                    status: "alive",
                    isKing: false,
                    possibleMoves: [
                        { up: true },
                        { upRight: false },
                        { downRight: false},
                        { upLeft: false},
                        { downLeft: false },
                        { down: false}
                    ]
                },
                {
                    className: "black_checker",
                    currentLocation: "d_3",
                    status: "alive",
                    isKing: false,
                    possibleMoves: [
                        { up: true },
                        { upRight: false },
                        { downRight: false},
                        { upLeft: false},
                        { downLeft: false },
                        { down: false}
                    ]
                },
                {
                    className: "black_checker",
                    currentLocation: "e_2",
                    status: "alive",
                    isKing: false,
                    possibleMoves: [
                        { up: true },
                        { upRight: false },
                        { downRight: false},
                        { upLeft: false},
                        { downLeft: false },
                        { down: false}
                    ]
                },
                {
                    className: "black_checker",
                    currentLocation: "f_1",
                    status: "alive",
                    isKing: false,
                    possibleMoves: [
                        { up: true },
                        { upRight: false },
                        { downRight: false},
                        { upLeft: false},
                        { downLeft: false },
                        { down: false}
                    ]
                },
                {
                    className: "black_checker",
                    currentLocation: "f_3",
                    status: "alive",
                    isKing: false,
                    possibleMoves: [
                        { up: true },
                        { upRight: false },
                        { downRight: false},
                        { upLeft: false},
                        { downLeft: false },
                        { down: false}
                    ]
                },
                {
                    className: "black_checker",
                    currentLocation: "g_2",
                    status: "alive",
                    isKing: false,
                    possibleMoves: [
                        { up: true },
                        { upRight: false },
                        { downRight: false},
                        { upLeft: false},
                        { downLeft: false },
                        { down: false}
                    ]
                },
                {
                    className: "black_checker",
                    currentLocation: "h_1",
                    status: "alive",
                    isKing: false,
                    possibleMoves: [
                        { up: true },
                        { upRight: false },
                        { downRight: false},
                        { upLeft: false},
                        { downLeft: false },
                        { down: false}
                    ]
                },
                {
                    className: "black_checker",
                    currentLocation: "h_3",
                    status: "alive",
                    isKing: false,
                    possibleMoves: [
                        { up: true },
                        { upRight: false },
                        { downRight: false},
                        { upLeft: false},
                        { downLeft: false },
                        { down: false}
                    ]
                },
                {
                    className: "red_checker",
                    currentLocation: "a_6",
                    status: "alive",
                    isKing: false,
                    possibleMoves: [
                        { up: true },
                        { upRight: false },
                        { downRight: false},
                        { upLeft: false},
                        { downLeft: false },
                        { down: false}
                    ]
                },
                {
                    className: "red_checker",
                    currentLocation: "a_8",
                    status: "alive",
                    isKing: false,
                    possibleMoves: [
                        { up: true },
                        { upRight: false },
                        { downRight: false},
                        { upLeft: false},
                        { downLeft: false },
                        { down: false}
                    ]
                },
                {
                    className: "red_checker",
                    currentLocation: "b_7",
                    status: "alive",
                    isKing: false,
                    possibleMoves: [
                        { up: true },
                        { upRight: false },
                        { downRight: false},
                        { upLeft: false},
                        { downLeft: false },
                        { down: false}
                    ]
                },
                {
                    className: "red_checker",
                    currentLocation: "c_6",
                    status: "alive",
                    isKing: false,
                    possibleMoves: [
                        { up: true },
                        { upRight: false },
                        { downRight: false},
                        { upLeft: false},
                        { downLeft: false },
                        { down: false}
                    ]
                },
                {
                    className: "red_checker",
                    currentLocation: "c_8",
                    status: "alive",
                    isKing: false,
                    possibleMoves: [
                        { up: true },
                        { upRight: false },
                        { downRight: false},
                        { upLeft: false},
                        { downLeft: false },
                        { down: false}
                    ]
                },
                {
                    className: "red_checker",
                    currentLocation: "d_7",
                    status: "alive",
                    isKing: false,
                    possibleMoves: [
                        { up: true },
                        { upRight: false },
                        { downRight: false},
                        { upLeft: false},
                        { downLeft: false },
                        { down: false}
                    ]
                },
                {
                    className: "red_checker",
                    currentLocation: "e_6",
                    status: "alive",
                    isKing: false,
                    possibleMoves: [
                        { up: true },
                        { upRight: false },
                        { downRight: false},
                        { upLeft: false},
                        { downLeft: false },
                        { down: false}
                    ]
                },
                {
                    className: "red_checker",
                    currentLocation: "e_8",
                    status: "alive",
                    isKing: false,
                    possibleMoves: [
                        { up: true },
                        { upRight: false },
                        { downRight: false},
                        { upLeft: false},
                        { downLeft: false },
                        { down: false}
                    ]
                },
                {
                    className: "red_checker",
                    currentLocation: "f_7",
                    status: "alive",
                    isKing: false,
                    possibleMoves: [
                        { up: true },
                        { upRight: false },
                        { downRight: false},
                        { upLeft: false},
                        { downLeft: false },
                        { down: false}
                    ]
                },
                {
                    className: "red_checker",
                    currentLocation: "g_6",
                    status: "alive",
                    isKing: false,
                    possibleMoves: [
                        { up: true },
                        { upRight: false },
                        { downRight: false},
                        { upLeft: false},
                        { downLeft: false },
                        { down: false}
                    ]
                },
                {
                    className: "red_checker",
                    currentLocation: "g_8",
                    status: "alive",
                    isKing: false,
                    possibleMoves: [
                        { up: true },
                        { upRight: false },
                        { downRight: false},
                        { upLeft: false},
                        { downLeft: false },
                        { down: false}
                    ]
                },
                {
                    className: "red_checker",
                    currentLocation: "h_7",
                    status: "alive",
                    isKing: false,
                    possibleMoves: [
                        { up: true },
                        { upRight: false },
                        { downRight: false},
                        { upLeft: false},
                        { downLeft: false },
                        { down: false}
                    ]
                }
            ]
        }
    }

    componentDidMount() {
        for(let i = 0; i < this.state.checkers.length; i++) {
            let space = document.getElementById(this.state.checkers[i].currentLocation)
            let checker = document.createElement("button")

            checker.value = `${this.state.checkers[i].currentLocation},${this.state.checkers[i].isKing},${this.state.checkers[i].className}`

            checker.classList.add(this.state.checkers[i].className)

            checker.id = `${this.state.checkers[i].currentLocation} btn`

            if(this.state.checkers[i].isKing) {
                let king = document.createElement("img")

                king.src = crown

                checker.appendChild(king)
            }

            checker.addEventListener("click", this.moveChecker)

            space.appendChild(checker)
        }
    }

    moveChecker = (e) => {
        let checkerInfo = e.target.value.split(",")
        let currentLocation = checkerInfo[0]
        let checkerType = checkerInfo[2]
        let locationInfo = currentLocation.split("_")

        let locationLetter = locationInfo[0]
        let locationNumber = locationInfo[1]
        let isKing = checkerInfo[1]

        let adjacentUp
        let diaUpRight
        let diaUpLeft
        let diaDownRight
        let diaDownLeft
        let adjacentDown
        let aaUp
        let aDiaUpRight
        let aDiaDownRight
        let aDiaUpLeft
        let aDiaDownLeft
        let aaDown

        let moves = []

        let killChecker

        let spacesMoved

        if(locationNumber === "1" && locationLetter === "a") {
            adjacentDown = document.getElementById(`${locationLetter}_${Number(locationNumber) + 1}`)
            diaDownRight = document.getElementById(`${String.fromCharCode(locationLetter.charCodeAt(0) + 1)}_${Number(locationNumber) + 1}`)
            aaDown = document.getElementById(`${locationLetter}_${Number(locationNumber) + 2}`)
            aDiaDownRight = document.getElementById(`${String.fromCharCode(locationLetter.charCodeAt(0) + 2)}_${Number(locationNumber) + 2}`)

            if(checkerType === "black_decker") {
                if(adjacentDown.children.length >= 1) {

                }
            }
            moves = [
                { up: false},
                { upRight: false },
                { downRight: false } ,
                { upLeft: false },
                { downLeft: false },
                { down: false }
            ]
        }
        else if(locationNumber === "1" && locationLetter === "h") {
            adjacentDown = document.getElementById(`${locationLetter}_${Number(locationNumber) + 1}`)
            diaDownLeft = document.getElementById(`${String.fromCharCode(locationLetter.charCodeAt(0) - 1)}_${Number(locationNumber) + 1}`)
            aaDown = document.getElementById(`${locationLetter}_${Number(locationNumber) + 2}`)
            aDiaDownLeft = document.getElementById(`${String.fromCharCode(locationLetter.charCodeAt(0) - 2)}_${Number(locationNumber) + 2}`)

            let moveDown
            let moveDownLeft
            
            if(checkerType === "black_checker") {
                if(adjacentDown.children.length >= 1) {
                    if(adjacentDown.children.item(0).className === "red_checker") {
                        if(aaDown.children.length >= 1) {
                            moveDown = false
                            killChecker = false
                        }
                        else {
                            moveDown = true
                            killChecker = true
                            spacesMoved = 2
                        }
                    }
                    else {
                        moveDown = false
                        killChecker = false
                    }
                }
                else {
                    moveDown = true
                    killChecker = false
                    spacesMoved = 1
                }

                if(diaDownLeft.children.length >= 1) {
                    if(adjacentDown.children.item(0).className === "red_checker") {
                        if(aDiaDownLeft.children.length >=1) {
                            moveDownLeft = false
                            killChecker = false
                        }
                        else {
                            moveDownLeft = true
                            killChecker = true
                            spacesMoved = 2
                        }
                    }
                    else {
                        moveDownLeft = false
                        killChecker = false
                    }
                }
                else {
                    moveDownLeft = true
                    killChecker = false
                    spacesMoved = 1
                }
            }
            else {
                if(adjacentDown.children.length >= 1) {
                    if(adjacentDown.children.item(0).className === "black_checker") {
                        if(aaDown.children.length >= 1) {
                            moveDown = false
                            killChecker = false
                        }
                        else {
                            moveDown = true
                            killChecker = true
                            spacesMoved = 2
                        }
                    }
                    else {
                        moveDown = false
                        killChecker = false
                    }
                }
                else {
                    moveDown = true
                    killChecker = false
                    spacesMoved = 1
                }

                if(diaDownLeft.children.length >= 1) {
                    if(diaDownLeft.children.item(0).className === "black_checker") {
                        if(aDiaDownLeft.children.length >= 1) {
                            moveDownLeft = false
                            killChecker = false
                        }
                        else {
                            moveDownLeft = true
                            killChecker = true
                            spacesMoved = 2
                        }
                    }
                    else {
                        moveDownLeft = false
                        killChecker = false
                    }
                }
                else {
                    moveDownLeft = true
                    killChecker = false
                    spacesMoved = 1
                }
            }

            moves = [
                { up: false},
                { upRight: false },
                { downRight: false } ,
                { upLeft: false },
                { downLeft: moveDownLeft },
                { down: moveDown }
            ]
        }
        else if(locationNumber === "8" && locationLetter === "a") {
            adjacentUp = document.getElementById(`${locationLetter}_${Number(locationNumber) - 1}`)
            diaUpRight = document.getElementById(`${String.fromCharCode(locationLetter.charCodeAt(0) + 1)}_${Number(locationNumber) - 1}`)
            aaUp = document.getElementById(`${locationLetter}_${Number(locationNumber) - 2}`)
            aDiaUpRight = document.getElementById(`${String.fromCharCode(locationLetter.charCodeAt(0) + 2)}_${Number(locationNumber) - 2}`)

            console.log(adjacentUp.children.length)
            console.log(diaUpRight.children.item(0).className)
        }
        else if(locationNumber === "8" && locationLetter === "h") {
            adjacentUp = document.getElementById(`${locationLetter}_${Number(locationNumber) - 1}`)
            diaUpLeft = document.getElementById(`${String.fromCharCode(locationLetter.charCodeAt(0) - 1)}_${Number(locationNumber) - 1}`)
            aaUp = document.getElementById(`${locationLetter}_${Number(locationNumber) - 2}`)
        }
        else if(locationNumber === "1") {
            adjacentDown = document.getElementById(`${locationLetter}_${Number(locationNumber) + 1}`)
            diaDownRight = document.getElementById(`${String.fromCharCode(locationLetter.charCodeAt(0) + 1)}_${Number(locationNumber) + 1}`)
            diaDownLeft = document.getElementById(`${String.fromCharCode(locationLetter.charCodeAt(0) - 1)}_${Number(locationNumber) + 1}`)
            aaDown = document.getElementById(`${locationLetter}_${Number(locationNumber) + 2}`)
            aDiaDownRight = document.getElementById(`${String.fromCharCode(locationLetter.charCodeAt(0) + 2)}_${Number(locationNumber) + 2}`)
            aDiaDownLeft = document.getElementById(`${String.fromCharCode(locationLetter.charCodeAt(0) - 2)}_${Number(locationNumber) + 2}`)

            if(checkerType === "black_decker") {
                
            }
            moves = [
                { up: false},
                { upRight: false },
                { downRight: true } ,
                { upLeft: false },
                { downLeft: true },
                { down: true }
            ]
        }
        else if(locationNumber === "8") {
            adjacentUp = document.getElementById(`${locationLetter}_${Number(locationNumber) - 1}`)
            diaUpRight = document.getElementById(`${String.fromCharCode(locationLetter.charCodeAt(0) + 1)}_${Number(locationNumber) - 1}`)
            diaUpLeft = document.getElementById(`${String.fromCharCode(locationLetter.charCodeAt(0) - 1)}_${Number(locationNumber) - 1}`)
            aaUp = document.getElementById(`${locationLetter}_${Number(locationNumber) - 2}`)
            aDiaUpRight = document.getElementById(`${String.fromCharCode(locationLetter.charCodeAt(0) + 2)}_${Number(locationNumber) - 2}`)
            aDiaUpLeft = document.getElementById(`${String.fromCharCode(locationLetter.charCodeAt(0) - 2)}_${Number(locationNumber) - 2}`)

            moves = [
                { up: true},
                { upRight: true },
                { downRight: false } ,
                { upLeft: true },
                { downLeft: false },
                { down: false }
            ]
        }
        else if(locationLetter === "a") {
            adjacentUp = document.getElementById(`${locationLetter}_${Number(locationNumber) - 1}`)
            adjacentDown = document.getElementById(`${locationLetter}_${Number(locationNumber) + 1}`)
            diaUpRight = document.getElementById(`${String.fromCharCode(locationLetter.charCodeAt(0) + 1)}_${Number(locationNumber) - 1}`)
            diaDownRight = document.getElementById(`${String.fromCharCode(locationLetter.charCodeAt(0) + 1)}_${Number(locationNumber) + 1}`)
            aaUp = document.getElementById(`${locationLetter}_${Number(locationNumber) - 2}`)
            aaDown = document.getElementById(`${locationLetter}_${Number(locationNumber) + 1}`)
            aDiaUpRight = document.getElementById(`${String.fromCharCode(locationLetter.charCodeAt(0) + 2)}_${Number(locationNumber) - 2}`)
            aDiaDownRight = document.getElementById(`${String.fromCharCode(locationLetter.charCodeAt(0) + 2)}_${Number(locationNumber) + 2}`)

            if(isKing === "true") {
                moves = [
                    { up: true},
                    { upRight: true },
                    { downRight: true } ,
                    { upLeft: false },
                    { downLeft: false },
                    { down: true }
                ]
            }
            else {
                if(checkerType === "black_checker") {
                    moves = [
                        { up: false},
                        { upRight: false },
                        { downRight: true } ,
                        { upLeft: false },
                        { downLeft: false },
                        { down: true }
                    ]
                }
                else {
                    moves = [
                        { up: true},
                        { upRight: true },
                        { downRight: false } ,
                        { upLeft: false },
                        { downLeft: false },
                        { down: false }
                    ]
                }
            }
        }
        else if (locationLetter === "h") {
            adjacentUp = document.getElementById(`${locationLetter}_${Number(locationNumber) - 1}`)
            adjacentDown = document.getElementById(`${locationLetter}_${Number(locationNumber) + 1}`)
            diaUpLeft = document.getElementById(`${String.fromCharCode(locationLetter.charCodeAt(0) - 1)}_${Number(locationNumber) - 1}`)
            diaDownLeft = document.getElementById(`${String.fromCharCode(locationLetter.charCodeAt(0) - 1)}_${Number(locationNumber) + 1}`)
            aaUp = document.getElementById(`${locationLetter}_${Number(locationNumber) - 2}`)
            aaDown = document.getElementById(`${locationLetter}_${Number(locationNumber) + 2}`)
            aDiaUpLeft = document.getElementById(`${String.fromCharCode(locationLetter.charCodeAt(0) - 2)}_${Number(locationNumber) - 2}`)
            aDiaDownLeft = document.getElementById(`${String.fromCharCode(locationLetter.charCodeAt(0) - 1)}_${Number(locationNumber) + 2}`)

            if(isKing === "true") {
                moves = [
                    { up: true},
                    { upRight: false },
                    { downRight: false } ,
                    { upLeft: true },
                    { downLeft: true },
                    { down: true }
                ]
            }
            else {
                if(checkerType === "black_checker") {
                    moves = [
                        { up: false},
                        { upRight: false },
                        { downRight: false } ,
                        { upLeft: false },
                        { downLeft: true },
                        { down: true }
                    ]
                }
                else {
                    moves = [
                        { up: true},
                        { upRight: false },
                        { downRight: false } ,
                        { upLeft: true },
                        { downLeft: false },
                        { down: false }
                    ]
                }
            }
        }
        else {
            adjacentUp = document.getElementById(`${locationLetter}_${Number(locationNumber) - 1}`)
            adjacentDown = document.getElementById(`${locationLetter}_${Number(locationNumber) + 1}`)
            diaUpRight = document.getElementById(`${String.fromCharCode(locationLetter.charCodeAt(0) + 1)}_${Number(locationNumber) - 1}`)
            diaDownRight = document.getElementById(`${String.fromCharCode(locationLetter.charCodeAt(0) + 1)}_${Number(locationNumber) + 1}`)
            diaUpLeft = document.getElementById(`${String.fromCharCode(locationLetter.charCodeAt(0) - 1)}_${Number(locationNumber) - 1}`)
            diaDownLeft = document.getElementById(`${String.fromCharCode(locationLetter.charCodeAt(0) - 1)}_${Number(locationNumber) + 1}`)
            aaUp = document.getElementById(`${locationLetter}_${Number(locationNumber) - 2}`)
            aaDown = document.getElementById(`${locationLetter}_${Number(locationNumber) + 2}`)
            aDiaUpRight = document.getElementById(`${String.fromCharCode(locationLetter.charCodeAt(0) + 2)}_${Number(locationNumber) - 2}`)
            aDiaDownRight = document.getElementById(`${String.fromCharCode(locationLetter.charCodeAt(0) + 2)}_${Number(locationNumber) + 2}`)
            aDiaUpLeft = document.getElementById(`${String.fromCharCode(locationLetter.charCodeAt(0) - 2)}_${Number(locationNumber) - 2}`)
            aDiaDownLeft = document.getElementById(`${String.fromCharCode(locationLetter.charCodeAt(0) - 2)}_${Number(locationNumber) + 2}`)

            if(isKing === "true") {
                moves = [
                    { up: true},
                    { upRight: true },
                    { downRight: true } ,
                    { upLeft: true },
                    { downLeft: true },
                    { down: true }
                ]
            }
            else {
                if(checkerType === "black_checker") {
                    moves = [
                        { up: false},
                        { diaUpRight: false },
                        { diaDownRight: true } ,
                        { diaUpLeft: false },
                        { diaDownLeft: true },
                        { down: true }
                    ]
                }
                else {
                    moves = [
                        { up: true},
                        { diaUpRight: true },
                        { diaDownRight: false } ,
                        { diaUpLeft: true },
                        { diaDownLeft: false },
                        { down: false }
                    ]
                }
            }
        }


        // {
        //     className: "red_checker",
        //     currentLocation: "h_7",
        //     status: "alive",
        //     isKing: false,
        //     possibleMoves: [
        //         { up: true },
        //         { diaUpRight: false },
        //         { diaDownRight: false},
        //         { diaUpLeft: false},
        //         { diaDownLeft: false },
        //         { down: false}
        //     ]
        // }
    }

    render() {
        return (
            <div className="checker_board">
                <div className="dead_black_piece_container">
                    <p>dead black pieces</p>
                </div>
                <div className="board_container">
                    <div className="a_column checker_board_column_black">
                        <div className="space" id="a_1"></div>
                        <div className="space" id="a_2"></div>
                        <div className="space" id="a_3"></div>
                        <div className="space" id="a_4"></div>
                        <div className="space" id="a_5"></div>
                        <div className="space" id="a_6"></div>
                        <div className="space" id="a_7"></div>
                        <div className="space" id="a_8"></div>
                    </div>
                    <div className="b_column checker_board_column_tan">
                        <div className="space" id="b_1"></div>
                        <div className="space" id="b_2"></div>
                        <div className="space" id="b_3"></div>
                        <div className="space" id="b_4"></div>
                        <div className="space" id="b_5"></div>
                        <div className="space" id="b_6"></div>
                        <div className="space" id="b_7"></div>
                        <div className="space" id="b_8"></div>
                    </div>
                    <div className="c_column checker_board_column_black">
                        <div className="space" id="c_1"></div>
                        <div className="space" id="c_2"></div>
                        <div className="space" id="c_3"></div>
                        <div className="space" id="c_4"></div>
                        <div className="space" id="c_5"></div>
                        <div className="space" id="c_6"></div>
                        <div className="space" id="c_7"></div>
                        <div className="space" id="c_8"></div>
                    </div>
                    <div className="d_column checker_board_column_tan">
                        <div className="space" id="d_1"></div>
                        <div className="space" id="d_2"></div>
                        <div className="space" id="d_3"></div>
                        <div className="space" id="d_4"></div>
                        <div className="space" id="d_5"></div>
                        <div className="space" id="d_6"></div>
                        <div className="space" id="d_7"></div>
                        <div className="space" id="d_8"></div>
                    </div>
                    <div className="e_column checker_board_column_black">
                        <div className="space" id="e_1"></div>
                        <div className="space" id="e_2"></div>
                        <div className="space" id="e_3"></div>
                        <div className="space" id="e_4"></div>
                        <div className="space" id="e_5"></div>
                        <div className="space" id="e_6"></div>
                        <div className="space" id="e_7"></div>
                        <div className="space" id="e_8"></div>
                    </div>
                    <div className="f_column checker_board_column_tan">
                        <div className="space" id="f_1"></div>
                        <div className="space" id="f_2"></div>
                        <div className="space" id="f_3"></div>
                        <div className="space" id="f_4"></div>
                        <div className="space" id="f_5"></div>
                        <div className="space" id="f_6"></div>
                        <div className="space" id="f_7"></div>
                        <div className="space" id="f_8"></div>
                    </div>
                    <div className="g_column checker_board_column_black">
                        <div className="space" id="g_1"></div>
                        <div className="space" id="g_2"></div>
                        <div className="space" id="g_3"></div>
                        <div className="space" id="g_4"></div>
                        <div className="space" id="g_5"></div>
                        <div className="space" id="g_6"></div>
                        <div className="space" id="g_7"></div>
                        <div className="space" id="g_8"></div>
                    </div>
                    <div className="h_column checker_board_column_tan">
                        <div className="space" id="h_1"></div>
                        <div className="space" id="h_2"></div>
                        <div className="space" id="h_3"></div>
                        <div className="space" id="h_4"></div>
                        <div className="space" id="h_5"></div>
                        <div className="space" id="h_6"></div>
                        <div className="space" id="h_7"></div>
                        <div className="space" id="h_8"></div>
                    </div>
                </div>
                <div className="dead_red_piece_container">
                    <p>dead red pieces</p>
                </div>
            </div>
        )
    }
}

export default CheckerBoard