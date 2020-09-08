import React, { Component } from "react"

import Space from "../Space/Space"
import "./Board.scss"

class Board extends Component {
    constructor(props) {
        super(props)

        this.state = {
            locationOne: 0,
            playerTurn: "black",
            clicked: false
        }
    }

    moveChecker = (location, hasChecker, color, isKing) => {
        if(this.state.clicked === false) {
            if(hasChecker.id) {
                let locationOne
                if(this.state.playerTurn === "black") {
                    if(color === "black_checker") {
                        locationOne = location
                        this.setState({
                            locationOne,
                            clicked: true
                        })
                    }
                    else {
                        alert("It is black checker's turn")
                        return
                    }
                }
                else {
                    if(color === "red_checker") {
                        locationOne = location
                        this.setState({
                            locationOne,
                            clicked: true
                        })
                    }
                    else {
                        alert("It is red checker's turn")
                        return
                    }
                }
            }
            else {
                alert("Please click on a space that has a checker")
                return
            }
        }
        else {
            let spaces = this.props.spaces
            let deadChecker
            let upRight = this.state.locationOne + 7
            let downRight = this.state.locationOne + 9
            let upLeft = this.state.locationOne - 9
            let downLeft = this.state.locationOne - 7
            let twoUpRight = this.state.locationOne + 14
            let twoUpLeft = this.state.locationOne - 18
            let twoDownRight = this.state.locationOne + 18
            let twoDownLeft = this.state.locationOne - 14
            if(this.state.playerTurn === "black") {
                if(this.state.locationOne <= 7) {
                    if(isKing) {
                        if(upRight === location) {
                            if(hasChecker.id) {
                                alert("Invalid move")
                                this.setState({
                                    clicked: false
                                })
                            }
                            else {
                                spaces[location].hasChecker = spaces[this.state.locationOne].hasChecker
                                spaces[this.state.locationOne].hasChecker = {}
                                this.props.updateSpaces(spaces)
                                this.setState({
                                    clicked: false,
                                    playerTurn: "red"
                                })
                            }
                        }
                        else if(twoUpRight === location) {
                            if(hasChecker.id) {
                                alert("Invalid move")
                                this.setState({
                                    clicked: false
                                })
                            }
                            else {
                                if(spaces[upRight].hasChecker.className === "red_checker") {
                                    deadChecker = spaces[upRight].hasChecker
                                    spaces[location].hasChecker = spaces[this.state.locationOne].hasChecker
                                    spaces[this.state.locationOne].hasChecker = {}
                                    this.props.updateSpaces(spaces, deadChecker, upRight)
                                    this.setState({
                                        clicked: false,
                                        playerTurn: "red"
                                    })
                                }
                                else {
                                    alert("Invalid move")
                                    this.setState({
                                        clicked: false
                                    })
                                }
                            }
                        }
                    }
                    if(downRight === location) {
                        if(hasChecker.id) {
                            alert("Invalid move")
                            this.setState({
                                clicked: false
                            })
                        }
                        else {
                            spaces[location].hasChecker = spaces[this.state.locationOne].hasChecker
                            spaces[this.state.locationOne].hasChecker = {}
                            this.props.updateSpaces(spaces)
                            this.setState({
                                clicked: false,
                                playerTurn: "red"
                            })
                        }
                    }
                    else if(twoDownRight === location) {
                        if(hasChecker.id) {
                            alert("Invalid move")
                            this.setState({
                                clicked: false
                            })
                        }
                        else {
                            if(spaces[downRight].hasChecker.className === "red_checker") {
                                deadChecker = spaces[downRight].hasChecker
                                spaces[location].hasChecker = spaces[this.state.locationOne].hasChecker
                                spaces[this.state.locationOne].hasChecker = {}
                                this.props.updateSpaces(spaces, deadChecker, downRight)
                                this.setState({
                                    clicked: false,
                                    playerTurn: "red"
                                })
                            }
                            else {
                                alert("Invalid move")
                                this.setState({
                                    clicked: false
                                })
                            }
                        }
                    }
                    else {
                        alert("Invalid move")
                        this.setState({
                            clicked: false
                        })
                    }
                }
                else if(this.state.locationOne >= 56) {
                    if(isKing) {
                        if(upLeft === location) {
                            if(hasChecker.id) {
                                alert("Invalid move")
                                this.setState({
                                    clicked: false
                                })
                            }
                            else {
                                spaces[location].hasChecker = spaces[this.state.locationOne].hasChecker
                                spaces[this.state.locationOne].hasChecker = {}
                                this.props.updateSpaces(spaces)
                                this.setState({
                                    clicked: false,
                                    playerTurn: "red"
                                })
                            }
                        }
                        else if(twoUpLeft === location) {
                            if(hasChecker.id) {
                                alert("Invalid move")
                                this.setState({
                                    clicked: false
                                })
                            }
                            else {
                                if(spaces[upLeft].hasChecker.className === "red_checker") {
                                    deadChecker = spaces[upLeft].hasChecker
                                    spaces[location].hasChecker = spaces[this.state.locationOne].hasChecker
                                    spaces[this.state.locationOne].hasChecker = {}
                                    this.props.updateSpaces(spaces, deadChecker, upLeft)
                                    this.setState({
                                        clicked: false,
                                        playerTurn: "red"
                                    })
                                }
                                else {
                                    alert("Invalid move")
                                    this.setState({
                                        clicked: false
                                    })
                                }
                            }
                        }
                    }
                    if(downLeft === location) {
                        if(hasChecker.id) {
                            alert("Invalid move")
                            this.setState({
                                clicked: false
                            })
                        }
                        else {
                            spaces[location].hasChecker = spaces[this.state.locationOne].hasChecker
                            spaces[this.state.locationOne].hasChecker = {}
                            this.props.updateSpaces(spaces)
                            this.setState({
                                clicked: false,
                                playerTurn: "red"
                            })
                        }
                    }
                    else if(twoDownLeft === location) {
                        if(hasChecker.id) {
                            alert("Invalid move")
                            this.setState({
                                clicked: false
                            })
                        }
                        else {
                            if(spaces[downLeft].hasChecker.className === "red_checker") {
                                deadChecker = spaces[downLeft].hasChecker
                                spaces[location].hasChecker = spaces[this.state.locationOne].hasChecker
                                spaces[this.state.locationOne].hasChecker = {}
                                this.props.updateSpaces(spaces, deadChecker, downLeft)
                                this.setState({
                                    clicked: false,
                                    playerTurn: "red"
                                })
                            }
                            else {
                                alert("Invalid move")
                                this.setState({
                                    clicked: false
                                })
                            }
                        }
                    }
                    else {
                        alert("Invalid move")
                        this.setState({
                            clicked: false
                        })
                    }
                }
                else {
                    if(isKing) {
                        if(upRight === location) {
                            if(hasChecker.id) {
                                alert("Invalid move")
                                this.setState({
                                    clicked: false
                                })
                            }
                            else {
                                spaces[location].hasChecker = spaces[this.state.locationOne].hasChecker
                                spaces[this.state.hasChecker] = {}
                                this.props.updateSpaces(spaces)
                                this.setState({
                                    clicked: false,
                                    playerTurn: "red"
                                })  
                            }
                        }
                        else if(upLeft === location) {
                            if(hasChecker.id) {
                                alert("Invalid move")
                                this.setState({
                                    clicked: false
                                })
                            }
                            else {
                                spaces[location].hasChecker = spaces[this.state.locationOne].hasChecker
                                spaces[this.state.locationOne].hasChecker = {}
                                this.props.updateSpaces(spaces)
                                this.setState({
                                    clicked: false,
                                    playerTurn: "red"
                                })
                            }
                        }
                        else if(twoUpRight === location) {
                            if(hasChecker.id) {
                                alert("Invalid move")
                                this.setState({
                                    clicked: false
                                })
                            }
                            else {
                                if(spaces[upRight].hasChecker.className === "red_checker") {
                                    deadChecker = spaces[upRight].hasChecker
                                    spaces[location].hasChecker = spaces[this.state.locationOne].hasChecker
                                    spaces[this.state.locationOne].hasChecker = {}
                                    this.props.updateSpaces(spaces, deadChecker, upRight)
                                    this.setState({
                                        clicked: false,
                                        playerTurn: "red"
                                    })
                                }
                                else {
                                    alert("Invalid move")
                                    this.setState({
                                        clicked: false
                                    })
                                }
                            }
                        }
                        else if(twoUpLeft === location) {
                            if(hasChecker.id) {
                                alert("Invalid move")
                                this.setState({
                                    clicked: false
                                })
                            }
                            else {
                                if(spaces[upLeft].hasChecker.className === "red_checker") {
                                    deadChecker = spaces[upLeft].hasChecker
                                    spaces[location].hasChecker = spaces[this.state.locationOne].hasChecker
                                    spaces[this.state.locationOne].hasChecker = {}
                                    this.props.updateSpaces(spaces, deadChecker, upLeft)
                                    this.setState({
                                        clicked: false,
                                        playerTurn: "red"
                                    })
                                }
                                else {
                                    alert("Invalid move")
                                    this.setState({
                                        clicked: false
                                    })
                                }
                            }
                        }
                    }
                    if(downRight === location) {
                        if(hasChecker.id) {
                            alert("Invalid move")
                            this.setState({
                                clicked: false
                            })
                        }
                        else {
                            spaces[location].hasChecker = spaces[this.state.locationOne].hasChecker
                            spaces[this.state.locationOne].hasChecker = {}
                            this.props.updateSpaces(spaces)
                            this.setState({
                                clicked: false,
                                playerTurn: "red"
                            })
                        }
                    }
                    else if(downLeft === location) {
                        if(hasChecker.id) {
                            alert("Invalid move")
                            this.setState({
                                clicked: false
                            })
                        }
                        else {
                            spaces[location].hasChecker = spaces[this.state.locationOne].hasChecker
                            spaces[this.state.locationOne].hasChecker = {}
                            this.props.updateSpaces(spaces)
                            this.setState({
                                clicked: false,
                                playerTurn: "red"
                            })
                        }
                    }
                    else if(twoDownRight === location) {
                        if(hasChecker.id) {
                            alert("Invalid move")
                            this.setState({
                                clicked: false
                            })
                        }
                        else {
                            if(spaces[downRight].hasChecker.className === "red_checker") {
                                deadChecker = spaces[downRight].hasChecker
                                spaces[location].hasChecker = spaces[this.state.locationOne].hasChecker
                                spaces[this.state.locationOne].hasChecker = {}
                                this.props.updateSpaces(spaces, deadChecker, downRight)
                                this.setState({
                                    clicked: false,
                                    playerTurn: "red"
                                })
                            }
                            else {
                                    alert("Invalid move")
                                this.setState({
                                    clicked: false
                                })
                            }
                        }
                    }
                    else if(twoDownLeft === location) {
                        if(hasChecker.id) {
                            alert("Invalid move")
                            this.setState({
                                clicked: false
                            })
                        }
                        else {
                            if(spaces[downLeft].hasChecker.className === "red_checker") {
                                deadChecker = spaces[downLeft].hasChecker
                                spaces[location].hasChecker = spaces[this.state.locationOne].hasChecker
                                spaces[this.state.locationOne].hasChecker = {}
                                this.props.updateSpaces(spaces, deadChecker, downLeft)
                                this.setState({
                                    clicked: false,
                                    playerTurn: "red"
                                })
                            }
                            else {
                                alert("Invalid move")
                                this.setState({
                                    clicked: false
                                })
                            }
                        }
                    }
                    else {
                        alert("Invalid move")
                        this.setState({
                            clicked: false
                        })
                    }
                }
            }
            else {
                if(this.state.locationOne <= 7) {
                    if(isKing) {
                        if(downRight === location) {
                            if(hasChecker.id) {
                                alert("Invalid move")
                                this.setState({
                                    clicked: false
                                })
                            }
                            else {
                                spaces[location].hasChecker = spaces[this.state.locationOne].hasChecker
                                spaces[this.state.locationOne].hasChecker = {}
                                this.props.updateSpaces(spaces)
                                this.setState({
                                    clicked: false,
                                    playerTurn: "black"
                                })
                            }
                        }
                        else if(twoDownRight === location) {
                            if(hasChecker.id) {
                                alert("Invalid move")
                                this.setState({
                                    clicked: false,
                                    playerTurn: "black"
                                })
                            }
                            else {
                                if(spaces[downRight].hasChecker.className === "black_checker") {
                                    deadChecker = spaces[downRight].hasChecker
                                    spaces[location].hasChecker = spaces[this.state.locationOne].hasChecker
                                    spaces[this.state.locationOne].hasChecker = {}
                                    this.props.updateSpaces(spaces, deadChecker, downRight)
                                    this.setState({
                                        clicked: false,
                                        playerTurn: "black"
                                    })
                                }
                                else {
                                    alert("Invalid move")
                                    this.setState({
                                        clicked: false
                                    })
                                }
                            }
                        }
                    }
                    if(upRight === location) {
                        if(hasChecker.id) {
                            alert("Invalid move")
                            this.setState({
                                clicked: false
                            })
                        }
                        else {
                            spaces[location].hasChecker = spaces[this.state.locationOne].hasChecker
                            spaces[this.state.locationOne].hasChecker = {}
                            this.props.updateSpaces(spaces)
                            this.setState({
                                clicked: false,
                                playerTurn: "black"
                            })
                        }
                    }
                    else if(twoUpRight === location) {
                        if(hasChecker.id) {
                            alert("Invalid move")
                            this.setState({
                                clicked: false
                            })
                        }
                        else {
                            if(spaces[upRight].hasChecker.className === "black_checker") {
                                deadChecker = spaces[upRight].hasChecker
                                spaces[location].hasChecker = spaces[this.state.locationOne].hasChecker
                                spaces[this.state.locationOne].hasChecker = {}
                                this.props.updateSpaces(spaces, deadChecker, upRight)
                                this.setState({
                                    clicked: false,
                                    playerTurn: "black"
                                })
                            }
                            else {
                                alert("Invalid move")
                                this.setState({
                                    clicked: false
                                })
                            }
                        }
                    }
                }
                else if(this.state.locationOne >= 56) {
                    if(isKing) {
                        if(downLeft === location) {
                            if(hasChecker.id) {
                                alert("Invalid move")
                                this.setState({
                                    clicked: false
                                })
                            }
                            else {
                                spaces[location].hasChecker = spaces[this.state.locationOne].hasChecker
                                spaces[this.state.locationOne].hasChecker = {}
                                this.props.updateSpaces(spaces)
                                this.setState({
                                    clicked: false,
                                    playerTurn: "black"
                                })
                            }
                        }
                        else if(twoDownLeft === location) {
                            if(hasChecker.id) {
                                alert("Invalid move")
                                this.setState({
                                    clicked: false
                                })
                            }
                            else {
                                if(spaces[downLeft].hasChecker.className === "black_checker") {
                                    deadChecker = spaces[downLeft].hasChecker
                                    spaces[location].hasChecker = spaces[this.state.locationOne].hasChecker
                                    spaces[this.state.locationOne].hasChecker = {}
                                    this.props.updateSpaces(spaces, deadChecker, downLeft)
                                    this.setState({
                                        clicked: false,
                                        playerTurn: "black"
                                    })
                                }
                                else {
                                    alert("Invalid move")
                                    this.setState({
                                        clicked: false
                                    })
                                }
                            }
                        }
                    }
                    if(upLeft === location) {
                        if(hasChecker.id) {
                            alert("Invalid move")
                            this.setState({
                                clicked: false
                            })
                        }
                        else {
                            spaces[location].hasChecker = spaces[this.state.locationOne].hasChecker
                            spaces[this.state.locationOne].hasChecker = {}
                            this.props.updateSpaces(spaces)
                            this.setState({
                                clicked: false,
                                playerTurn: "black"
                            })
                        }
                    }
                    else if(twoUpLeft === location) {
                        if(hasChecker.id) {
                            alert("Invalid move")
                            this.setState({
                                clicked: false
                            })
                        }
                        else {
                            if(spaces[upLeft].hasChecker.className === "black_checker") {
                                deadChecker = spaces[upLeft].hasChecker
                                spaces[location].hasChecker = spaces[this.state.locationOne].hasChecker
                                spaces[this.state.locationOne].hasChecker = {}
                                this.props.updateSpaces(spaces, deadChecker, upLeft)
                                this.setState({
                                    clicked: false,
                                    playerTurn: "black"
                                })
                            }
                            else {
                                alert("Invalid move")
                                this.setState({
                                    clicked: false
                                })
                            }
                        }
                    }
                }
                else {
                    if(isKing) {
                        if(downRight === location) {
                            if(hasChecker.id) {
                                alert("Invalid move")
                                this.setState({
                                    clicked: false
                                })
                            }
                            else {
                                spaces[location].hasChecker = spaces[this.state.locationOne].hasChecker
                                spaces[this.state.locationOne].hasChecker = {}
                                this.props.updateSpaces(spaces)
                                this.setState({
                                    clicked: false,
                                    playerTurn: "black"
                                })
                            }
                        }
                        else if(downLeft === location) {
                            if(hasChecker.id) {
                                alert("Invalid move")
                                this.setState({
                                    clicked: false
                                })
                            }
                            else {
                                spaces[location].hasChecker = spaces[this.state.locationOne].hasChecker
                                spaces[this.state.locationOne].hasChecker = {}
                                this.props.updateSpaces(spaces)
                                this.setState({
                                    clicked: false,
                                    playerTurn: "black"
                                })
                            }
                        }
                        else if(twoDownRight === location) {
                            if(hasChecker.id) {
                                alert("Invalid move")
                                this.setState({
                                    clicked: false
                                })
                            }
                            else {
                                if(spaces[downRight].hasChecker.className === "black_checker") {
                                    deadChecker = spaces[downRight].hasChecker
                                    spaces[location].hasChecker = spaces[this.state.locationOne].hasChecker
                                    spaces[this.state.locationOne].hasChecker = {}
                                    this.props.updateSpaces(spaces, deadChecker, downRight)
                                    this.setState({
                                        clicked: false,
                                        playerTurn: "black"
                                    })
                                }
                                else {
                                    alert("Invalid move")
                                    this.setState({
                                        clicked: false
                                    })
                                }
                            }
                        }
                        else if(twoDownLeft === location) {
                            if(hasChecker.id) {
                                alert("Invalid move")
                                this.setState({
                                    clicked: false
                                })
                            }
                            else {
                                if(spaces[downLeft].hasChecker.className === "black_checker") {
                                    deadChecker = spaces[downLeft].hasChecker
                                    spaces[location].hasChecker = spaces[this.state.locationOne].hasChecker
                                    spaces[this.state.locationOne].hasChecker = {}
                                    this.props.updateSpaces(spaces, deadChecker, downLeft)
                                    this.setState({
                                        clicked: false,
                                        playerTurn: "black"
                                    })
                                }
                                else {
                                    alert("Invalid move")
                                    this.setState({
                                        clicked: false
                                    })
                                }
                            }
                        }
                    }
                    if(upRight === location) {
                        if(hasChecker.id) {
                            alert("Invalid move")
                            this.setState({
                                clicked: false
                            })
                        }
                        else {
                            spaces[location].hasChecker = spaces[this.state.locationOne].hasChecker
                            spaces[this.state.locationOne].hasChecker = {}
                            this.props.updateSpaces(spaces)
                            this.setState({
                                clicked: false,
                                playerTurn: "black"
                            })
                        }
                    }
                    else if(upLeft === location) {
                        if(hasChecker.id) {
                            alert("Invalid move")
                            this.setState({
                                clicked: false
                            })
                        }
                        else {
                            spaces[location].hasChecker = spaces[this.state.locationOne].hasChecker
                            spaces[this.state.locationOne].hasChecker = {}
                            this.props.updateSpaces(spaces)
                            this.setState({
                                clicked: false,
                                playerTurn: "black"
                            })
                        }
                    }
                    else if(twoUpRight === location) {
                        if(hasChecker.id) {
                            alert("Invalid move")
                            this.setState({
                                clicked: false
                            })
                        }
                        else {
                            if(spaces[upRight].hasChecker.className === "black_checker") {
                                deadChecker = spaces[upRight].hasChecker
                                spaces[location].hasChecker = spaces[this.state.locationOne].hasChecker
                                spaces[this.state.locationOne].hasChecker = {}
                                this.props.updateSpaces(spaces, deadChecker, upRight)
                                this.setState({
                                    clicked: false,
                                    playerTurn: "black"
                                })
                            }
                            else {
                                alert("Invalid move")
                                this.setState({
                                    clicked: false
                                })
                            }
                        }
                    }
                    else if(twoUpLeft === location) {
                        if(hasChecker.id) {
                            alert("Invalid move")
                            this.setState({
                                clicked: false
                            })
                        }
                        else {
                            if(spaces[upLeft].hasChecker.className === "black_checker") {
                                deadChecker = spaces[upLeft].hasChecker
                                spaces[location].hasChecker = spaces[this.state.locationOne].hasChecker
                                spaces[this.state.locationOne].hasChecker = {}
                                this.props.updateSpaces(spaces, deadChecker, upLeft)
                                this.setState({
                                    clicked: false,
                                    playerTurn: "black"
                                })
                            }
                            else {
                                alert("Invalid move")
                                this.setState({
                                    clicked: false
                                })
                            }
                        }
                    }
                    else {
                        alert("Invalid move")
                        this.setState({
                            clicked: false
                        })
                    }
                }
            }
        }
    }

