import React  from "react"

const Result= (props) => {
    return (
        <div className="result">
            <h2 className="result__title">
                {!props.winChecked ?
                    `Player turn : ${props.playerTurn?"X":"O"}`
                    : props.drawChecked ? 
                        "Draw" 
                        :`Won : ${!props.playerTurn?"X":"O"}`}
            </h2>
        </div>
    )
}

export default Result