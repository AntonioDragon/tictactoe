import React, { useContext }  from "react"
import ContextBlockGame from "./contextBlockGame"

const Result= (props) => {
    const {
        playerTurn, 
        winChecked
    } = useContext(ContextBlockGame)

    return (
        <div className="result">
            <h2 className="result__title">
                {!winChecked ?
                    `Player turn : ${playerTurn?"X":"O"}`
                    : props.drawChecked ? 
                        "Draw" 
                        :`Won : ${!playerTurn?"X":"O"}`}
            </h2>
        </div>
    )
}

export default Result