    render() {
        this.props.spaces.sort((a, b) => {
            if(a.id < b.id) {
                return - 1
            }
    
            if(a.id > b.id) {
                return 1
            }
    
            return 0
        })
    
        let spaces = this.props.spaces.map((space, i) => {
            return (
                <Space key={i} space={space} location={i} moveChecker={this.moveChecker} />
            )
        })
        return (
            <div className="board">
                <div className="column_a white_start">
                    {spaces[0]}
                    {spaces[1]}
                    {spaces[2]}
                    {spaces[3]}
                    {spaces[4]}
                    {spaces[5]}
                    {spaces[6]}
                    {spaces[7]}
                </div>
                <div className="column_b tan_start">
                    {spaces[8]}
                    {spaces[9]}
                    {spaces[10]}
                    {spaces[11]}
                    {spaces[12]}
                    {spaces[13]}
                    {spaces[14]}
                    {spaces[15]}
                </div>
                <div className="column_c white_start">
                    {spaces[16]}
                    {spaces[17]}
                    {spaces[18]}
                    {spaces[19]}
                    {spaces[20]}
                    {spaces[21]}
                    {spaces[22]}
                    {spaces[23]}
                </div>
                <div className="column_d tan_start">
                    {spaces[24]}
                    {spaces[25]}
                    {spaces[26]}
                    {spaces[27]}
                    {spaces[28]}
                    {spaces[29]}
                    {spaces[30]}
                    {spaces[31]}
                </div>
                <div className="column_e white_start">
                    {spaces[32]}
                    {spaces[33]}
                    {spaces[34]}
                    {spaces[35]}
                    {spaces[36]}
                    {spaces[37]}
                    {spaces[38]}
                    {spaces[39]}
                </div>
                <div className="column_f tan_start">
                    {spaces[40]}
                    {spaces[41]}
                    {spaces[42]}
                    {spaces[43]}
                    {spaces[44]}
                    {spaces[45]}
                    {spaces[46]}
                    {spaces[47]}
                </div>
                <div className="column_g white_start">
                    {spaces[48]}
                    {spaces[49]}
                    {spaces[50]}
                    {spaces[51]}
                    {spaces[52]}
                    {spaces[53]}
                    {spaces[54]}
                    {spaces[55]}
                </div>
                <div className="column_h tan_start">
                    {spaces[56]}
                    {spaces[57]}
                    {spaces[58]}
                    {spaces[59]}
                    {spaces[60]}
                    {spaces[61]}
                    {spaces[62]}
                    {spaces[63]}
                </div>
            </div>
        )   
    }
}

export default Board