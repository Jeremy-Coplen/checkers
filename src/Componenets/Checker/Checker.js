import React from "react"

import blackCrown from "../../Images/blackCrown.jpg"
import redCrown from "../../Images/redCrown.png"
import "./Checker.scss"

const Checker = (props) => {
    const className = props.checker.className
    return (
        <div className={className}>
            {
                props.checker.isKing
                ?
                    
                    className === "black_checker"
                    ?
                        <img src={blackCrown} alt=""/>
                    :
                        <img src={redCrown} alt=""/>
                :
                    null
            }
        </div>
    )
}

export default Checker