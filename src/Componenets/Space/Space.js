import React from "react"

import Checker from "../Checker/Checker"
import "./Space.scss"

const Space = (props) => {
    return (
        <div className="space">
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