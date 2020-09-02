import React, { Component } from "react"

import "./CheckerBoard.scss"

class CheckerBoard extends Component {
    constructor(props) {
        super(props)

        this.state = {
            checkers: [
                {
                    id: 1,
                    className: "black_checker",
                    currentLocation: "a_2",
                    status: "alive",
                    isKing: false
                },
                {
                    id: 2,
                    className: "black_checker",
                    currentLocation: "b_1",
                    status: "alive",
                    isKing: false
                },
                {
                    id: 3,
                    className: "black_checker",
                    currentLocation: "b_3",
                    status: "alive",
                    isKing: false
                },
                {
                    id: 4,
                    className: "black_checker",
                    currentLocation: "c_2",
                    status: "alive",
                    isKing: false
                },
                {
                    id: 5,
                    className: "black_checker",
                    currentLocation: "d_1",
                    status: "alive",
                    isKing: false
                },
                {
                    id: 6,
                    className: "black_checker",
                    currentLocation: "d_3",
                    status: "alive",
                    isKing: false
                },
                {
                    id: 7,
                    className: "black_checker",
                    currentLocation: "e_2",
                    status: "alive",
                    isKing: false
                },
                {
                    id: 8,
                    className: "black_checker",
                    currentLocation: "f_1",
                    status: "alive",
                    isKing: false
                },
                {
                    id: 9,
                    className: "black_checker",
                    currentLocation: "f_3",
                    status: "alive",
                    isKing: false
                },
                {
                    id: 10,
                    className: "black_checker",
                    currentLocation: "g_2",
                    status: "alive",
                    isKing: false
                },
                {
                    id: 11,
                    className: "black_checker",
                    currentLocation: "h_1",
                    status: "alive",
                    isKing: false
                },
                {
                    id: 12,
                    className: "black_checker",
                    currentLocation: "h_3",
                    status: "alive",
                    isKing: false
                },
                {
                    id: 13,
                    className: "red_checker",
                    currentLocation: "a_6",
                    status: "alive",
                    isKing: false
                },
                {
                    id: 14,
                    className: "red_checker",
                    currentLocation: "a_8",
                    status: "alive",
                    isKing: false
                },
                {
                    id: 15,
                    className: "red_checker",
                    currentLocation: "b_7",
                    status: "alive",
                    isKing: false
                },
                {
                    id: 16,
                    className: "red_checker",
                    currentLocation: "c_6",
                    status: "alive",
                    isKing: false
                },
                {
                    id: 17,
                    className: "red_checker",
                    currentLocation: "c_8",
                    status: "alive",
                    isKing: false
                },
                {
                    id: 18,
                    className: "red_checker",
                    currentLocation: "d_7",
                    status: "alive",
                    isKing: false
                },
                {
                    id: 19,
                    className: "red_checker",
                    currentLocation: "e_6",
                    status: "alive",
                    isKing: false
                },
                {
                    id: 20,
                    className: "red_checker",
                    currentLocation: "e_8",
                    status: "alive",
                    isKing: false
                },
                {
                    id: 21,
                    className: "red_checker",
                    currentLocation: "f_7",
                    status: "alive",
                    isKing: false
                },
                {
                    id: 22,
                    className: "red_checker",
                    currentLocation: "g_6",
                    status: "alive",
                    isKing: false
                },
                {
                    id: 23,
                    className: "red_checker",
                    currentLocation: "g_8",
                    status: "alive",
                    isKing: false
                },
                {
                    id: 24,
                    className: "red_checker",
                    currentLocation: "h_7",
                    status: "alive",
                    isKing: false
                }
            ]
        }
    }

    componentDidMount() {
        for(let i = 0; i < this.state.checkers.length; i++) {
            let space = document.getElementById(this.state.checkers[i].currentLocation)
            let checker = document.createElement("button")

            
            checker.classList.add(this.state.checkers[i].className)
            
            checker.id = `${this.state.checkers[i].id}`

            checker.value = `${this.state.checkers[i].currentLocation},${this.state.checkers[i].isKing},${this.state.checkers[i].className},${checker.id}`

            checker.style.display = "flex"

            let listener = this.canCheckerMove

            checker.addEventListener("click", listener, true)

            space.appendChild(checker)
        }
    }

