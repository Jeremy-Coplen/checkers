import React, { Component } from "react"

import crown from "../../Images/crown.jpg"
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

            checker.value = `${this.state.checkers[i].currentLocation},${this.state.checkers[i].isKing},${this.state.checkers[i].className}`

            checker.classList.add(this.state.checkers[i].className)

            checker.id = `${this.state.checkers[i].currentLocation} btn`

            if(this.state.checkers[i].isKing) {
                let king = document.createElement("img")

                king.src = crown

                checker.appendChild(king)
            }

            checker.addEventListener("click", this.canCheckerMove)

            space.appendChild(checker)
        }
    }

    canCheckerMove = (e) => {
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

        let moves = {}

        let killChecker

        let spacesMoved

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

                if(diaDownRight.children.length >= 1) {
                    if(diaDownRight.children.item(0).className === "red_checker") {
                        if(aDiaDownRight.children.length >= 1) {
                            moveDownRight = false
                            killChecker = false
                        }
                        else {
                            moveDownRight = true
                            killChecker = true
                            spacesMoved = 2
                        }
                    }
                    else {
                        moveDownRight = false
                        killChecker = false
                    }
                }
                else {
                    moveDownRight = true
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

                if(diaDownRight.children.length >= 1) {
                    if(diaDownRight.children.item(0).className === "black_checker") {
                        if(aDiaDownRight.children.length >= 1) {
                            moveDownRight = false
                            killChecker = false
                        }
                        else {
                            moveDownRight = true
                            killChecker = true
                            spacesMoved = 2
                        }
                    }
                    else {
                        moveDownRight = false
                        killChecker = false
                    }
                }
                else {
                    moveDownRight = true
                    killChecker = false
                    spacesMoved = 1
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
                    if(diaDownLeft.children.item(0).className === "red_checker") {
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
                            killChecker = false
                        }
                        else {
                            moveUp = true
                            killChecker = true
                            spacesMoved = 2
                        }
                    }
                    else {
                        moveUp = false
                        killChecker = false
                    }
                }
                else {
                    moveUp = true
                    killChecker = false
                    spacesMoved = 1
                }

                if(diaUpRight.children.length >= 1) {
                    if(diaUpRight.children.item(0).className === "red_checker") {
                        if(aDiaUpRight.children.length >= 1) {
                            moveUpRight = false
                            killChecker = false
                        }
                        else {
                            moveUpRight = true
                            killChecker = true
                            spacesMoved = 2
                        }
                    }
                    else {
                        moveUpRight = false
                        killChecker = false
                    }
                }
                else {
                    moveUpRight = true
                    killChecker = false
                    spacesMoved = 1
                }
            }
            else {
                if(adjacentUp.children.length >= 1) {
                    if(adjacentUp.children.item(0) === "black_checker") {
                        if(aaUp.children.length >= 1) {
                            moveUp = false
                            killChecker = false
                        }
                        else {
                            moveUp = true
                            killChecker = true
                            spacesMoved = 2
                        }
                    }
                    else {
                        moveUp = false
                        killChecker = false
                    }
                }
                else {
                    moveUp = true
                    killChecker = false
                    spacesMoved = 1
                }

                if(diaUpRight.children.length >= 1) {
                    if(diaUpRight.children.item(0).className === "black_checker") {
                        if(aDiaUpRight.children.length >= 1) {
                            moveUpRight = false
                            killChecker = false
                        }
                        else {
                            moveUpRight = true
                            killChecker = true
                            spacesMoved = 2
                        }
                    }
                    else {
                        moveUpRight = false
                        killChecker = false
                    }
                }
                else {
                    moveUpRight = true
                    killChecker = false
                    spacesMoved = 1
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
                            killChecker = false
                        }
                        else {
                            moveUp = true
                            killChecker = true
                            spacesMoved = 1
                        }
                    }
                    else {
                        moveUp = false
                        killChecker = false
                    }
                }
                else {
                    moveUp = true
                    killChecker = false
                    spacesMoved = 1
                }

                if(diaUpLeft.children.length >= 1) {
                    if(diaUpLeft.children.item(0).className === "red_checker") {
                        if(aDiaUpLeft.children.length >= 1) {
                            moveUpLeft = false
                            killChecker = false
                        }
                        else {
                            moveUpLeft = true
                            killChecker = true
                            spacesMoved = 2
                        }
                    }
                    else {
                        moveUpLeft = false
                        killChecker = false
                    }
                }
                else {
                    moveUpLeft = true
                    killChecker = false
                    spacesMoved = 1
                }
            }
            else {
                if(adjacentUp.children.length >= 1) {
                    if(adjacentUp.children.item(0).className === "black_checker") {
                        if(aaUp.children.length >= 1) {
                            moveUp = false
                            killChecker = false
                        }
                        else {
                            moveUp = true
                            killChecker = true
                            spacesMoved = 2
                        }
                    }
                    else {
                        moveUp = false
                        killChecker = false
                    }
                }
                else {
                    moveUp = true
                    killChecker = false
                    spacesMoved = 1
                }

                if(diaUpLeft.children.length >= 1) {
                    if(diaUpLeft.children.item(0).className === "black_decker") {
                        if(aDiaUpLeft.children.length >= 1) {
                            moveUpLeft = false
                            killChecker = false
                        }
                        else {
                            moveUpLeft = true
                            killChecker = true
                            spacesMoved = 2
                        }
                    }
                    else {
                        moveUpLeft = false
                        killChecker = false
                    }
                }
                else {
                    moveUpLeft = true
                    killChecker = false
                    spacesMoved = 1
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

            if(checkerType === "black_decker") {
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

                if(diaDownRight.children.length >= 1) {
                    if(diaDownRight.children.item(0).className === "red_checker") {
                        if(aDiaDownRight.children.length >= 1) {
                            moveDownRight = false
                            killChecker = false
                        }
                        else {
                            moveDownRight = true
                            killChecker = true
                            spacesMoved = 2
                        }
                    }
                    else {
                        moveDownRight = false
                        killChecker = false
                    }
                }
                else {
                    moveDownRight = true
                    killChecker = false
                    spacesMoved = 1
                }

                if(diaDownLeft.children.length >= 1) {
                    if(diaDownLeft.children.item(0).className === "red_checker") {
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

                if(diaDownRight.children.length >= 1) {
                    if(diaDownRight.children.item(0).className === "black_checker") {
                        if(aDiaDownRight.children.length >= 1) {
                            moveDownRight = false
                            killChecker = false
                        }
                        else {
                            moveDownRight = true
                            killChecker = true
                            spacesMoved = 2
                        }
                    }
                    else {
                        moveDownRight = false
                        killChecker = false
                    }
                }
                else {
                    moveDownRight = true
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
                            killChecker = false
                        }
                        else {
                            moveUp = true
                            killChecker = true
                            spacesMoved = 2
                        }
                    }
                    else {
                        moveUp = false
                        killChecker = false
                    }
                }
                else {
                    moveUp = true
                    killChecker = false
                    spacesMoved = 1
                }

                if(diaUpRight.children.length >= 1) {
                    if(diaUpRight.children.item(0).className === "red_checker") {
                        if(aDiaUpRight.children.length >= 1) {
                            moveUpRight = false
                            killChecker = false
                        }
                        else {
                            moveUpRight = true
                            killChecker = true
                            spacesMoved = 2
                        }
                    }
                    else {
                        moveUpRight = false
                        killChecker = false
                    }
                }
                else {
                    moveUpRight = true
                    killChecker = false
                    spacesMoved = 1
                }

                if(diaUpLeft.children.length >= 1) {
                    if(diaUpLeft.children.item(0).className === "red_checker") {
                        if(aDiaUpLeft.children.length >= 1) {
                            moveUpLeft = false
                            killChecker = false
                        }
                        else {
                            moveUpLeft = true
                            killChecker = true
                            spacesMoved = 2
                        }
                    }
                    else {
                        moveUpLeft = false
                        killChecker = false
                    }
                }
                else {
                    moveUpLeft = true
                    killChecker = false
                    spacesMoved = 1
                }
            }
            else {
                if(adjacentUp.children.length >= 1) {
                    if(adjacentUp.children.item(0).className === "black_checker") {
                        if(aaUp.children.length >= 1) {
                            moveUp = false
                            killChecker = false
                        }
                        else {
                            moveUp = true
                            killChecker = true
                            spacesMoved = 2
                        }
                    }
                    else {
                        moveUp = false
                        killChecker = false
                    }
                }
                else {
                    moveUp = true
                    killChecker = false
                    spacesMoved = 1
                }

                if(diaUpRight.children.length >= 1) {
                    if(diaUpRight.children.item(0).className === "black_checker") {
                        if(aDiaUpRight.children.length >= 1) {
                            moveUpRight = false
                            killChecker = false
                        }
                        else {
                            moveUpRight = true
                            killChecker = true
                            spacesMoved = 2
                        }
                    }
                    else {
                        moveUpRight = false
                        killChecker = false
                    }
                }
                else {
                    moveUpRight = true
                    killChecker = false
                    spacesMoved = 1
                }

                if(diaUpLeft.children.length >= 1) {
                    if(diaUpLeft.children.item(0).className === "black_checker") {
                        if(aDiaUpLeft.children.length >= 1) {
                            moveUpLeft = false
                            killChecker = false
                        }
                        else {
                            moveUpLeft = true
                            killChecker = true
                            spacesMoved = 2
                        }
                    }
                    else {
                        moveUpLeft = false
                        killChecker = false
                    }
                }
                else {
                    moveUpLeft = true
                    killChecker = false
                    spacesMoved = 1
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
                                killChecker = false
                            }
                            else {
                                moveUp = true
                                killChecker = true
                                spacesMoved = 2
                            }
                        }
                        else {
                            moveUp = false
                            killChecker = false
                        }
                    }
                    else {
                        moveUp = true
                        killChecker = false
                        spacesMoved = 1
                    }

                    if(diaUpRight.children.length >= 1) {
                        if(diaUpRight.children.item(0).className === "red_checker") {
                            if(aDiaUpRight.children.length >= 1) {
                                moveUpRight = false
                                killChecker = false
                            }
                            else {
                                moveUpRight = true
                                killChecker = true
                                spacesMoved = 2
                            }
                        }
                        else {
                            moveUpRight = false
                            killChecker = false
                        }
                    }
                    else {
                        moveUpRight = true
                        killChecker = false
                        spacesMoved = 1
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

                if(diaDownRight.children.length >= 1) {
                    if(diaDownRight.children.item(0).className === "red_checker") {
                        if(aDiaDownRight.children.length >= 1) {
                            moveDownRight = false
                            killChecker = false
                        }
                        else {
                            moveDownRight = true
                            killChecker = true
                            spacesMoved = 2
                        }
                    }
                    else {
                        moveDownRight = false
                        killChecker = false
                    }
                }
                else {
                    moveDownRight = true
                    killChecker = false
                    spacesMoved = 1
                }
            }
            else {
                if(isKing === "true") {
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

                    if(diaDownRight.children.length >= 1) {
                        if(diaDownRight.children.item(0).className === "black_checker") {
                            if(aDiaDownRight.children.length >= 1) {
                                moveDownRight = false
                                killChecker = false
                            }
                            else {
                                moveDownRight = true
                                killChecker = true
                                spacesMoved = 2
                            }
                        }
                        else {
                            moveDownRight = false
                            killChecker = false
                        }
                    }
                    else {
                        moveDownRight = true
                        killChecker = false
                        spacesMoved = 1
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
                            killChecker = false
                        }
                        else {
                            moveUp = true
                            killChecker = true
                            spacesMoved = 2
                        }
                    }
                    else {
                        moveUp = false
                        killChecker = false
                    }
                }
                else {
                    moveUp = true
                    killChecker = false
                    spacesMoved = 1
                }

                if(diaUpRight.children.length >= 1) {
                    if(diaUpRight.children.item(0).className === "black_checker") {
                        if(aDiaUpRight.children.length >= 1) {
                            moveUpRight = false
                            killChecker = false
                        }
                        else {
                            moveUpRight = true
                            killChecker = true
                            spacesMoved = 2
                        }
                    }
                    else {
                        moveUpRight = false
                        killChecker = false
                    }
                }
                else {
                    moveUpRight = true
                    killChecker = false
                    spacesMoved = 1
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
                                killChecker = false
                            }
                            else {
                                moveUp = true
                                killChecker = true
                                spacesMoved = 2
                            }
                        }
                        else {
                            moveUp = false
                            killChecker = false
                        }
                    }
                    else {
                        moveUp = true
                        killChecker = false
                        spacesMoved = 1
                    }

                    if(diaUpLeft.children.length >= 1) {
                        if(diaUpLeft.children.item(0).className === "red_checker") {
                            if(aDiaUpLeft.children.length >= 1) {
                                moveUpLeft = false
                                killChecker = false
                            }
                            else {
                                moveUpLeft = true
                                killChecker = true
                                spacesMoved = 2
                            }
                        }
                        else {
                            moveUpLeft = false
                            killChecker = false
                        }
                    }
                    else {
                        moveUpLeft = true
                        killChecker = false
                        spacesMoved = 1
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
                    if(diaDownLeft.children.item(0).className === "red_checker") {
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
            else {
                if(isKing === "true") {
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
                else {
                    moveDown = false
                    moveDownLeft = false
                }

                if(adjacentUp.children.length >= 1) {
                    if(adjacentUp.children.item(0).className === "black_checker") {
                        if(aaUp.children.length >= 1) {
                            moveUp = false
                            killChecker = false
                        }
                        else {
                            moveUp = true
                            killChecker = true
                            spacesMoved = 2
                        }
                    }
                    else {
                        moveUp = false
                        killChecker = false
                    }
                }
                else {
                    moveUp = true
                    killChecker = false
                    spacesMoved = 1
                }

                if(diaUpLeft.children.length >= 1) {
                    if(diaUpLeft.children.item(0).className === "black_checker") {
                        if(aDiaUpLeft.children.length >= 1) {
                            moveUpLeft = false
                            killChecker = false
                        }
                        else { 
                            moveUpLeft = true
                            killChecker = true
                            spacesMoved = 2
                        }
                    }
                    else {
                        moveUpLeft = false
                        killChecker = false
                    }
                }
                else {
                    moveUpLeft = true
                    killChecker = false
                    spacesMoved = 1
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
                                killChecker = false
                            }
                            else {
                                moveUp = true
                                killChecker = true
                                spacesMoved = 2
                            }
                        }
                        else {
                            moveUp = false
                            killChecker = false
                        }
                    }
                    else {
                        moveUp = true
                        killChecker = false
                        spacesMoved = 1
                    }

                    if(diaUpRight.children.length >= 1) {
                        if(diaUpRight.children.item(0).className === "red_checker") {
                            if(aDiaUpRight.children.length >= 1) {
                                moveUpRight = false
                                killChecker = false
                            }
                            else {
                                moveUpRight = true
                                killChecker = true
                                spacesMoved = 2
                            }
                        }
                        else {
                            moveUpRight = false
                            killChecker = false
                        }
                    }
                    else {
                        moveUpRight = true
                        killChecker = false
                        spacesMoved = 1
                    }

                    if(diaUpLeft.children.length >= 1) {
                        if(diaUpLeft.children.item(0).className === "red_checker") {
                            if(aDiaUpLeft.children.length >= 1) {
                                moveUpLeft = false
                                killChecker = false
                            }
                            else {
                                moveUpLeft = true
                                killChecker = true
                                spacesMoved = 2
                            }
                        }
                        else {
                            moveUpLeft = false
                            killChecker = false
                        }
                    }
                    else {
                        moveUpLeft = true
                        killChecker = false
                        spacesMoved = 1
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

                if(diaDownRight.children.length >= 1) {
                    if(diaDownRight.children.item(0).className === "red_checker") {
                        if(aDiaDownRight.children.length >= 1) {
                            moveDownRight = false
                            killChecker = false
                        }
                        else {
                            moveDownRight = true
                            killChecker = true
                            spacesMoved = 2
                        }
                    }
                    else {
                        moveDownRight = false
                        killChecker = false
                    }
                }
                else {
                    moveDownRight = true
                    killChecker = false
                    spacesMoved = 1
                }

                if(diaDownLeft.children.length >= 1) {
                    if(diaDownLeft.children.item(0).className === "red_checker") {
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
            else {
                if(isKing === "true") {
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

                    if(diaDownRight.children.length >= 1) {
                        if(diaDownRight.children.item(0).className === "black_checker") {
                            if(aDiaDownRight.children.length > 1) {
                                moveDownRight = false
                                killChecker = false
                            }
                            else {
                                moveDownRight = true
                                killChecker = true
                                spacesMoved = 2
                            }
                        }
                        else {
                            moveDownRight = false
                            killChecker = false
                        }
                    }
                    else {
                        moveDownRight = true
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
                else {
                    moveDown = false
                    moveDownRight = false
                    moveDownLeft = false
                }

                if(adjacentUp.children.length >= 1) {
                    if(adjacentUp.children.item(0).className === "black_checker") {
                        if(aaUp.children.length >= 1) {
                            moveUp = false
                            killChecker = false
                        }
                        else {
                            moveUp = true
                            killChecker = true
                            spacesMoved = 2
                        }
                    }
                    else {
                        moveUp = false
                        killChecker = false
                    }
                }
                else {
                    moveUp = true
                    killChecker = false
                    spacesMoved = 1
                }

                if(diaUpRight.children.length >= 1) {
                    if(diaUpRight.children.item(0).className === "black_checker") {
                        if(aDiaUpRight.children.length >= 1) {
                            moveUpRight = false
                            killChecker = false
                        }
                        else {
                            moveUpRight = true
                            killChecker = true
                            spacesMoved = 2
                        }
                    }
                    else {
                        moveUpRight = false
                        killChecker = false
                    }
                }
                else {
                    moveUpRight = true
                    killChecker = false
                    spacesMoved = 1
                }

                if(diaUpLeft.children.length >= 1) {
                    if(diaUpLeft.children.item(0).className === "black_checker") {
                        if(aDiaUpLeft.children.length >= 1) {
                            moveUpLeft = false
                            killChecker = false
                        }
                        else {
                            moveUpLeft = true
                            killChecker = true
                            spacesMoved = 2
                        }
                    }
                    else {
                        moveUpLeft = false
                        killChecker = false
                    }
                }
                else {
                    moveUpLeft = true
                    killChecker = false
                    spacesMoved = 1
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
        console.log(moves)
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