import React from "react"

import Space from "../Space/Space"
import "./Board.scss"

const Board = (props) => {
    props.spaces.sort((a, b) => {
        if(a.id < b.id) {
            return - 1
        }

        if(a.id > b.id) {
            return 1
        }

        return 0
    })

    let spaces = props.spaces.map((space, i) => {
        return (
            <Space key={i} space={space} />
        )
    })

    console.log(props.spaces)
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

export default Board