    canCheckerMove = (e) => {
        let checkerInfo = e.target.value.split(",")
        let checkerId = checkerInfo[3]
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

        let moves = {}

        let killUpChecker
        let killDownChecker
        let killUpRightChecker
        let killDownRightChecker
        let killUpLeftChecker
        let killDownLeftChecker

        let movedUp
        let movedDown
        let movedUpRight
        let movedDownRight
        let movedUpLeft
        let movedDownLeft

        let canMove = false

        if(locationNumber === "1" && locationLetter === "a") {
            adjacentDown = document.getElementById(`${locationLetter}_${Number(locationNumber) + 1}`)
            diaDownRight = document.getElementById(`${String.fromCharCode(locationLetter.charCodeAt(0) + 1)}_${Number(locationNumber) + 1}`)
            aaDown = document.getElementById(`${locationLetter}_${Number(locationNumber) + 2}`)
            aDiaDownRight = document.getElementById(`${String.fromCharCode(locationLetter.charCodeAt(0) + 2)}_${Number(locationNumber) + 2}`)

            let moveDown
            let moveDownRight

            if(checkerType === "black_decker") {
                if(adjacentDown.children.length >= 1) {
                    if(adjacentDown.children.item(0).className === "red_checker") {
                        if(aaDown.children.length >= 1) {
                            moveDown = false
                            killDownChecker = false
                        }
                        else {
                            moveDown = true
                            killDownChecker = true
                            movedDown = 2
                        }
                    }
                    else {
                        moveDown = false
                        killDownChecker = false
                    }
                }
                else {
                    moveDown = true
                    killDownChecker = false
                    movedDown = 1
                }

                if(diaDownRight.children.length >= 1) {
                    if(diaDownRight.children.item(0).className === "red_checker") {
                        if(aDiaDownRight.children.length >= 1) {
                            moveDownRight = false
                            killDownRightChecker = false
                        }
                        else {
                            moveDownRight = true
                            killDownRightChecker = true
                            movedDownRight = 2
                        }
                    }
                    else {
                        moveDownRight = false
                        killDownRightChecker = false
                    }
                }
                else {
                    moveDownRight = true
                    killDownRightChecker = false
                    movedDownRight = 1
                }
            }
            else {
                if(adjacentDown.children.length >= 1) {
                    if(adjacentDown.children.item(0).className === "black_checker") {
                        if(aaDown.children.length >= 1) {
                            moveDown = false
                            killDownChecker = false
                        }
                        else {
                            moveDown = true
                            killDownChecker = true
                            movedDown = 2
                        }
                    }
                    else {
                        moveDown = false
                        killDownChecker = false
                    }
                }
                else {
                    moveDown = true
                    killDownChecker = false
                    movedDown = 1
                }

                if(diaDownRight.children.length >= 1) {
                    if(diaDownRight.children.item(0).className === "black_checker") {
                        if(aDiaDownRight.children.length >= 1) {
                            moveDownRight = false
                            killDownRightChecker = false
                        }
                        else {
                            moveDownRight = true
                            killDownRightChecker = true
                            movedDownRight = 2
                        }
                    }
                    else {
                        moveDownRight = false
                        killDownRightChecker = false
                    }
                }
                else {
                    moveDownRight = true
                    killDownRightChecker = false
                    movedDownRight = 1
                }
            }

            moves = {
                down: moveDown,
                downRight: moveDownRight
            }
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
                            killDownChecker = false
                        }
                        else {
                            moveDown = true
                            killDownChecker = true
                            movedDown = 2
                        }
                    }
                    else {
                        moveDown = false
                        killDownChecker = false
                    }
                }
                else {
                    moveDown = true
                    killDownChecker = false
                    movedDown = 1
                }

                if(diaDownLeft.children.length >= 1) {
                    if(diaDownLeft.children.item(0).className === "red_checker") {
                        if(aDiaDownLeft.children.length >=1) {
                            moveDownLeft = false
                            killDownLeftChecker = false
                        }
                        else {
                            moveDownLeft = true
                            killDownLeftChecker = true
                            movedDownLeft = 2
                        }
                    }
                    else {
                        moveDownLeft = false
                        killDownLeftChecker = false
                    }
                }
                else {
                    moveDownLeft = true
                    killDownLeftChecker = false
                    movedDownLeft = 1
                }
            }
            else {
                if(adjacentDown.children.length >= 1) {
                    if(adjacentDown.children.item(0).className === "black_checker") {
                        if(aaDown.children.length >= 1) {
                            moveDown = false
                            killDownChecker = false
                        }
                        else {
                            moveDown = true
                            killDownChecker = true
                            movedDown = 2
                        }
                    }
                    else {
                        moveDown = false
                        killDownChecker = false
                    }
                }
                else {
                    moveDown = true
                    killDownChecker = false
                    movedDown = 1
                }

                if(diaDownLeft.children.length >= 1) {
                    if(diaDownLeft.children.item(0).className === "black_checker") {
                        if(aDiaDownLeft.children.length >= 1) {
                            moveDownLeft = false
                            killDownLeftChecker = false
                        }
                        else {
                            moveDownLeft = true
                            killDownLeftChecker = true
                            movedDownLeft = 2
                        }
                    }
                    else {
                        moveDownLeft = false
                        killDownLeftChecker = false
                    }
                }
                else {
                    moveDownLeft = true
                    killDownLeftChecker = false
                    movedDownLeft = 1
                }
            }

            moves = {
                down: moveDown,
                donwLeft: moveDownLeft
            }
        }
        else if(locationNumber === "8" && locationLetter === "a") {
            adjacentUp = document.getElementById(`${locationLetter}_${Number(locationNumber) - 1}`)
            diaUpRight = document.getElementById(`${String.fromCharCode(locationLetter.charCodeAt(0) + 1)}_${Number(locationNumber) - 1}`)
            aaUp = document.getElementById(`${locationLetter}_${Number(locationNumber) - 2}`)
            aDiaUpRight = document.getElementById(`${String.fromCharCode(locationLetter.charCodeAt(0) + 2)}_${Number(locationNumber) - 2}`)

            let moveUp
            let moveUpRight

            if(checkerType === "black_checker") {
                if(adjacentUp.children.length >= 1) {
                    if(adjacentUp.children.item(0).className === "red_checker") {
                        if(aaUp.children.length >= 1) {
                            moveUp = false
                            killUpChecker = false
                        }
                        else {
                            moveUp = true
                            killUpChecker = true
                            movedUp = 2
                        }
                    }
                    else {
                        moveUp = false
                        killUpChecker = false
                    }
                }
                else {
                    moveUp = true
                    killUpChecker = false
                    movedUp = 1
                }

                if(diaUpRight.children.length >= 1) {
                    if(diaUpRight.children.item(0).className === "red_checker") {
                        if(aDiaUpRight.children.length >= 1) {
                            moveUpRight = false
                            killUpRightChecker = false
                        }
                        else {
                            moveUpRight = true
                            killUpRightChecker = true
                            movedUpRight = 2
                        }
                    }
                    else {
                        moveUpRight = false
                        killUpRightChecker = false
                    }
                }
                else {
                    moveUpRight = true
                    killUpRightChecker = false
                    movedUpRight = 1
                }
            }
            else {
                if(adjacentUp.children.length >= 1) {
                    if(adjacentUp.children.item(0) === "black_checker") {
                        if(aaUp.children.length >= 1) {
                            moveUp = false
                            killUpChecker = false
                        }
                        else {
                            moveUp = true
                            killUpChecker = true
                            movedUp = 2
                        }
                    }
                    else {
                        moveUp = false
                        killUpChecker = false
                    }
                }
                else {
                    moveUp = true
                    killUpChecker = false
                    movedUp = 1
                }

                if(diaUpRight.children.length >= 1) {
                    if(diaUpRight.children.item(0).className === "black_checker") {
                        if(aDiaUpRight.children.length >= 1) {
                            moveUpRight = false
                            killUpRightChecker = false
                        }
                        else {
                            moveUpRight = true
                            killUpRightChecker = true
                            movedUpRight = 2
                        }
                    }
                    else {
                        moveUpRight = false
                        killUpRightChecker = false
                    }
                }
                else {
                    moveUpRight = true
                    killUpRightChecker = false
                    movedUpRight = 1
                }
            }

            moves = {
                up: moveUp,
                upRight: moveUpRight
            }
        }
        else if(locationNumber === "8" && locationLetter === "h") {
            adjacentUp = document.getElementById(`${locationLetter}_${Number(locationNumber) - 1}`)
            diaUpLeft = document.getElementById(`${String.fromCharCode(locationLetter.charCodeAt(0) - 1)}_${Number(locationNumber) - 1}`)
            aaUp = document.getElementById(`${locationLetter}_${Number(locationNumber) - 2}`)
            aDiaUpLeft = document.getElementById(`${String.fromCharCode(locationLetter.charCodeAt(0) - 2)}_${Number(locationNumber) - 2}`)

            let moveUp
            let moveUpLeft

            if(checkerType === "black_checker") {
                if(adjacentUp.children.length >= 1) {
                    if(adjacentUp.children.item(0).className === "red_checker") {
                        if(aaUp.children.length >= 1) {
                            moveUp = false
                            killUpChecker = false
                        }
                        else {
                            moveUp = true
                            killUpChecker = true
                            movedUp = 1
                        }
                    }
                    else {
                        moveUp = false
                        killUpChecker = false
                    }
                }
                else {
                    moveUp = true
                    killUpChecker = false
                    movedUp = 1
                }

                if(diaUpLeft.children.length >= 1) {
                    if(diaUpLeft.children.item(0).className === "red_checker") {
                        if(aDiaUpLeft.children.length >= 1) {
                            moveUpLeft = false
                            killUpLeftChecker = false
                        }
                        else {
                            moveUpLeft = true
                            killUpLeftChecker = true
                            movedUpLeft = 2
                        }
                    }
                    else {
                        moveUpLeft = false
                        killUpLeftChecker = false
                    }
                }
                else {
                    moveUpLeft = true
                    killUpLeftChecker = false
                    movedUpLeft = 1
                }
            }
            else {
                if(adjacentUp.children.length >= 1) {
                    if(adjacentUp.children.item(0).className === "black_checker") {
                        if(aaUp.children.length >= 1) {
                            moveUp = false
                            killUpChecker = false
                        }
                        else {
                            moveUp = true
                            killUpChecker = true
                            movedUp = 2
                        }
                    }
                    else {
                        moveUp = false
                        killUpChecker = false
                    }
                }
                else {
                    moveUp = true
                    killUpChecker = false
                    movedUp = 1
                }

                if(diaUpLeft.children.length >= 1) {
                    if(diaUpLeft.children.item(0).className === "black_decker") {
                        if(aDiaUpLeft.children.length >= 1) {
                            moveUpLeft = false
                            killUpLeftChecker = false
                        }
                        else {
                            moveUpLeft = true
                            killUpLeftChecker = true
                            movedUpLeft = 2
                        }
                    }
                    else {
                        moveUpLeft = false
                        killUpLeftChecker = false
                    }
                }
                else {
                    moveUpLeft = true
                    killUpLeftChecker = false
                    movedUpLeft = 1
                }
            }

            moves = {
                up: moveUp,
                upLeft: moveUpLeft
            }
        }
        else if(locationNumber === "1") {
            adjacentDown = document.getElementById(`${locationLetter}_${Number(locationNumber) + 1}`)
            diaDownRight = document.getElementById(`${String.fromCharCode(locationLetter.charCodeAt(0) + 1)}_${Number(locationNumber) + 1}`)
            diaDownLeft = document.getElementById(`${String.fromCharCode(locationLetter.charCodeAt(0) - 1)}_${Number(locationNumber) + 1}`)
            aaDown = document.getElementById(`${locationLetter}_${Number(locationNumber) + 2}`)
            aDiaDownRight = document.getElementById(`${String.fromCharCode(locationLetter.charCodeAt(0) + 2)}_${Number(locationNumber) + 2}`)
            aDiaDownLeft = document.getElementById(`${String.fromCharCode(locationLetter.charCodeAt(0) - 2)}_${Number(locationNumber) + 2}`)

            let moveDown
            let moveDownRight
            let moveDownLeft

            if(checkerType === "black_checker") {
                if(adjacentDown.children.length >= 1) {
                    if(adjacentDown.children.item(0).className === "red_checker") {
                        if(aaDown.children.length >= 1) {
                            moveDown = false
                            killDownChecker = false
                        }
                        else {
                            moveDown = true
                            killDownChecker = true
                            movedDown = 2
                        }
                    }
                    else {
                        moveDown = false
                        killDownChecker = false
                    }
                }
                else {
                    moveDown = true
                    killDownChecker = false
                    movedDown = 1
                }

                if(diaDownRight.children.length >= 1) {
                    if(diaDownRight.children.item(0).className === "red_checker") {
                        if(aDiaDownRight.children.length >= 1) {
                            moveDownRight = false
                            killDownRightChecker = false
                        }
                        else {
                            moveDownRight = true
                            killDownRightChecker = true
                            movedDownRight = 2
                        }
                    }
                    else {
                        moveDownRight = false
                        killDownRightChecker = false
                    }
                }
                else {
                    moveDownRight = true
                    killDownRightChecker = false
                    movedDownRight = 1
                }

                if(diaDownLeft.children.length >= 1) {
                    if(diaDownLeft.children.item(0).className === "red_checker") {
                        if(aDiaDownLeft.children.length >= 1) {
                            moveDownLeft = false
                            killDownLeftChecker = false
                        }
                        else {
                            moveDownLeft = true
                            killDownLeftChecker = true
                            movedUpLeft = 2
                        }
                    }
                    else {
                        moveDownLeft = false
                        killDownLeftChecker = false
                    }
                }
                else {
                    moveDownLeft = true
                    killDownLeftChecker = false
                    movedDownLeft = 1
                }
            }
            else {
                if(adjacentDown.children.length >= 1) {
                    if(adjacentDown.children.item(0).className === "black_checker") {
                        if(aaDown.children.length >= 1) {
                            moveDown = false
                            killDownChecker = false
                        }
                        else {
                            moveDown = true
                            killDownChecker = true
                            movedDown = 2
                        }
                    }
                    else {
                        moveDown = false
                        killDownChecker = false
                    }
                }
                else {
                    moveDown = true
                    killDownChecker = false
                    movedDown = 1
                }

                if(diaDownRight.children.length >= 1) {
                    if(diaDownRight.children.item(0).className === "black_checker") {
                        if(aDiaDownRight.children.length >= 1) {
                            moveDownRight = false
                            killDownRightChecker = false
                        }
                        else {
                            moveDownRight = true
                            killDownRightChecker = true
                            movedDownRight = 2
                        }
                    }
                    else {
                        moveDownRight = false
                        killDownRightChecker = false
                    }
                }
                else {
                    moveDownRight = true
                    killDownRightChecker = false
                    movedDownRight = 1
                }

                if(diaDownLeft.children.length >= 1) {
                    if(diaDownLeft.children.item(0).className === "black_checker") {
                        if(aDiaDownLeft.children.length >= 1) {
                            moveDownLeft = false
                            killDownLeftChecker = false
                        }
                        else {
                            moveDownLeft = true
                            killDownLeftChecker = true
                            movedDownLeft = 2
                        }
                    }
                    else {
                        moveDownLeft = false
                        killDownLeftChecker = false
                    }
                }
                else {
                    moveDownLeft = true
                    killDownLeftChecker = false
                    movedDownLeft = 1
                }
            }

            moves = {
                down: moveDown,
                downRight: moveDownRight,
                downLeft: moveDownLeft
            }
        }
        else if(locationNumber === "8") {
            adjacentUp = document.getElementById(`${locationLetter}_${Number(locationNumber) - 1}`)
            diaUpRight = document.getElementById(`${String.fromCharCode(locationLetter.charCodeAt(0) + 1)}_${Number(locationNumber) - 1}`)
            diaUpLeft = document.getElementById(`${String.fromCharCode(locationLetter.charCodeAt(0) - 1)}_${Number(locationNumber) - 1}`)
            aaUp = document.getElementById(`${locationLetter}_${Number(locationNumber) - 2}`)
            aDiaUpRight = document.getElementById(`${String.fromCharCode(locationLetter.charCodeAt(0) + 2)}_${Number(locationNumber) - 2}`)
            aDiaUpLeft = document.getElementById(`${String.fromCharCode(locationLetter.charCodeAt(0) - 2)}_${Number(locationNumber) - 2}`)

            let moveUp
            let moveUpRight
            let moveUpLeft

            if(checkerType === "black_checker") {
                if(adjacentUp.children.length >= 1) {
                    if(adjacentUp.children.item(0).className === "red_checker") {
                        if(aaUp.children.length >= 1) {
                            moveUp = false
                            killUpChecker = false
                        }
                        else {
                            moveUp = true
                            killUpChecker = true
                            movedUp = 2
                        }
                    }
                    else {
                        moveUp = false
                        killUpChecker = false
                    }
                }
                else {
                    moveUp = true
                    killUpChecker = false
                    movedUp = 1
                }

                if(diaUpRight.children.length >= 1) {
                    if(diaUpRight.children.item(0).className === "red_checker") {
                        if(aDiaUpRight.children.length >= 1) {
                            moveUpRight = false
                            killUpRightChecker = false
                        }
                        else {
                            moveUpRight = true
                            killUpRightChecker = true
                            movedUpRight = 2
                        }
                    }
                    else {
                        moveUpRight = false
                        killUpRightChecker = false
                    }
                }
                else {
                    moveUpRight = true
                    killUpRightChecker = false
                    movedUpRight = 1
                }

                if(diaUpLeft.children.length >= 1) {
                    if(diaUpLeft.children.item(0).className === "red_checker") {
                        if(aDiaUpLeft.children.length >= 1) {
                            moveUpLeft = false
                            killUpLeftChecker = false
                        }
                        else {
                            moveUpLeft = true
                            killUpLeftChecker = true
                            movedUpLeft = 2
                        }
                    }
                    else {
                        moveUpLeft = false
                        killUpLeftChecker = false
                    }
                }
                else {
                    moveUpLeft = true
                    killUpLeftChecker = false
                    movedUpLeft = 1
                }
            }
            else {
                if(adjacentUp.children.length >= 1) {
                    if(adjacentUp.children.item(0).className === "black_checker") {
                        if(aaUp.children.length >= 1) {
                            moveUp = false
                            killUpChecker = false
                        }
                        else {
                            moveUp = true
                            killUpChecker = true
                            movedUp = 2
                        }
                    }
                    else {
                        moveUp = false
                        killUpChecker = false
                    }
                }
                else {
                    moveUp = true
                    killUpChecker = false
                    movedUp = 1
                }

                if(diaUpRight.children.length >= 1) {
                    if(diaUpRight.children.item(0).className === "black_checker") {
                        if(aDiaUpRight.children.length >= 1) {
                            moveUpRight = false
                            killUpRightChecker = false
                        }
                        else {
                            moveUpRight = true
                            killUpRightChecker = true
                            movedUpRight = 2
                        }
                    }
                    else {
                        moveUpRight = false
                        killUpRightChecker = false
                    }
                }
                else {
                    moveUpRight = true
                    killUpRightChecker = false
                    movedUpRight = 1
                }

                if(diaUpLeft.children.length >= 1) {
                    if(diaUpLeft.children.item(0).className === "black_checker") {
                        if(aDiaUpLeft.children.length >= 1) {
                            moveUpLeft = false
                            killUpLeftChecker = false
                        }
                        else {
                            moveUpLeft = true
                            killUpLeftChecker = true
                            movedUpLeft = 2
                        }
                    }
                    else {
                        moveUpLeft = false
                        killUpLeftChecker = false
                    }
                }
                else {
                    moveUpLeft = true
                    killUpLeftChecker = false
                    movedUpLeft = 1
                }
            }

            moves = {
                up: moveUp,
                upRight: moveUpRight,
                upLeft: moveUpLeft
            }
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

            let moveUp
            let moveDown
            let moveUpRight
            let moveDownRight

            if(checkerType === "black_checker") {
                if(isKing === "true") {
                    if(adjacentUp.children.length >= 1) {
                        if(adjacentUp.children.item(0).className === "red_checker") {
                            if(aaUp.children.length >= 1) {
                                moveUp = false
                                killUpChecker = false
                            }
                            else {
                                moveUp = true
                                killUpChecker = true
                                movedUp = 2
                            }
                        }
                        else {
                            moveUp = false
                            killUpChecker = false
                        }
                    }
                    else {
                        moveUp = true
                        killUpChecker = false
                        movedUp = 1
                    }

                    if(diaUpRight.children.length >= 1) {
                        if(diaUpRight.children.item(0).className === "red_checker") {
                            if(aDiaUpRight.children.length >= 1) {
                                moveUpRight = false
                                killUpRightChecker = false
                            }
                            else {
                                moveUpRight = true
                                killUpRightChecker = true
                                movedUpRight = 2
                            }
                        }
                        else {
                            moveUpRight = false
                            killUpRightChecker = false
                        }
                    }
                    else {
                        moveUpRight = true
                        killUpRightChecker = false
                        movedUpRight = 1
                    }
                }
                else {
                    moveUp = false
                    moveUpRight = false
                }

                if(adjacentDown.children.length >= 1) {
                    if(adjacentDown.children.item(0).className === "red_checker") {
                        if(aaDown.children.length >= 1) {
                            moveDown = false
                            killDownChecker = false
                        }
                        else {
                            moveDown = true
                            killDownChecker = true
                            movedDown = 2
                        }
                    }
                    else {
                        moveDown = false
                        killDownChecker = false
                    }
                }
                else {
                    moveDown = true
                    killDownChecker = false
                    movedDown = 1
                }

                if(diaDownRight.children.length >= 1) {
                    if(diaDownRight.children.item(0).className === "red_checker") {
                        if(aDiaDownRight.children.length >= 1) {
                            moveDownRight = false
                            killDownRightChecker = false
                        }
                        else {
                            moveDownRight = true
                            killDownRightChecker = true
                            movedDownRight = 2
                        }
                    }
                    else {
                        moveDownRight = false
                        killDownRightChecker = false
                    }
                }
                else {
                    moveDownRight = true
                    killDownRightChecker = false
                    movedDownRight = 1
                }
            }
            else {
                if(isKing === "true") {
                    if(adjacentDown.children.length >= 1) {
                        if(adjacentDown.children.item(0).className === "black_checker") {
                            if(aaDown.children.length >= 1) {
                                moveDown = false
                                killDownChecker = false
                            }
                            else {
                                moveDown = true
                                killDownChecker = true
                                movedDown = 2
                            }
                        }
                        else {
                            moveDown = false
                            killDownChecker = false
                        }
                    }
                    else {
                        moveDown = true
                        killDownChecker = false
                        movedDown = 1
                    }

                    if(diaDownRight.children.length >= 1) {
                        if(diaDownRight.children.item(0).className === "black_checker") {
                            if(aDiaDownRight.children.length >= 1) {
                                moveDownRight = false
                                killDownRightChecker = false
                            }
                            else {
                                moveDownRight = true
                                killDownRightChecker = true
                                movedDownRight = 2
                            }
                        }
                        else {
                            moveDownRight = false
                            killDownRightChecker = false
                        }
                    }
                    else {
                        moveDownRight = true
                        killDownRightChecker = false
                        movedDownRight = 1
                    }
                }
                else {
                    moveDown = false
                    moveDownRight = false
                }

                if(adjacentUp.children.length >= 1) {
                    if(adjacentUp.children.item(0).className === "black_checker") {
                        if(aaUp.children.length >= 1) {
                            moveUp = false
                            killUpChecker = false
                        }
                        else {
                            moveUp = true
                            killUpChecker = true
                            movedUp = 2
                        }
                    }
                    else {
                        moveUp = false
                        killUpChecker = false
                    }
                }
                else {
                    moveUp = true
                    killUpChecker = false
                    movedUp = 1
                }

                if(diaUpRight.children.length >= 1) {
                    if(diaUpRight.children.item(0).className === "black_checker") {
                        if(aDiaUpRight.children.length >= 1) {
                            moveUpRight = false
                            killUpRightChecker = false
                        }
                        else {
                            moveUpRight = true
                            killUpRightChecker = true
                            movedUpRight = 2
                        }
                    }
                    else {
                        moveUpRight = false
                        killUpRightChecker = false
                    }
                }
                else {
                    moveUpRight = true
                    killUpRightChecker = false
                    movedUpRight = 1
                }
            }

            moves = {
                up: moveUp,
                down: moveDown,
                upRight: moveUpRight,
                downRight: moveDownRight
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

            let moveUp
            let moveDown
            let moveUpLeft
            let moveDownLeft

            if(checkerType === "black_checker") {
                if(isKing === "true") {
                    if(adjacentUp.children.length >= 1) {
                        if(adjacentUp.children.item(0).className === "red_checker") {
                            if(aaUp.children.length >= 1) {
                                moveUp = false
                                killUpChecker = false
                            }
                            else {
                                moveUp = true
                                killUpChecker = true
                                movedUp = 2
                            }
                        }
                        else {
                            moveUp = false
                            killUpChecker = false
                        }
                    }
                    else {
                        moveUp = true
                        killUpChecker = false
                        movedUp = 1
                    }

                    if(diaUpLeft.children.length >= 1) {
                        if(diaUpLeft.children.item(0).className === "red_checker") {
                            if(aDiaUpLeft.children.length >= 1) {
                                moveUpLeft = false
                                killUpLeftChecker = false
                            }
                            else {
                                moveUpLeft = true
                                killUpLeftChecker = true
                                movedUpLeft = 2
                            }
                        }
                        else {
                            moveUpLeft = false
                            killUpLeftChecker = false
                        }
                    }
                    else {
                        moveUpLeft = true
                        killUpLeftChecker = false
                        movedUpLeft = 1
                    }
                }
                else {
                    moveUp = false
                    moveUpLeft = false
                }

                if(adjacentDown.children.length >= 1) {
                    if(adjacentDown.children.item(0).className === "red_checker") {
                        if(aaDown.children.length >= 1) {
                            moveDown = false
                            killDownChecker = false
                        }
                        else {
                            moveDown = true
                            killDownChecker = true
                            movedDown = 2
                        }
                    }
                    else {
                        moveDown = false
                        killDownChecker = false
                    }
                }
                else {
                    moveDown = true
                    killDownChecker = false
                    movedDown = 1
                }

                if(diaDownLeft.children.length >= 1) {
                    if(diaDownLeft.children.item(0).className === "red_checker") {
                        if(aDiaDownLeft.children.length >= 1) {
                            moveDownLeft = false
                            killDownLeftChecker = false
                        }
                        else {
                            moveDownLeft = true
                            killDownLeftChecker = true
                            movedDownLeft = 2
                        }
                    }
                    else {
                        moveDownLeft = false
                        killDownLeftChecker = false
                    }
                }
                else {
                    moveDownLeft = true
                    killDownLeftChecker = false
                    movedDownLeft = 1
                }
            }
            else {
                if(isKing === "true") {
                    if(adjacentDown.children.length >= 1) {
                        if(adjacentDown.children.item(0).className === "black_checker") {
                            if(aaDown.children.length >= 1) {
                                moveDown = false
                                killDownChecker = false
                            }
                            else {
                                moveDown = true
                                killDownChecker = true
                                movedDown = 2
                            }
                        }
                        else {
                            moveDown = false
                            killDownChecker = false
                        }
                    }
                    else {
                        moveDown = true
                        killDownChecker = false
                        movedDown = 1
                    }

                    if(diaDownLeft.children.length >= 1) {
                        if(diaDownLeft.children.item(0).className === "black_checker") {
                            if(aDiaDownLeft.children.length >= 1) {
                                moveDownLeft = false
                                killDownLeftChecker = false
                            }
                            else {
                                moveDownLeft = true
                                killDownLeftChecker = true
                                movedDownLeft = 2
                            }
                        }
                        else {
                            moveDownLeft = false
                            killDownLeftChecker = false
                        }
                    }
                    else {
                        moveDownLeft = true
                        killDownLeftChecker = false
                        movedDownLeft = 1
                    }
                }
                else {
                    moveDown = false
                    moveDownLeft = false
                }

                if(adjacentUp.children.length >= 1) {
                    if(adjacentUp.children.item(0).className === "black_checker") {
                        if(aaUp.children.length >= 1) {
                            moveUp = false
                            killUpChecker = false
                        }
                        else {
                            moveUp = true
                            killUpChecker = true
                            movedUp = 2
                        }
                    }
                    else {
                        moveUp = false
                        killUpChecker = false
                    }
                }
                else {
                    moveUp = true
                    killUpChecker = false
                    movedUp = 1
                }

                if(diaUpLeft.children.length >= 1) {
                    if(diaUpLeft.children.item(0).className === "black_checker") {
                        if(aDiaUpLeft.children.length >= 1) {
                            moveUpLeft = false
                            killUpLeftChecker = false
                        }
                        else { 
                            moveUpLeft = true
                            killUpLeftChecker = true
                            movedUpLeft = 2
                        }
                    }
                    else {
                        moveUpLeft = false
                        killUpLeftChecker = false
                    }
                }
                else {
                    moveUpLeft = true
                    killUpLeftChecker = false
                    movedUpLeft = 1
                }
            }

            moves = {
                up: moveUp,
                down: moveDown,
                upLeft: moveUpLeft,
                downLeft: moveDownLeft
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

            let moveUp
            let moveDown
            let moveUpRight
            let moveDownRight
            let moveUpLeft
            let moveDownLeft

            if(checkerType === "black_checker") {
                if(isKing === "true") {
                    if(adjacentUp.children.length >= 1) {
                        if(adjacentUp.children.item(0).className === "red_checker") {
                            if(aaUp.children.length >= 1) {
                                moveUp = false
                                killUpChecker = false
                            }
                            else {
                                moveUp = true
                                killUpChecker = true
                                movedUp = 2
                            }
                        }
                        else {
                            moveUp = false
                            killUpChecker = false
                        }
                    }
                    else {
                        moveUp = true
                        killUpChecker = false
                        movedUp = 1
                    }

                    if(diaUpRight.children.length >= 1) {
                        if(diaUpRight.children.item(0).className === "red_checker") {
                            if(aDiaUpRight.children.length >= 1) {
                                moveUpRight = false
                                killUpRightChecker = false
                            }
                            else {
                                moveUpRight = true
                                killUpRightChecker = true
                                movedUpRight = 2
                            }
                        }
                        else {
                            moveUpRight = false
                            killUpRightChecker = false
                        }
                    }
                    else {
                        moveUpRight = true
                        killUpRightChecker = false
                        movedUpRight = 1
                    }

                    if(diaUpLeft.children.length >= 1) {
                        if(diaUpLeft.children.item(0).className === "red_checker") {
                            if(aDiaUpLeft.children.length >= 1) {
                                moveUpLeft = false
                                killUpLeftChecker = false
                            }
                            else {
                                moveUpLeft = true
                                killUpLeftChecker = true
                                movedUpLeft = 2
                            }
                        }
                        else {
                            moveUpLeft = false
                            killUpLeftChecker = false
                        }
                    }
                    else {
                        moveUpLeft = true
                        killUpLeftChecker = false
                        movedUpLeft = 1
                    }
                }
                else {
                    moveUp = false
                    moveUpRight = false
                    moveUpLeft = false
                }

                if(adjacentDown.children.length >= 1) {
                    if(adjacentDown.children.item(0).className === "red_checker") {
                        if(aaDown.children.length >= 1) {
                            moveDown = false
                            killDownChecker = false
                        }
                        else {
                            moveDown = true
                            killDownChecker = true
                            movedDown = 2
                        }
                    }
                    else {
                        moveDown = false
                        killDownChecker = false
                    }
                }
                else {
                    moveDown = true
                    killDownChecker = false
                    movedDown = 1
                }

                if(diaDownRight.children.length >= 1) {
                    if(diaDownRight.children.item(0).className === "red_checker") {
                        console.log(aDiaDownRight)
                        if(aDiaDownRight.children.length >= 1) {
                            moveDownRight = false
                            killDownRightChecker = false
                        }
                        else {
                            moveDownRight = true
                            killDownRightChecker = true
                            movedDownRight = 2
                        }
                    }
                    else {
                        moveDownRight = false
                        killDownRightChecker = false
                    }
                }
                else {
                    moveDownRight = true
                    killDownRightChecker = false
                    movedDownRight = 1
                }

                if(diaDownLeft.children.length >= 1) {
                    if(diaDownLeft.children.item(0).className === "red_checker") {
                        if(aDiaDownLeft.children.length >= 1) {
                            moveDownLeft = false
                            killDownRightChecker = false
                        }
                        else {
                            moveDownLeft = true
                            killDownRightChecker = true
                            movedDownLeft = 2
                        }
                    }
                    else {
                        moveDownLeft = false
                        killDownRightChecker = false
                    }
                }
                else {
                    moveDownLeft = true
                    killDownRightChecker = false
                    movedDownLeft = 1
                }
            }
            else {
                if(isKing === "true") {
                    if(adjacentDown.children.length >= 1) {
                        if(adjacentDown.children.item(0).className === "black_checker") {
                            if(aaDown.children.length >= 1) {
                                moveDown = false
                                killDownChecker = false
                            }
                            else {
                                moveDown = true
                                killDownChecker = true
                                movedDown = 2
                            }
                        }
                        else {
                            moveDown = false
                            killDownChecker = false
                        }
                    }
                    else {
                        moveDown = true
                        killDownChecker = false
                        movedDown = 1
                    }

                    if(diaDownRight.children.length >= 1) {
                        if(diaDownRight.children.item(0).className === "black_checker") {
                            if(aDiaDownRight.children.length > 1) {
                                moveDownRight = false
                                killDownRightChecker = false
                            }
                            else {
                                moveDownRight = true
                                killDownRightChecker = true
                                movedDownRight = 2
                            }
                        }
                        else {
                            moveDownRight = false
                            killDownRightChecker = false
                        }
                    }
                    else {
                        moveDownRight = true
                        killDownRightChecker = false
                        movedDownRight = 1
                    }

                    if(diaDownLeft.children.length >= 1) {
                        if(diaDownLeft.children.item(0).className === "black_checker") {
                            if(aDiaDownLeft.children.length >= 1) {
                                moveDownLeft = false
                                killDownLeftChecker = false
                            }
                            else {
                                moveDownLeft = true
                                killDownLeftChecker = true
                                movedDownLeft = 2
                            }
                        }
                        else {
                            moveDownLeft = false
                            killDownLeftChecker = false
                        }
                    }
                    else {
                        moveDownLeft = true
                        killDownLeftChecker = false
                        movedDownLeft = 1
                    }
                }
                else {
                    moveDown = false
                    moveDownRight = false
                    moveDownLeft = false
                }

                console.log(adjacentUp)

                if(adjacentUp.children.length >= 1) {
                    if(adjacentUp.children.item(0).className === "black_checker") {
                        if(aaUp.children.length >= 1) {
                            moveUp = false
                            killUpChecker = false
                        }
                        else {
                            moveUp = true
                            killUpChecker = true
                            movedUp = 2
                        }
                    }
                    else {
                        moveUp = false
                        killUpChecker = false
                    }
                }
                else {
                    moveUp = true
                    killUpChecker = false
                    movedUp = 1
                }

                if(diaUpRight.children.length >= 1) {
                    if(diaUpRight.children.item(0).className === "black_checker") {
                        if(aDiaUpRight.children.length >= 1) {
                            moveUpRight = false
                            killUpRightChecker = false
                        }
                        else {
                            moveUpRight = true
                            killUpRightChecker = true
                            movedUpRight = 2
                        }
                    }
                    else {
                        moveUpRight = false
                        killUpRightChecker = false
                    }
                }
                else {
                    moveUpRight = true
                    killUpRightChecker = false
                    movedUpRight = 1
                }

                if(diaUpLeft.children.length >= 1) {
                    if(diaUpLeft.children.item(0).className === "black_checker") {
                        if(aDiaUpLeft.children.length >= 1) {
                            moveUpLeft = false
                            killUpLeftChecker = false
                        }
                        else {
                            moveUpLeft = true
                            killUpLeftChecker = true
                            movedUpLeft = 2
                        }
                    }
                    else {
                        moveUpLeft = false
                        killUpLeftChecker = false
                    }
                }
                else {
                    moveUpLeft = true
                    killUpLeftChecker = false
                    movedUpLeft = 1
                }
            }

            moves = {
                up: moveUp,
                down: moveDown,
                upRight: moveUpRight,
                downRight: moveDownRight,
                upLeft: moveUpLeft,
                downLeft: moveDownLeft
            }
        }

        let possibleMoves = []
        
        for(const property in moves) {
            if(moves[property] === true) {
                canMove = true
                possibleMoves.push(property)
            }
        }

        if(canMove === true) {
            let reducer = (total, current) => `${total} ` + `${current} `
            let promptMessage = possibleMoves.reduce(reducer, "You can move ")

            let checkersCopy = this.state.checkers

            let checkerState
            checkerState = {
                id: Number(checkerId),
                className: checkerType,
                status: "alive"
            }

            let checkerIndex = this.state.checkers.findIndex(checker => checker.id === Number(checkerId))
            let willBeKing

            let king = document.createElement("p")

            let kingText = document.createTextNode("KING")

            let preventChildClick = (e) => {
                e.stopPropagation()
            }

            king.addEventListener("click", preventChildClick)

            king.appendChild(kingText)

            let move = prompt(promptMessage, possibleMoves[0])

            let currentChecker = document.getElementById(checkerId)

            let enemyChecker
            let enemyRemove

            let deadChecker

            let deadBlackPieces = document.getElementById("dead_black")
            let deadRedPieces = document.getElementById("dead_red")

            let listener = this.canCheckerMove

            currentChecker.style.display = "none"
            currentChecker.removeEventListener("click", listener, true)
            currentChecker.parentNode.removeChild(currentChecker)

            let newChecker = document.createElement("button")

            newChecker.classList.add(checkerType)

            newChecker.id = checkerId

            newChecker.style.display = "flex"
            
            newChecker.addEventListener("click", this.canCheckerMove, true)

            if(possibleMoves.includes(move)) {
                if(move === "up") {
                    if(movedUp === 1) {
                        if(isKing === "true") {
                            willBeKing = true
                        }
                        else if(checkerType === "red_checker" && adjacentUp.id.includes("1") && isKing === "false") {
                            willBeKing = true
                            newChecker.appendChild(king)
                        }
                        else {
                            willBeKing = false
                        }
    
                        checkerState.isKing = willBeKing
                        checkerState.currentLocation = adjacentUp.id
    
                        newChecker.value = `${adjacentUp.id},${willBeKing},${checkerType},${checkerId}`
    
                        adjacentUp.appendChild(newChecker)

                        console.log(currentChecker)
                    }
                    else {
                        if(isKing === "true") {
                            willBeKing = true
                        }
                        else if (checkerType === "red_checker" && aaUp.id.includes("1") && isKing === "false") {
                            willBeKing = true
                            newChecker.appendChild(king)
                            king.value = `${adjacentDown.id},${willBeKing},${checkerType},${checkerId}`
                        }
                        else {
                            willBeKing = false
                        }

                        checkerState.isKing = willBeKing
                        checkerState.currentLocation = aaUp.id

                        newChecker.value = `${aaUp.id},${willBeKing},${checkerType},${checkerId}`

                        aaUp.appendChild(newChecker)

                        enemyChecker = this.state.checkers.find(checker => checker.id === Number(adjacentUp.children.item(0).id))

                        enemyRemove = document.getElementById(`${enemyChecker.id}`)

                        enemyRemove.removeEventListener("click", listener, true)

                        enemyRemove.remove()
                    }
                }
                else if(move === "down") {
                    console.log(movedDown)
                    if(movedDown === 1) {
                        console.log(checkerType)
                        if(isKing === "true") {
                            willBeKing = true
                            newChecker.appendChild(king)
                        }
                        else if(checkerType === "black_checker" && adjacentDown.id.includes("8") && isKing === "false") {
                            willBeKing = true
                            newChecker.appendChild(king)
                        }
                        else {
                            willBeKing = false
                        }
    
                        checkerState.isKing = willBeKing
                        checkerState.currentLocation = adjacentDown.id
    
                        newChecker.value = `${adjacentDown.id},${willBeKing},${checkerType},${checkerId}`
    
                        adjacentDown.appendChild(newChecker)
                    }
                    else {
                        console.log("hit")
                        if(isKing === "true") {
                            willBeKing = true
                            newChecker.appendChild(king)
                        }
                        else if(checkerType === "black_checker" && aaDown.id.includes("8") && isKing === "false") {
                            willBeKing = true
                            newChecker.appendChild(king)
                        }
                        else {
                            willBeKing = false
                        }

                        checkerState.isKing = willBeKing
                        checkerState.currentLocation = aaDown.id

                        newChecker.value = `${aaDown.id},${willBeKing},${checkerType},${checkerId}`

                        aaDown.appendChild(newChecker)
                        
                        enemyChecker = this.state.checkers.find(checker => checker.id === Number(adjacentDown.children.item(0).id))

                        enemyRemove = document.getElementById(`${enemyChecker.id}`)

                        console.log(enemyRemove.canCheckerMove)

                        enemyRemove.removeEventListener("click", listener, true)

                        enemyRemove.remove()
                    }
                }
                
                checkersCopy[checkerIndex] = checkerState

                if(killUpChecker === true || 
                    killDownChecker === true || 
                    killUpRightChecker === true || 
                    killDownRightChecker === true || 
                    killUpLeftChecker === true || 
                    killDownLeftChecker === true) {
                    checkersCopy.splice(enemyChecker, 1)

                    deadChecker = document.createElement("div")

                    if(checkerType === "black_checker") {
                        deadChecker.classList.add("dead_red_checker")

                        deadBlackPieces.appendChild(deadChecker)
                    }
                    else {
                        deadChecker.classList.add("dead_black_checker")

                        deadRedPieces.appendChild(deadChecker)
                    }
                }

                this.setState({
                    checkers: checkersCopy
                })
            }
            else {
                alert("Invalid move name")
                return
            }
        }
        else {
            alert("This checker cannot move")
            return
        }
    }

    render() {
        return (
            <div className="checker_board">
                <div id="dead_black" className="dead_black_piece_container"></div>
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
                <div id="dead_red" className="dead_red_piece_container"></div>
            </div>
        )
    }
}

export default CheckerBoard