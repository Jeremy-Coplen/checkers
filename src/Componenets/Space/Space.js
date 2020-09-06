import React from "react"

import Checker from "../Checker/Checker"
import "./Space.scss"

const Space = (props) => {
    return (
        <div className="space"
        onClick={() => props.moveChecker(props.location, props.space.hasChecker, props.space.hasChecker.className || "", props.space.hasChecker.isKing || false)} >
            {
                props.space.hasChecker.id
                ?
                    <Checker checker={props.space.hasChecker} />
                :
                    null
            }
        </div>
    )
}

export default Space