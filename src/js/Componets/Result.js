import React, {useContext} from "react"
import ContextBlockGame from "../Context/contextBlockGame"

const Result = (props) => {
    const {
        playerTurn, 
        winChecked
    } = useContext(ContextBlockGame)

const resultOutput = () => {
    let temp;
    if (!winChecked) temp = `Player turn : ${playerTurn ? "X" : "O"}`
    else if (props.drawChecked) temp = "Draw"
        else temp = `Won : ${playerTurn ? "O" : "X"}`
    return temp
}

    return (
        <div className="result">
            <h2 className="result__title">
                {resultOutput()}
            </h2>
        </div>
    )
}

export default Result