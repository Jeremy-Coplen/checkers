import React from "react"

import "./Checker.scss"

const Checker = (props) => {
    const className = props.checker.className
    return (
        <div className={className}>
            {
                props.checker.isKing
                ?
                    <p>King</p>
                :
                    null
            }
        </div>
    )
}

export default Checker